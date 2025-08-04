import { Link } from "react-router-dom"
import UnstyledButton from "../UnstyledButton"
import { useFetch } from "../hooks/useFetch"
import styled from "@emotion/styled";

export default function BorderCountry({ cioc }) {
  const url = `https://restcountries.com/v3.1/alpha/${cioc}?fields=name`
  const {data, loading, error} = useFetch(url);

  if (loading) {
    return <p>...</p>
  }

  if (error) {
    return
  }

  console.log(data)

  const { name : {common, official} } = data

  return (
    <>
      <Linker to={`/country/${official}`}>
        <BorderButton>{common}</BorderButton>
      </Linker>
    </>
  )
}

const Linker = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const BorderButton = styled(UnstyledButton)`
  width: 100%;
  font-weight: var(--fw-light);
  background-color: var(--header-bg-color);
  text-align: center;
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--spacing-100);
  box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
  
  &:hover {
    transform: scale(1.09);
  }
`;