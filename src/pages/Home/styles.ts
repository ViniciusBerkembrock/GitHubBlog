import styled from "styled-components";
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
    -webkit-line-clamp: 5; /* Define o número máximo de linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
