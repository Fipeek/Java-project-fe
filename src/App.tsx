import { Route, Routes } from "react-router-dom";
import { routes } from "./config/paths";

import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./config/styles";
import Navigation from "./Components/Containers/Navbar/Navigation";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation routes={routes} />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} Component={route.component} />
          ))}
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
