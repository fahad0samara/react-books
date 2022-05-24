import {useContext} from "react";
import {themeContext} from "./Context";
import Heroes from "./Data/Heroes";
import Bookshelves from "./Data/Bookshelves";
import Childrens from "./Data/DAta1/Childrens";
import Amazon from "./Data/Amazon";
import Navbar from "./Navbar";
import Section from "./page/Section";
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
      <Heroes />
      <Bookshelves/>
      <Childrens/>
      <Amazon/>
    </div>
  );
}

export default App;
