import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calender from "./components/calender";
import First from "./components/firstpage";
import Thirdpage from "./components/thirdpage";
import Megaoffer from "./components/Megaoffer";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <div className="headerplusfullcontainer">
        <div className="header">
          <Header month="March" year="2020" setPage={setPage} />
        </div>
        {page == 1 ? <First /> : null}
        {page == 2 ? (
          <Calender setPage={setPage} selected="11" percent="25" />
        ) : null}
        {page == 3 ? <Thirdpage setPage={setPage} /> : null}
        {page == 4 ? <Megaoffer /> : null}

        {/*  */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
