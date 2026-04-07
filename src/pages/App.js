import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// importa o Header da pasta components/header
import Header from "../components/header/Header";

// importa estilos globais e outros componentes
import {
  Container,
  SearchArea,
  InputContainer,
  StyledInput,
  RepoList,
  Footer,
  Main,
  Button,
} from "./styles";

import GitHubLogo from "../img/githubazul.svg";
import ItemRepo from "../components/ItemRepo";
import api from "../services/api";
import Modal from "../components/Modal/Modal"; // novo componente modal
import Sobre from "../components/Modal/Sobre";
import Contato from "../components/Modal/Contato";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  // estado para controlar modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSearchRepo = async () => {
    try {
      const response = await api.get(`repos/${currentRepo}`);
      const data = response.data;

      if (data.id) {
        const seExistir = repos.find((repo) => repo.id === data.id);
        if (!seExistir) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
          return;
        }
        alert("Repositório já adicionado!");
        return;
      }
      alert("Repositório não encontrado!");
    } catch (error) {
      alert("Erro ao buscar repositório!");
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  };

  // função para abrir modal
  const handleOpenModal = (type) => {
    setModalContent(type);
    setModalOpen(true);
  };

  // função para fechar modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  return (
    <BrowserRouter>
      <Container>
        <Header onOpenModal={handleOpenModal} />

        <Main>
          <SearchArea>
            <img src={GitHubLogo} width="72" height="72" alt="GitHub Logo" />

            <InputContainer>
              <StyledInput
                type="text"
                placeholder="Digite o nome do usuário do GitHub"
                value={currentRepo}
                onChange={(e) => setCurrentRepo(e.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <Button onClick={handleSearchRepo}>Buscar</Button>
            </InputContainer>
          </SearchArea>

          <RepoList>
            {repos.map((repo) => (
              <ItemRepo
                key={repo.id}
                repo={repo}
                onRemove={() => handleRemoveRepo(repo.id)}
              />
            ))}
          </RepoList>
        </Main>

        <Footer>
          <p>
            © 2026 Wiki GitHub — Desenvolvido por Ronielle |{" "}
            <a
              href="https://github.com/RonielleLeite"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/ronielle-leite/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </Footer>

        {/* Modal */}
        {modalOpen && (
          <Modal
            title={modalContent === "sobre" ? "Sobre o Projeto" : "Contato"}
            onClose={handleCloseModal}
          >
            {modalContent === "sobre" && <Sobre />}
            {modalContent === "contato" && <Contato />}
          </Modal>
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;
