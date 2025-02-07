import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../component/header";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
