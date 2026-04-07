import React from "react";

function Sobre() {
  return (
    <div style={{ textAlign: "left", lineHeight: "1.6" }}>
      <h3>📖 Sobre o Projeto</h3>
      <p>
        O <strong>Wiki GitHub</strong> foi criado para facilitar a busca e
        organização de repositórios. Ele utiliza <strong>React</strong>,{" "}
        <strong>Styled Components</strong> e a{" "}
        <strong>API oficial do GitHub</strong>, oferecendo uma interface
        moderna, responsiva e prática para desenvolvedores.
      </p>

      <h3>👨‍💻 Sobre o Desenvolvedor</h3>
      <p>
        Meu nome é <strong>Ronielle Leite</strong>, sou desenvolvedor apaixonado
        por tecnologia e inovação. Este projeto nasceu como forma de estudo e
        prática em React, mas também como uma ferramenta útil para quem trabalha
        diariamente com GitHub.
      </p>

      <h3>🚀 Futuro do Projeto</h3>
      <ul>
        <li>⭐ Favoritar repositórios</li>
        <li>📊 Estatísticas de uso</li>
        <li>🌗 Alternar entre modo claro/escuro</li>
        <li>🔐 Login e personalização</li>
      </ul>
    </div>
  );
}

export default Sobre;
