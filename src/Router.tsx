import { Route, Routes } from "react-router-dom";
import { LayoutContainer } from "./layout/DefaultLayout/styles";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:idIssue/details" element={<Details />} />
      </Route>
    </Routes>
  );
}
