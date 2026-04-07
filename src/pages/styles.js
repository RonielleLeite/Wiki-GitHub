import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #0d1117;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 62px;
  padding: 0 20px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 20px;
  color: #ffffff;
  font-size: 18px;

  &:focus {
    outline: none;
    border: 2px solid #61dafb;
  }
`;

export const Button = styled.button`
  width: 80%;
  max-width: 600px;
  height: 62px;
  background: #61dafb;
  border: none;
  border-radius: 20px;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #21a1f1;
  }
`;

export const RepoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  width: 80%;
  max-width: 1200px;
`;

export const Header = styled.header`
  width: 100%;
  background: #161b22;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #61dafb; /* azul claro igual ao botão Buscar */
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;

  a, button {
    position: relative;
    background: transparent;
    border: none;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: #61dafb;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #61dafb;
    }

    &:hover::after {
      width: 100%;
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
      height: 3px;
      width: 25px;
      background: #fff;
      margin: 4px 0;
      transition: 0.3s;
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

  a, button {
    position: relative;
    background: transparent;
    border: none;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    padding: 6px 0;
    cursor: pointer;
    transition: color 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: #61dafb;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #61dafb;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background: #161b22;
  color: #fff;
  text-align: center;
  padding: 16px 0;
  font-size: 14px;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.4);

  a {
    position: relative;
    color: #61dafb;
    text-decoration: none;
    margin: 0 8px;
    font-weight: 500;
    transition: color 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0%;
      height: 2px;
      background: #61dafb;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #fff;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;