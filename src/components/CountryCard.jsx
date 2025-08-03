import styled from "@emotion/styled"
import { Link } from "react-router-dom";

const formatPopulation = population => {
  if (typeof population !== 'number') return population;
  
  return population.toLocaleString('en-US');
}

export default function CountryCard({ countryData }) {
  const { 
    name: { official }, 
    flags: { png },
    capital: [capital],
    region,
    population
  } = countryData
  return (
    <CardContainer>

      <Link to={`/country/${official}`}>

        <img src={png} height='160px' width='100%' alt="" />
        <InfoContainer>
          <CardName>{official}</CardName>
          <Fact><Title>Population: </Title>{formatPopulation(population)}</Fact>
          <Fact><Title>Region: </Title>{region}</Fact>
          <Fact><Title>Capital: </Title>{capital}</Fact>
        </InfoContainer>

      </Link>

    </CardContainer>
  )
}

const CardContainer = styled.article`
  background-color: var(--header-bg-color);
  box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
  border-radius: var(--spacing-100);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 
      0 4px 8px var(--shadow-color),
      0 12px 24px var(--shadow-color);
  }
`;

const InfoContainer = styled.div`
  padding: var(--spacing-300);
  padding-block-end: var(--spacing-600);
`;

const CardName = styled.h3`
  margin-block-end: var(--spacing-200);
`;

const Fact = styled.p`
  font-size: var(--fs-5);
  font-weight: var(--fw-light);
`;

const Title = styled.span`
  font-weight: var(--fw-semiBold);
`;