import {useContext} from "react";
import {themeContext} from "./Context";
import Heroes from "./Data/Heroes";
import Bookshelves from "./Data/Bookshelves";
import Childrens from "./Data/DAta1/Childrens";
import Amazon from "./Data/Amazon";
import Navbar from "./Navbar";
import Section from "./page/Section";
import About from "./page/About";
import Footer from "./Footer";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div 
      className=""
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar  />
      <Section />
      <About/>
      <Amazon/>
      <Childrens/>
      <Heroes />
      <Bookshelves/>
     <Footer/>
     
     
    </div>
  );
}

export default App;
