import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout/index";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/issue/:idIssue/details" element={<Details />} /> */}
      </Route>
    </Routes>
  );
}
