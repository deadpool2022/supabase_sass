import { supabase } from "../utils/supabase";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      router.push("/");
    };
    logout();
  }, []);
  return (
    <div>
      <h1>Logout</h1>
      <p>You have been logged out</p>
    </div>
  );
};

export default Logout;
