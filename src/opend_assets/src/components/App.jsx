import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Minter from "./Minter";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Minter /> */}
      {/* <Item id={NFTID}/> */}
      <Footer />
    </div>
  );
}

export default App;
