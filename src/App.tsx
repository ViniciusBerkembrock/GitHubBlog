import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ApiProvider } from "./context/ApiProvider";
import { IssueProvider } from "./context/IssueContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApiProvider>
        <IssueProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </IssueProvider>
      </ApiProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
