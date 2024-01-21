import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NietGevonden = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

export default NietGevonden;
