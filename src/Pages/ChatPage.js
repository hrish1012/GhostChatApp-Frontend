import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import './chatpage.css';

const Chatpage = () => {
  // const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const [fetchAgain,setFetchAgain]=useState(false);

  return (
    <div style={{ width: "100%" }} className="outer">
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        // bg="#e0ffff"
        bg="#22A39F"
        // green fluorescent
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
