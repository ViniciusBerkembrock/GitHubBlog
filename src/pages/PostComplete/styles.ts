import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PostCompleteContainer = styled.div`
  margin: auto;
`;

export const PostInfo = styled.div`
  margin: auto;
  margin-top: calc(208px - 296px);
  background-color: ${(props) => props.theme.colors["base-profile"]};
  border-radius: 14px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 54rem;
  height: 13.25rem;

  P {
    ${mixins.fonts.titleL};
    width: 100%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      line-height: 0;

      color: ${(props) => props.theme.colors["base-label"]};
    }
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme.colors["standard-blue"]};

  a {
    display: flex;
    align-items: center;
    gap: 10px;

    line-height: 0;
  }
`;
