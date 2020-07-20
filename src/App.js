import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Challenge from "./components/Challenge/Challenge";
import Submission from "./components/Submission/Submission";
import Discussion from "./components/Discussion/Discussion";

function App() {
  return (
    <Layout
      header={<Header />}
      main={
        <>
          <Challenge />
          <Submission />
          <Discussion />
        </>
      }
    ></Layout>
  );
}

export default App;
