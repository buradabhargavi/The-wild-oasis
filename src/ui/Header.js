import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: orangered;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray);
`;
function Header() {
  return <StyledHeader>StyledHeader</StyledHeader>;
}

export default Header;
