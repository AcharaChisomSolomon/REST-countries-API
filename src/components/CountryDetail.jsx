import styled from "@emotion/styled"
import { useParams, useNavigate } from "react-router-dom"
import UnstyledButton from "../UnstyledButton"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useFetch } from "../hooks/useFetch"
import BorderCountry from "./BorderCountry"

const formatPopulation = population => {
  if (typeof population !== 'number') return population;
  
  return population.toLocaleString('en-US');
}

export default function CountryDetail() {
  const { name } = useParams()
  console.log(name)
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`

  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1) // Goes back one step in history
  }

  const { data, loading } = useFetch(url)
  if (loading) {
    return <p>Loading...</p>
  }
  console.log(data[0])

  const { 
    borders,
    name: { common, nativeName },
    population,
    region,
    subregion,
    capital: [capital],
    tld: [tld],
    currencies,
    languages,
    flags: { svg, alt }
   } = data[0]

  return (
    <Wrapper>

      <BackButton onClick={handleGoBack}>
        <ArrowLeftIcon />
        <span>Back</span>
      </BackButton>

      <Details>
        <ImageWrapper><Image src={svg} alt={alt} /></ImageWrapper>
        <FactsContainer>
          <h2>{common}</h2>
          <Facts1>
            <CountryFact>
              Native Name: <span>{Object.values(nativeName)[0].common}</span>
              </CountryFact>
            <CountryFact>
              Population: <span>{formatPopulation(population)}</span>
            </CountryFact>
            <CountryFact>Region: <span>{region}</span></CountryFact>
            <CountryFact>Sub Region: <span>{subregion}</span></CountryFact>
            <CountryFact>Capital: <span>{capital}</span></CountryFact>
          </Facts1>
          <Facts2>
            <CountryFact>Top Level Domain: <span>{tld}</span></CountryFact>
            <CountryFact>Currencies: <span>{
                Object.values(currencies).map(c => c.name).join(', ')
              }</span>
            </CountryFact>
            <CountryFact>Languages: <span>{
                Object.values(languages).join(', ')
              }</span>
            </CountryFact>
          </Facts2>
          <BorderContainer>
            <BorderTitle>Border Countries:</BorderTitle>
            <Borders>
              {borders &&
                borders
                  .map(border => <BorderCountry key={border} cioc={border} />)
              }
            </Borders>
          </BorderContainer>
        </FactsContainer>
      </Details>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: calc(1440 / 16 * 1rem);
  margin: 0 auto;
  padding-inline: clamp(var(--spacing-300), 10vw - 2rem, var(--spacing-1000));
  margin-block-end: var(--spacing-1000);
`;

const BackButton = styled(UnstyledButton)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: calc(12 / 16 * 1rem);
  background-color: var(--header-bg-color);
  padding: var(--spacing-200) var(--spacing-500);
  border-radius: var(--spacing-100);
  box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
  
  margin-block-start: clamp(2.5rem, 6.667vw + 0rem, 5rem);
  margin-block-end: clamp(3.5rem, 4vw + 2rem, 5rem);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 
      0 4px 8px var(--shadow-color),
      0 12px 20px var(--shadow-color);
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-rows: auto var(--spacing-700) auto;

  @media (min-width: calc(550 / 16 * 1rem)) {
    grid-template-rows: auto var(--spacing-800) auto;
  }

  @media (min-width: calc(1100 / 16 * 1rem)) {
    column-gap: calc(126 / 16 * 1rem);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const ImageWrapper = styled.div`
  border-radius: var(--spacing-100);
  overflow: hidden;
  align-self: center;
  grid-row: 1 / 2;

  @media (min-width: calc(1100 / 16 * 1rem)) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const Image = styled.img`
`;

const FactsContainer = styled.div`
  align-self: center;
  grid-row: 3 / 4;
  display: grid;
  grid-template-rows: auto var(--spacing-400) auto var(--spacing-700) auto var(--spacing-600) auto;

  h2 {
    grid-row: 1 / 2;
  }

  @media (min-width: calc(550 / 16 * 1rem)) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto var(--spacing-600) auto clamp(3rem, 6.024vw + -1.627rem, 5rem) auto;

    h2 {
      grid-column: 1 / 3;
      align-self: end;
    }
  }

  @media (min-width: calc(1100 / 16 * 1rem)) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

const Facts = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
`;

const Facts1 = styled(Facts)`
  grid-row: 3 / 4;

  @media (min-width: calc(550 / 16 * 1rem)) {
    grid-column: 1 / 2;
  }
`;
const Facts2 = styled(Facts)`
  grid-row: 5 / 6;

  @media (min-width: calc(550 / 16 * 1rem)) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  @media (min-width: calc(1100 / 16 * 1rem)) {
    justify-self: end;
  }
`;

const CountryFact = styled.p`
  font-weight: var(--fw-semiBold);

  span {
    font-weight: var(--fw-light);
  }
`;

const BorderContainer = styled.div`
  align-self: start;
  grid-row: 7 / 8;

  @media (min-width: calc(550 / 16 * 1rem)) {
    grid-row: 5 / 6;
    grid-column: 1 / 3;
    display: flex;
    gap: var(--spacing-200);
  }
`;

const BorderTitle = styled.p`
  min-width: max-content;
  font-weight: var(--fw-semiBold);
  margin-block-end: var(--spacing-300);
`;

const Borders = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-200);
`;