import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetFollowers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [followers, setFollowers] = useState([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getFollowers = async () => {
      setIsLoading(true);
      try {
        if (!authUser || !authUser.following || authUser.following.length === 0) {
          setFollowers([]);
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

        setFollowers(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) getFollowers();
  }, [authUser, showToast]);

  return { isLoading, followers };
};

export default useGetFollowers;

