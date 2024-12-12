import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetFollowing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [following, setFollowing] = useState([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getFollowing = async () => {
      setIsLoading(true);
      try {
        if (!authUser || !authUser.following || authUser.following.length === 0) {
          setFollowing([]);
          return;
        }

        const usersRef = collection(firestore, "users");
        const q = query(
          usersRef,
          where("uid", "in", authUser.following)
        );

        const querySnapshot = await getDocs(q);
        
        const users = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFollowing(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) getFollowing();
  }, [authUser, showToast]);

  return { isLoading, following };
};

export default useGetFollowing;

