import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
	const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
			<Flex display={['block','flex']} alignItems={"center"} gap={2}>
				{creatorProfile ? (
					<Link to={`/${creatorProfile.username}`}>
						<Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size={["sm","md"]} />
					</Link>
				) : (
					<SkeletonCircle size='10' />
				)}

				<Flex  display={['block','flex']} alignItems={"center"} fontSize={16} fontWeight={500} gap='2'>
					{creatorProfile ? (
						<Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
					) : (
						<Skeleton w={"100px"} h={"10px"} />
					)}

					<Box fontSize={12} color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
				</Flex>
			</Flex>
			<Box cursor={"pointer"}>
				<Button
					size={"xs"}
					bg={"transparent"}
					fontSize={14}
					color={"blue.500"}
					fontWeight={500}
					_hover={{
						color: "black",
					}}
					transition={"0.2s ease-in-out"}
					onClick={handleFollowUser}
					isLoading={isUpdating}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</Button>
			</Box>
		</Flex>
	);
};

export default PostHeader;
