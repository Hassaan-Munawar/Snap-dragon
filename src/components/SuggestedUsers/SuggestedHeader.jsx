import { Avatar, Button, Flex, Text, Box } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
	const { handleLogout, isLoggingOut } = useLogout();
	const authUser = useAuthStore((state) => state.user);

	if (!authUser) return null;

	return (
		<Box
			flex={3}
			display={{ base: "none", lg: "block" }}
			minW={"250px"}
			backgroundColor={"#f5f5f5"}
			p={4}
			boxShadow={"0 4px 12px rgba(0, 0, 0, 0.1)"}
			borderRadius={"md"}
			textAlign={"center"}  
		>
			{/* Avatar at the top */}
			<Link to={`/${authUser.username}`}>
				<Avatar
					size={"lg"}
					src={authUser.profilePicURL}
					margin={"auto"}
					mb={3} 
					_hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
				/>
			</Link>

			<Link to={`/${authUser.username}`}>
				<Text fontSize={18} fontWeight={500} color={"#333"}>
					{authUser.username}
				</Text>
			</Link>

			<Button
				size={"xs"}
				background={"transparent"}
				_hover={{ background: "rgba(0, 156, 255, 0.1)", transition: "0.3s ease-in-out" }}
				fontSize={14}
				fontWeight={"medium"}
				color={"#DF1734"}
				onClick={handleLogout}
				isLoading={isLoggingOut}
				cursor={"pointer"}
				mt={4}  
			>
				Log out
			</Button>
		</Box>

	);
};

export default SuggestedHeader;
