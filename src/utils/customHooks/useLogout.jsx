import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  return () => {
    localStorage.clear();
    navigate("/logIn");
  };
}

export default useLogout;
