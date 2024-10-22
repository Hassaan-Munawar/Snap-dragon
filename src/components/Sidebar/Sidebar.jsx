import { Box, Button, Flex, Image, Link, Text, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../public/favicon.ico.png";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
	const { handleLogout, isLoggingOut } = useLogout();
	return (
		<Box
			height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"blackAlpha.300"}
			py={6}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={"column"} gap={10} w='full' height={"full"}>
				<Link  _hover={{textDecoration:'none'}} to={"/"} as={RouterLink} p={3} borderRadius={10} display={{ base: "none", md: "block" }} cursor='pointer'>
				<Flex gap={2} alignItems={"center"}>
				<Image w={12} src={logo} />
					<Text fontStyle={"italic"} color={"#DF1734"} fontWeight={700} cursor={"pointer"} fontSize={25}>S-D</Text>
				</Flex>
				</Link>
				<Link
					to={"/"}
					as={RouterLink}
					p={2}
					display={{ base: "block", md: "none" }}
					borderRadius={6}
					_hover={{
						bg: "whiteAlpha.700",
					}}
					w={10}
					cursor='pointer'
				>
					<Image textAlign={"center"} w={8} src={logo} />
				</Link>
				<Flex direction={"column"} gap={5} cursor={"pointer"}>
					<SidebarItems />
				</Flex>

				{/* LOGOUT */}
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Flex
						onClick={handleLogout}
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.700" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: "full" }}
						mt={"auto"}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<BiLogOut size={25} />
						<Button
							display={{ base: "none", md: "block" }}
							variant={"ghost"}
							_hover={{ bg: "transparent" }}
							isLoading={isLoggingOut}
							color={"black"}
						>
							Logout
						</Button>
					</Flex>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;
