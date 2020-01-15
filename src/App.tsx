import * as React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/styles/layout.scss";

import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import { AppRoutes } from "./AppRoutes";

const history = createBrowserHistory();

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <BrowserRouter>
          <Router history={history}>
            <Header />

            <div className="container-fluid">
              <Sidebar />
              <AppRoutes />
            </div>
          </Router>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
