import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <h1>MKS sistemas © Todos os direitos reservados</h1>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 34px;
  background-color: #eeeeee;
  position: fixed;
  bottom: 0;
  left: 0;

  h1 {
    font-weight: 400;
    font-size: 12px;
    color: #000;
  }
`;
