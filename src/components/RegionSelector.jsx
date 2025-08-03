import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styled from "@emotion/styled";

export default function RegionSelector({ setSearchDetails }) {
  const handleRegionChange = (value) => {
    setSearchDetails(prev => ({
      ...prev,
      region: value
    }));
  };

  return (
    <Container>
      <FilterSection>
        <Select.Root onValueChange={handleRegionChange} defaultValue="all">
          <SelectTrigger>
            <Select.Value placeholder="Filter by Region" />
            <SelectIcon>
              <ChevronDownIcon />
            </SelectIcon>
          </SelectTrigger>

          <Select.Portal>
            <SelectContent 
              position="popper"
              sideOffset={8}
              collisionPadding={0}
            >
              
              <SelectViewport>
                <SelectItem value="all">
                  <Select.ItemText>All</Select.ItemText>
                </SelectItem>
                
                <SelectItem value="africa">
                  <Select.ItemText>Africa</Select.ItemText>
                </SelectItem>
                
                <SelectItem value="americas">
                  <Select.ItemText>Americas</Select.ItemText>
                </SelectItem>

                <SelectItem value="antarctic">
                  <Select.ItemText>Antarctic</Select.ItemText>
                </SelectItem>
                
                <SelectItem value="asia">
                  <Select.ItemText>Asia</Select.ItemText>
                </SelectItem>
                
                <SelectItem value="europe">
                  <Select.ItemText>Europe</Select.ItemText>
                </SelectItem>
                
                <SelectItem value="oceania">
                  <Select.ItemText>Oceania</Select.ItemText>
                </SelectItem>

              </SelectViewport>
              
            </SelectContent>
          </Select.Portal>
        </Select.Root>
      </FilterSection>
    </Container>
  )
}

const Container = styled.main`
  width: calc(200 / 16 * 1rem);
`;

const FilterSection = styled.section`
  position: relative;
`;

const SelectTrigger = styled(Select.Trigger)`
  color: var(--text-color);
  background-color: var(--header-bg-color);
  border: none;
  border-radius: var(--spacing-100);
  box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-200) var(--spacing-300);
`;

const SelectIcon = styled(Select.Icon)`
  color: var(--text-color);
`;

const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
  width: calc(200 / 16 * 1rem);
  z-index: 50;
`;

const SelectViewport = styled(Select.Viewport)`
  padding: 16px 5px;
`;

const SelectItem = styled(Select.Item)`
  font-size: var(--fs-5);
  line-height: 1;
  color: var(--text-color);
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: var(--spacing-100) calc(19 / 16 * 1rem);
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: none;

  &:hover,
  &[data-highlighted] {
    background-color: var(--bg-color);
    box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
  }

  &[data-state="checked"] {
    background-color: var(--bg-color);
    font-weight: var(--fw-semiBold);
  }

  &[data-disabled] {
    color: var(--c-grey-300);
    pointer-events: none;
  }
`;

