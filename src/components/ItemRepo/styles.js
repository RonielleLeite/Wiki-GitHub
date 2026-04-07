import styled from "styled-components";

export const RepoContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RepoTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #61dafb;
`;

export const RepoOwner = styled.p`
  font-size: 14px;
  margin: 0;
  color: #ccc;
`;

export const RepoAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const RepoActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const ActionButton = styled.button`
  background-color: #ff4d4d;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e60000;
  }
`;

export const RepoLink = styled.a`
  text-decoration: none;
  color: #61dafb;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;