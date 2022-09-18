import React from "react";
import { Box, Center, HStack, Text, VStack, Input, InputGroup, InputRightElement, Checkbox, Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoLogoGoogle, IoEye, IoEyeOff } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
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
    <VStack w={"100%"} gap={"2"}>
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
      <Box w={"100%"}>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          Login
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          Some Unusefull test is here test is here
        </Text>
      </Box>
      <VStack w={"100%"}>
        <Button w={"100%"} leftIcon={<IoLogoGoogle />} variant={"outline"} borderRadius={"full"} colorScheme={"red"}>
          Sign In With Google
        </Button>
        <Text mx={"4"}>or</Text>
        <Button w={"100%"} leftIcon={<FaFacebookF />} variant={"outline"} borderRadius={"full"} colorScheme={"facebook"}>
          Sign In With Facebook
        </Button>
      </VStack>
      <Center>
        <Text fontSize={"sm"} color={"gray"}>
          -------Please Sign in to your account--------
        </Text>
      </Center>
      <Center w={"100%"}>
        <InputForm />
      </Center>
      <HStack fontSize={"sm"} w={"100%"} fontWeight={"bold"}>
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
