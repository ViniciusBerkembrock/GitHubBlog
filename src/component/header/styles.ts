import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: calc(296px - 208px);
  height: 296px;

  background-image: linear-gradient(
    rgba(21, 98, 175, 0.14) 0%,
    rgba(21, 98, 175, 0.34) 50%,
    rgba(22, 76, 129) 100%
  );

  img {
    width: 148px;
    height: 98px;
  }

  img:first-child,
  img:last-child {
    margin-bottom: calc(208px - 296px);
    height: 90%;
    width: 350px;
  }
`;
