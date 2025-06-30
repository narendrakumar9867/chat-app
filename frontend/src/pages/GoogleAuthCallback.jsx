import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const GoogleAuthCallback = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthStore();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      setToken(token); 
      localStorage.setItem("token", token);
      navigate("/"); 
    } else {
      navigate("/login");
    }
  }, [navigate, setToken]);

  return <div>Signing you in...</div>;
};

export default GoogleAuthCallback;
