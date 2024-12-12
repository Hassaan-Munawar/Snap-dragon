import { Box, Flex, Text, Tooltip, VStack } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";
import {

	Button,
	CloseButton,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import useGetFollowers from "../../hooks/useGetFollowers";
import useGetFollowing from "../../hooks/useGetFollowing";


const Connections = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [value, setValue] = useState('followers')
	const { isLoading, suggestedUsers } = useGetSuggestedUsers();
	const {  followers } = useGetFollowers();
	const {following} = useGetFollowing()

	return (
		<>
			<Tooltip
				hasArrow
				label={"Connections"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.700" }}
					borderRadius={6}
					p={2}
					onClick={onOpen}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
				>
					<NotificationsLogo />
					<Box display={{ base: "none", md: "block" }}>Connections</Box>
				</Flex>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose} size='xl'>
				<ModalOverlay />

				<ModalContent bg={"white"} border={"1px solid gray"}>
					<ModalHeader>Connections</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>

						<Flex
							w={"full"}
							justifyContent={"center"}
							gap={{ base: 4, sm: 10 }}
							textTransform={"uppercase"}
							fontWeight={"bold"}
						>
							<Flex onClick={() => setValue('following')} borderTop={`${value == 'following' ? '1px solid black' : 'none'}`} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
								<Box fontSize={20}>
									<BsBookmark />
								</Box>
								<Text fontWeight={500} fontSize={12} display={"block" }>
									Followers
								</Text>
							</Flex>

							<Flex onClick={() => setValue('followers')} borderTop={`${value == 'followers' ? '1px solid black' : 'none'}`} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
								<Box fontSize={20}>
									<BsGrid3X3 />
								</Box>
								<Text fontWeight={500} fontSize={12} display={"block" }>
									Following
								</Text>
							</Flex>

							<Flex onClick={() => setValue('suggested')} borderTop={`${value == 'suggested' ? '1px solid black' : 'none'}`} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
								<Box fontSize={20}>
									<BsSuitHeart fontWeight={"bold"} />
								</Box>
								<Text fontWeight={500} fontSize={12} display={"block" }>
									Suggested
								</Text>
							</Flex>
						</Flex>
						
						{
							value == 'suggested' ? <VStack marginTop={6} gap={6}>{ suggestedUsers.map((user) => (
									<SuggestedUser user={user} key={user.id} />
									
								))}</VStack> : null
							}
							
							
						{
							value == 'followers' ? <VStack marginTop={6} gap={6}>{followers.map((user) => (
									<SuggestedUser user={user} key={user.id} />
									
								))}</VStack> : null
							}
							
							
						{
							value == 'following' ? <VStack marginTop={6} gap={6}>{following.map((user) => (
									<SuggestedUser user={user} key={user.id} />
									
								))}</VStack> : null
							}
							

					</ModalBody>
				</ModalContent>
			</Modal>
		</>

	);
};

export default Connections;
