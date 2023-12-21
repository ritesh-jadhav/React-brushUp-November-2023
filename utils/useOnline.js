import { useEffect, useState } from "react";

const useOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(false); 
      console.log("Onnline",onlineStatus )
    });
  }, []);
  return onlineStatus;
};
export default useOnline;
