import styled from "@emotion/styled"
import { Link } from "react-router-dom"

import UnstyledButton from '../UnstyledButton'

import iconMoon from '../assets/icon-moon.svg'
import iconSun from '../assets/icon-sun.svg'

export default function Header({ theme, setTheme }) {
  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Container>
      <Wrapper>
        <Header_><Link to="/">Where in the world?</Link></Header_>
        <ThemeChanger onClick={handleThemeChange}>
          <span>
            <img src={theme === 'dark' ? iconSun : iconMoon} alt="" />
          </span>
          <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
        </ThemeChanger>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--header-bg-color);
  box-shadow: 
      0 2px 4px var(--shadow-color),
      0 8px 16px var(--shadow-color);
`;

const Wrapper = styled.header`
  max-width: calc(1440 / 16 * 1rem);
  margin: 0 auto;
  padding-inline: clamp(var(--spacing-300), 10vw - 2rem, var(--spacing-1000));
  padding-block: var(--spacing-300);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header_ = styled.h1`
  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    a {
      text-decoration: revert;
    }
  }
`;

const ThemeChanger = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  gap: calc(12 / 16 * 1rem);
  font-weight: var(--fw-semiBold);
  padding: var(--spacing-100);
  border: 2px solid var(--header-bg-color);

  &:hover {
    border-color: var(--text-color);
    border-radius: var(--spacing-100);
  }
`;