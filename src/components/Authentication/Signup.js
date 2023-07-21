// import { useState } from "react";
// import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
// import { Button } from "@chakra-ui/button";
// import { useToast } from "@chakra-ui/react";
// import axios from "axios";
// import {useHistory} from "react-router";

// //https:/https://anxious-frock-fish.cyclic.app/api.cloudinary.com/v1_1/djf5shmiu/image/upload



// import { VStack } from "@chakra-ui/layout";

// const Signup = () => {
//   const [show, setShow] = useState(false);
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [confirmpassword, setConfirmpassword] = useState();
//   const [password, setPassword] = useState();
//   const [pic, setPic] = useState();
//   const [loading,setLoading]=useState(false);
//   const toast = useToast();
//   const history=useHistory();
//   const handleClick = () => setShow(!show);
// const postDetails =(pics) => {
//   setLoading(true);
//   if(pics===undefined){
//      toast({
//        title: "Account created.",
//        description: "We've created your account for you.",
//        status: "success",
//        duration: 5000,
//        isClosable: true,
//        position:"bottom",
//      });
//      return;
//   }
//   if (pics.type === "image/jpeg" || pics.type === "image/png") {
//     const data = new FormData();
//     data.append("file", pics);
//     data.append("upload_preset", "chat-app");
//     data.append("cloud_name", "djf5shmiu");
//     fetch("https:/https://anxious-frock-fish.cyclic.app/api.cloudinary.com/v1_1/djf5shmiu/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setPic(data.url.toString());
//         console.log(data.url.toString());
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   } else {
//     toast({
//       title: "Please Select an Image!",
//       status: "warning",
//       duration: 5000,
//       isClosable: true,
//       position: "bottom",
//     });
//     setLoading(false);
//     return;
//   }
// };

// const submitHandler=async ()=>{
//    setLoading(true);
//     if (!name || !email || !password || !confirmpassword) {
//       toast({
//         title: "Please Fill all the Fields",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setLoading(false);
//        return;
//     }
//      if (password !== confirmpassword) {
//        toast({
//          title: "Passwords Do Not Match",
//          status: "warning",
//          duration: 5000,
//          isClosable: true,
//          position: "bottom",
//        });
//        return;
//      }
//     //  console.log(name, email, password, pic);
//       try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const { data } = await axios.post( "https://anxious-frock-fish.cyclic.app/api/user", {
//           name,
//           email,
//           password,
//           pic,
//         },
//         config
//       );
//       // console.log(data);
//       toast({
//         title: "Registration Successful",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setLoading(false);
//       history.push("/chats");
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
        
//       });
//       setLoading(false);
// }
// };

//   return (
//     <VStack spacing="5px" color="black">
//       <FormControl id="first-name" isRequired>
//         <FormLabel>Name</FormLabel>
//         <Input
//           placeholder="enter your name"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </FormControl>

//       <FormControl id="email" isRequired>
//         <FormLabel>Email Address</FormLabel>
//         <Input
//           type="email"
//           placeholder="Enter Your Email Address"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </FormControl>
//       <FormControl id="password" isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup size="md">
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Enter Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>

      
//       <FormControl id="password" isRequired>
//         <FormLabel>Confirm Password</FormLabel>
//         <InputGroup size="md">
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Confirm password"
//             onChange={(e) => setConfirmpassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>

//       <FormControl id="pic">
//         <FormLabel>Upload your Picture</FormLabel>
//         <Input
//           type="file"
//           p={1.5}
//           accept="image/*"
//           onChange={(e) => postDetails(e.target.files[0])}
//         />
//       </FormControl>
//       <Button
//         colorScheme="blue"
//         width="100%"
//         style={{ marginTop: 15 }}
//         onClick={submitHandler}
//         isLoading={loading}
//         // isLoading={picLoading}
//       >
//         Sign Up
//       </Button>
//     </VStack>
//   );
// };

// export default Signup;





import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
/////////
import botImg from "../bot.jpeg";
import "./Signup.css";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

///////////////////////

      const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);



   function validateImg(e) {
     const file = e.target.files[0];
     if (file.size >= 1048576) {
       return alert("Max file size is 1mb");
     } else {
       setImage(file);
       setImagePreview(URL.createObjectURL(file));
     }
   }

   ///////////////////////////////

  const combine = (e)=>{
    validateImg(e) 
 postDetails(e.target.files[0])   
}

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://anxious-frock-fish.cyclic.app/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };
//////////////////////////////
  const postDetails = (pics) => {
     
    setPicLoading(true);
   
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
     
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dw4ttr4qj");

      fetch("https:/https://anxious-frock-fish.cyclic.app/api.cloudinary.com/v1_1/dw4ttr4qj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="pic">
        {/* <FormLabel>Upload your Picture</FormLabel> */}

        <div className="signup-profile-pic__container">
          <img src={imagePreview || botImg} className="signup-profile-pic" />
          <label htmlFor="image-upload" className="image-upload-label">
            <i className="fas fa-plus-circle add-picture-icon"></i>
          </label>
          <input
            type="file"
            id="image-upload"
            hidden
            accept="image/png, image/jpeg"

            onChange={combine}
            // onChange={(e) => postDetails(e.target.files[0])}

          />
          {/* <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        /> */}
        </div>
      </FormControl>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
