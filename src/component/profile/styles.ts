import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileContainer = styled.div`
  margin: auto;
  margin-top: calc(208px - 296px);
  background-color: ${(props) => props.theme.colors["base-profile"]};
  border-radius: 14px;
  padding: 32px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  width: 54rem;
  height: 13.25rem;

  img {
    border-radius: 12px;
    width: 148px;
    height: 148px;
  }
`;

export const ProfileMain = styled.div`
  min-height: 148px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  strong {
    ${mixins.fonts.titleL}
  }

  a {
    display: flex;
    flex-direction: row;
    gap: 8px;

    color: ${(props) => props.theme.colors["standard-blue"]};
    font-weight: bold;

    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid ${(props) => props.theme.colors["standard-blue"]};

      transition: 0.6s;
    }
  }
`;

export const ProfileDescription = styled.div`
  ${mixins.fonts.textM}
  margin-top: 8px;
  line-height: 20px;
`;

export const ProfileUserInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    span {
    }
  }
`;
