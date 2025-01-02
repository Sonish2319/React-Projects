import React from "react";
// import Display from "./components/Form/Display";
// import Registration from "./components/Form/Registration";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      {/* <Registration />
      <br />
      <br />

      <br />
      <br />
      <br />
      <Display /> */}
    </div>
  );
};

export default App;
