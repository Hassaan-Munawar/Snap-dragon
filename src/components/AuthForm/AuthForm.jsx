import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";
import logo from "../../../public/favicon.ico.png"

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<Box
				boxShadow={"0 4px 12px rgba(0, 0, 0, 0.1)"}
				backgroundColor={"white"}
				borderRadius={6}
				padding={5}
				minW={['300px','350px','400px','400px']}
				w={"100%"}
				margin={"auto"}
			>
				<VStack spacing={3}>
					<Flex alignItems={"center"} gap={5}>
					<Image w={16} src={logo} />
					<Text fontWeight={700} fontSize={35} color={"#DF1734"}>Snap Dragon</Text>
					</Flex>
					{isLogin ? <Login /> : <Signup />}

					{/* Divider */}
					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.300"} />
						<Text mx={1} color={"gray.600"}>OR</Text>
						<Box flex={2} h={"1px"} bg={"gray.300"} />
					</Flex>

					<GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
				</VStack>
			</Box>

			{/* Second Box */}
			<Box
				boxShadow={"0 4px 12px rgba(0, 0, 0, 0.1)"}
				backgroundColor={"white"}
				borderRadius={6}
				padding={5}
				maxW={"400px"}
				w={"100%"}
				margin={"auto"}
				mt={5}
			>
				<Flex alignItems={"center"} justifyContent={"center"}>
					<Text mx={2} fontSize={16}>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
					</Text>
					<Text
						color={"blue.500"}
						cursor={"pointer"}
						onClick={() => setIsLogin(!isLogin)}
						fontWeight={600}
					>
						{isLogin ? "Sign up" : "Log in"}
					</Text>
				</Flex>
			</Box>

		</>
	);
};

export default AuthForm;
