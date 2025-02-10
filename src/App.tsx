import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ApiProvider } from "./context/ApiProvider";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApiProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApiProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
