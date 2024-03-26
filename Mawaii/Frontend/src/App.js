import { Route } from "react-router-dom";
import Home from "./pages/home";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";
import Chats from "./pages/chats";
import signup from "./components/Authentication/signup";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact/>
      {/* <Route paht="/signup" component = {signup} exact/> */}
      <Route path="/chats" component={Chats} exact />
    </div>
  );
}

export default App;
