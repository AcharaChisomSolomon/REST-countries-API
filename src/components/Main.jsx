import React from "react";
import RegionSelector from "./RegionSelector";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import styled from "@emotion/styled";

export default function Main() {
  const [searchDetails, setSearchDetails] = React.useState({
    searchTerm: '',
    region: 'all'
  })
  const { searchTerm, region } = searchDetails
  React.useEffect(() => {
    console.log(searchTerm, region)
  }, [searchTerm, region])

  return (
    <Wrapper>
      <InputContainer>
        <MagnifyingGlassIcon width={17.5} height={17.5} />
        <Input 
          id="searchTerm"
          placeholder="Search for a country..."
          type="text" 
          value={searchDetails.searchTerm}
          onChange={(e) => setSearchDetails({...searchDetails, searchTerm: e.target.value})}
        />
      </InputContainer>
      <RegionSelector 
        setSearchDetails={setSearchDetails}
      />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: calc(1440 / 16 * 1rem);
  margin: 0 auto;
  padding-inline: clamp(var(--spacing-300), 10vw - 2rem, var(--spacing-1000));
  margin-block: clamp(1.5rem, 4vw + 0rem, 3rem);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: var(--spacing-500);
`;

const InputContainer = styled.div`
  /* flex-grow: 1; */

  background-color: var(--header-bg-color);
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
  /* border: 2px solid red; */
  flex-basis: calc(480 / 16 * 1rem);
  padding: var(--spacing-200) var(--spacing-400);
  border-radius: var(--spacing-100);
`;

const Input = styled.input`
  background-color: inherit;
  flex-grow: 1;
  border: none;
  color: inherit;

  &::placeholder {
    color: var(--text-color);
    opacity: 1; /* Firefox sets opacity to 0.54 by default */
  }

  &:focus {
    outline: none;
  }
`;