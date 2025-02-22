import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
	return (
		<Flex
			w={"full"}
			justifyContent={"center"}
			gap={{ base: 4, sm: 10 }}
			textTransform={"uppercase"}
			fontWeight={"bold"}
		>
			<Flex borderTop={"1px solid black"} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<BsGrid3X3 />
				</Box>
				<Text fontWeight={500} fontSize={12} display={{ base: "none", sm: "block" }}>
					Posts
				</Text>
			</Flex>
		</Flex>
	);
};

export default ProfileTabs;
