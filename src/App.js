import React from "react";
import Footer from "./components/Footer";
import FormArea from "./components/FormArea";
import Header from "./components/Header";
import Note from "./components/Note";

const App = () => {
  return (
    <div>
      <Header />
      <FormArea />
      <Note />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
};

export default App;
