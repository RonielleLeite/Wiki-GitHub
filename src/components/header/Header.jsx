import React, { useState } from "react";
import { Nav, HeaderInner, Hamburger, MobileMenu, Title } from "./styles";

function Header({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderInner>
        <Title>Wiki GitHub</Title>

        <Nav>
          <button onClick={() => (window.location.href = "/")}>Home</button>
          <button onClick={() => onOpenModal("sobre")}>Sobre</button>
          <button onClick={() => onOpenModal("contato")}>Contato</button>
        </Nav>

        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </HeaderInner>

      {/* MobileMenu fora do HeaderInner */}
      <MobileMenu open={menuOpen}>
        <button
          onClick={() => {
            window.location.href = "/";
            setMenuOpen(false);
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            onOpenModal("sobre");
            setMenuOpen(false);
          }}
        >
          Sobre
        </button>
        <button
          onClick={() => {
            onOpenModal("contato");
            setMenuOpen(false);
          }}
        >
          Contato
        </button>
      </MobileMenu>
    </>
  );
}

export default Header;
