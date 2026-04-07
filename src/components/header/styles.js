import styled from "styled-components";

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #61dafb; /* azul claro igual ao botão Buscar */
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a,
  button {
    background: transparent;
    border: none;
    color: #61dafb;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition:
      color 0.3s,
      background 0.3s;

    &:hover {
      color: #61dafb;
      background: rgba(97, 218, 251, 0.1);
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    span {
      height: 2px;
      width: 25px;
      background: #61dafb;
      margin: 4px 0;
    }
  }
`;

export const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  background: #161b22;
  padding: 16px;
  text-align: center;
  width: 100%;
  position: relative; /* 🔥 entra no fluxo normal */
  z-index: 9;

  button {
    background: transparent;
    border: none;
    color: #61dafb;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    padding: 8px 0;
    transition: color 0.2s ease;

    &:hover {
      color: #61dafb;
      background: rgba(97, 218, 251, 0.1);
      border-radius: 4px;
    }
  }
`;
