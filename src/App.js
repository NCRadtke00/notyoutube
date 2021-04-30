import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <div className="app_container">
        <Sidebar />
        <Container className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default App;
