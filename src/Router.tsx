import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout/index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/issue/:idIssue/details" element={<Details />} /> */}
      </Route>
    </Routes>
  );
}
