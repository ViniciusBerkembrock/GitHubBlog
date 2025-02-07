import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue/:idIssue/details" element={<Details />} />
    </Routes>
  );
}
