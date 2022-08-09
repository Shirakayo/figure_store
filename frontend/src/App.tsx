import React from "react";
import Header from "./components/Header/Header";
import AppRouting from "./routes";
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/UI/layout/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Aside from "./components/Home/Aside/Aside";
import ContentLayout from "./components/UI/layout/ContentLayout"
import SubAside from "./components/Home/SubAside/SubAside";



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header />
          <ContentLayout>
            <Aside />
            <AppRouting />
            <SubAside />
          </ContentLayout>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
