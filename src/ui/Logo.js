import styled from "styled-components";
import { logo_light } from "../data/Images.js";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logo_light} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
