import React from "react";

function Contato() {
  return (
    <div style={{ textAlign: "left", lineHeight: "1.6" }}>
      <h3>📬 Entre em Contato</h3>
      <p>Você pode falar comigo pelos seguintes canais:</p>
      <p>
        📧 <strong>Email:</strong> ronielle.leite@outlook.com <br />
        🔗 <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/RonielleLeite"
          target="_blank"
          rel="noreferrer"
        >
          RonielleLeite
        </a>{" "}
        <br />
        💼 <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/ronielle-leite/"
          target="_blank"
          rel="noreferrer"
        >
          Ronielle Leite
        </a>
      </p>
    </div>
  );
}

export default Contato;
