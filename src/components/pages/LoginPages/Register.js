import React from "react";
import { Box, Center, HStack, Text, VStack, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useLoginContext } from "./LoginContext";

const InputForm = () => {
  const passIcon = [<IoEye />, <IoEyeOff />];
  const [togglePassShow, setTogglePass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    // <form w={"100%"}>
    <VStack w={"100%"} h={"100%"} maxH={"300px"} justifyContent={"space-around"}>
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
          <InputRightElement>{password && <IconButton variant={""} fontSize={"xl"} onClick={() => setTogglePass(!togglePassShow)} icon={togglePassShow ? passIcon[0] : passIcon[1]} />}</InputRightElement>
          <Input type={togglePassShow ? "password" : "text"} placeholder="Enter Password" fontSize={"sm"} borderRadius={"full"} value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputGroup>
      </Box>
      <Box w={"100%"} py={"4"}>
        <Input w={"100%"} size={"lg"} type={"submit"} value={"Register Now"} bg={"primary"} color={"white"} cursor={"pointer"} borderRadius={"full"} />
      </Box>
    </VStack>
    // </form>
  );
};

function Register() {
  const { toggle, setToggle } = useLoginContext();

  return (
    <>
      <Center h={"20%"} w={"100%"} flexDirection={"Column"} alignItems={"start"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Register Now
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          Some Unusefull test is here test is here
        </Text>
      </Center>
      <Center h={"10%"}>
        <Text fontSize={"sm"} color={"gray"}>
          -------Sign up to your account--------
        </Text>
      </Center>
      <Center h={"60%"} w={"100%"}>
        <InputForm />
      </Center>
      <HStack h={"10%"} fontSize={"sm"} w={"100%"} fontWeight={"bold"} justifyContent={"end"}>
        <Text _hover={{ textDecoration: "underline" }} color={"primary"} onClick={() => setToggle(!toggle)} cursor={"pointer"}>
          {"Go Back >"}
        </Text>
      </HStack>
    </>
  );
}

export default Register;
