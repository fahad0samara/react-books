import {useContext} from "react";
import {themeContext} from "./Context";
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
      <Navbar />
      <Section />
    </div>
  );
}

export default App;
