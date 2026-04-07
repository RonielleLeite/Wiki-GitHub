import React from "react";
import {
  RepoContainer,
  RepoTitle,
  RepoOwner,
  RepoAvatar,
  RepoActions,
  ActionButton,
  RepoLink
} from "./styles";

function ItemRepo({ repo, onRemove }) {
  return (
    <RepoContainer>
      <RepoTitle>{repo.name}</RepoTitle>
      <RepoOwner>Dono: {repo.owner.login}</RepoOwner>
      <RepoAvatar src={repo.owner.avatar_url} alt={repo.owner.login} />
      <RepoActions>
        <ActionButton onClick={onRemove}>Remover</ActionButton>
        <RepoLink href={repo.html_url} target="_blank" rel="noreferrer">
          Ver Repositório
        </RepoLink>
      </RepoActions>
    </RepoContainer>
  );
}

export default ItemRepo;