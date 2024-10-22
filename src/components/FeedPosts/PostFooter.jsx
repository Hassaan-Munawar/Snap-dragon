import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
	const { isCommenting, handlePostComment } = usePostComment();
	const [comment, setComment] = useState("");
	const authUser = useAuthStore((state) => state.user);
	const commentRef = useRef(null);
	const { handleLikePost, isLiked, likes } = useLikePost(post);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleSubmitComment = async () => {
		await handlePostComment(post.id, comment);
		setComment("");
	};

	return (
		<Box mb={10} marginTop={"auto"}>
			<Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
				<Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
					{!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Box>

				<Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
					<CommentLogo />
				</Box>
			</Flex>
			<Text fontWeight={600} fontSize={"md"}>
				{likes} likes
			</Text>

			{isProfilePage && (
				<Text fontSize='16' color={"gray"}>
					Posted {timeAgo(post.createdAt)}
				</Text>
			)}

			{!isProfilePage && (
				<>
						 
						<Text as='span' fontSize={'md'} fontWeight={400}>
							{post.caption}
						</Text>
					{post.comments.length > 0 && (
						<Text fontSize='md' color={"gray"} cursor={"pointer"} onClick={onOpen}>
							View all {post.comments.length} comments
						</Text>
					)}
					{/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
					{isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null}
				</>
			)}

			{authUser && (
				<Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
					<InputGroup>
						<Input
						_placeholder={{color:'black'}}
							variant={"flushed"}
							placeholder={"Add a comment..."}
							fontSize={16}
							onChange={(e) => setComment(e.target.value)}
							value={comment}
							ref={commentRef}
							borderColor={'black'}
						/>
						<InputRightElement>
							<Button
								fontSize={16}
								color={"blue.500"}
								fontWeight={600}
								cursor={"pointer"}
								_hover={{ color: "black" }}
								bg={"transparent"}
								onClick={handleSubmitComment}
								isLoading={isCommenting}
							>
								Post
							</Button>
						</InputRightElement>
					</InputGroup>
				</Flex>
			)}
		</Box>
	);
};

export default PostFooter;
