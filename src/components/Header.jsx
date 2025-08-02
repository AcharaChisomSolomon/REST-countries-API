import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import UnstyledButton from '../UnstyledButton'

export default function Header() {
  return (
    <header>
      <Header_><Link to="/">Where in the world?</Link></Header_>
    </header>
  )
}

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