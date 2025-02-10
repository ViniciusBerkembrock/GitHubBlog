import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  margin-top: 72px;
  margin: 72px auto;
  gap: 16px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    span:first-child {
      ${mixins.fonts.titleS}
    }

    span:last-child {
      ${mixins.fonts.textS}
    }
  }
`;

export const SearchBarForm = styled.form`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  label {
    background-color: ${(props) => props.theme.colors["base-input"]};
    border: 1px solid ${(props) => props.theme.colors["base-border"]};
    border-radius: 6px;

    width: 100%;
    padding: 12px 16px;
    &[data-state="onFocus"] {
      border: 1px solid ${(props) => props.theme.colors["standard-blue"]};
    }
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors["base-title"]};

    &::placeholder {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme.colors["base-label"]}
    }
  }
`;
