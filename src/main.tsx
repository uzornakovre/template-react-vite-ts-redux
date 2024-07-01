import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./services/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import HelloWorld from "./components/hello-world/hello-world";
import { ROUTE_ALL, ROUTE_HOME } from "./utils/constants";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <Home />,
    children: [
      {
        index: true,
        element: <HelloWorld />,
      },
    ],
  },
  {
    element: <NotFound />,
    path: ROUTE_ALL,
  },
]);

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<p>Загрузка...</p>} />
    </Provider>
  </ThemeProvider>
);
