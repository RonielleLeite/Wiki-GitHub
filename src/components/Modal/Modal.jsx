import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(13, 17, 23, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background: #161b22;
  color: #fff;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  padding: 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
  position: relative;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 1.4rem;
    color: #61dafb;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #61dafb;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6;

  h3 {
    margin-top: 12px;
    margin-bottom: 6px;
    color: #61dafb;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  ul {
    padding-left: 20px;
    margin: 8px 0;
  }

  a {
    color: #61dafb;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #fff;
    }
  }
`;

function Modal({ title, onClose, children }) {
  return (
    <Overlay>
      <ModalBox>
        <Header>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>✖</CloseButton>
        </Header>
        <Content>{children}</Content>
      </ModalBox>
    </Overlay>
  );
}

export default Modal;