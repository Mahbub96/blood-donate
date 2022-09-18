import { Box, Center, HStack, VStack, Image } from "@chakra-ui/react";
import Login from "./Login";
import { useLoginContext } from "./LoginContext";
import Register from "./Register";

function LoginPage() {
  const { toggle } = useLoginContext();

  return (
    <Center h={"100vh"} className={"login"}>
      <Box w={{ xl: "60%", md: "80%", base: "90%" }} h={{ xl: "80%", base: "90%" }} boxShadow={"md"} borderRadius={"lg"} overflow={"hidden"} className={"loginBg"}>
        <HStack h={"100%"}>
          <VStack w={{ md: toggle ? "50%" : "0%", base: "0%" }} h={"100%"} transition={"0.3s"}></VStack>
          <VStack w={{ md: "50%", base: "100%" }} minW={{ md: "400px", base: "auto" }} h={"100%"} justifyContent={"center"} bg={"blue.50"}>
            <HStack pb={"4"}>
              <Image maxW={"12"} src="./assets/images/logo.png" />
            </HStack>
            <VStack w={{ xl: "70%", base: "80%" }} gap={"6"}>
              {toggle ? <Login /> : <Register />}
            </VStack>
          </VStack>
        </HStack>
      </Box>
    </Center>
  );
}

export default LoginPage;
