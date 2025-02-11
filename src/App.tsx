import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { IssueProvider } from "./context/IssueContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssueProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssueProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
