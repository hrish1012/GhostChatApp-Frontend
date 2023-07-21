
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;

//ChatApp
//CPqe14OK8fGz3YI2
