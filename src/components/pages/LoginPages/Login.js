import React from "react";
import { Box, Center, HStack, Text, VStack, Input, InputGroup, InputRightElement, Checkbox, Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLoginContext } from "./LoginContext";

const InputForm = () => {
  const passIcon = [<IoEye />, <IoEyeOff />];
  const [togglePassShow, setTogglePass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheck, setCheck] = useState(true);

  return (
    // <form w={"100%"}>
    <VStack h={"100%"} maxH={"300px"} w={"100%"} justifyContent={"space-around"}>
      <Box w={"100%"}>
        <Text mx={"4"} fontWeight={"bold"} fontSize={"sm"}>
          Email or Phone
        </Text>
        <Input fontSize={"sm"} borderRadius={"full"} placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Box>
      <Box w={"100%"}>
        <Text mx={"4"} fontWeight={"bold"} fontSize={"sm"}>
          Password
        </Text>
        <InputGroup>
          <InputRightElement>{password && <IconButton variant={""} fontSize={"xl"} color={"gray.600"} onClick={() => setTogglePass(!togglePassShow)} icon={togglePassShow ? passIcon[0] : passIcon[1]} />}</InputRightElement>
          <Input type={togglePassShow ? "password" : "text"} placeholder="Enter Password" fontSize={"sm"} borderRadius={"full"} value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputGroup>
      </Box>
      <HStack w={"100%"} fontSize={{ xl: "sm", base: "xs" }} justifyContent={"space-between"} px={"2"}>
        <HStack fontWeight={"bold"}>
          <Checkbox iconColor={"primary"} colorScheme={"white"} borderColor={"primary"} isChecked={isCheck} id={"checkbox1"} onChange={() => setCheck(!isCheck)} />
          <label htmlFor={"checkbox1"} style={{ cursor: "pointer", padding: "0px 4px" }}>
            Remember me?
          </label>
        </HStack>
        <Link to={"/"}>
          <Text fontWeight={"bold"} color={"primary"} _hover={{ textDecoration: "underline" }}>
            Forget Password?
          </Text>
        </Link>
      </HStack>
      <Box w={"100%"} py={"4"}>
        <Input w={"100%"} size={"lg"} type={"submit"} value={"Login"} bg={"primary"} color={"white"} cursor={"pointer"} borderRadius={"full"} />
      </Box>
    </VStack>
    // </form>
  );
};

function Login() {
  const { toggle, setToggle } = useLoginContext();

  return (
    <>
      <Center h={"20%"} w={"100%"} flexDirection={"Column"} alignItems={"start"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Login
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          Some Unusefull test is here test is here
        </Text>
      </Center>
      <HStack h={"10%"} w={"100%"} gap={"2"}>
        <Button w={"100%"} leftIcon={<FaGoogle />} variant={"outline"} borderRadius={"full"} colorScheme={"red"}>
          <Text px={"2"}>Google</Text>
        </Button>
        <Text mx={"4"}>or</Text>
        <Button w={"100%"} leftIcon={<FaFacebook />} variant={"outline"} borderRadius={"full"} colorScheme={"facebook"}>
          <Text px={"2"}>Facebook</Text>
        </Button>
      </HStack>
      <Center h={"8%"}>
        <Text fontSize={"sm"} color={"gray"}>
          -------Please Sign in to your account--------
        </Text>
      </Center>
      <Center w={"100%"} h={"52%"}>
        <InputForm />
      </Center>
      <HStack h={"10%"} fontSize={"sm"} w={"100%"} fontWeight={"bold"}>
        <Text>Not register yet?</Text>
        <Link to="/">
          <Text px={"2"} _hover={{ textDecoration: "underline" }} color={"primary"} onClick={() => setToggle(!toggle)}>
            Create An Account
          </Text>
        </Link>
      </HStack>
    </>
  );
}

export default Login;
