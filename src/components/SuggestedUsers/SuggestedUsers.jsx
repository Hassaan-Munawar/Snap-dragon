import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
	const { isLoading, suggestedUsers } = useGetSuggestedUsers();

	// optional: render loading skeleton
	if (isLoading) return null;

	return (
		<VStack height={'100vh'} position={"sticky"} top={0} py={8} px={6} gap={4}>
			<SuggestedHeader />

			{suggestedUsers.length !== 0 && (
				<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
					<Text fontSize={12} fontWeight={500} color={"gray.500"}>
						Suggested for you
					</Text>
					<Text fontSize={12} fontWeight={500} _hover={{ color: "gray.400" }} cursor={"pointer"}>
						See All
					</Text>
				</Flex>
			)}

         <VStack h={'100%'} overflowY={'scroll'} gap={4}>
		 {suggestedUsers.map((user) => (
					<SuggestedUser user={user} key={user.id} />
				))}

		 </VStack>
				
			

		</VStack>
	);
};

export default SuggestedUsers;
