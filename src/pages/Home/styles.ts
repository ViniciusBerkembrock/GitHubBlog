import styled, { keyframes } from "styled-components";
import { mixins } from "../../styles/mixins";

export const PostContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  gap: 25px;

  padding: 2rem;
  background-color: ${(props) => props.theme.colors["base-post"]};

  border-radius: 14px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors["base-label"]};
    transition: 0.5s;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;

    strong {
      ${mixins.fonts.titleS};
      line-height: 30px;
    }

    span {
      ${mixins.fonts.textS};
      white-space: nowrap;
      line-height: 30px;
    }
  }

  p {
    ${mixins.fonts.textM};
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: transparent;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #3498db;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
