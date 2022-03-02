import { useEffect } from "react";
import { serverIp } from "../constants";

function GetClientUrlComponent() {
  useEffect(() => {
    const getClientUrl = () => {
      fetch(`${serverIp}/clienturl`, {
        method: "GET",
        mode: 'no-cors'
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          console.log(response.status);
          throw new Error("FRONTEND: Failed to grab client url");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getClientUrl();
  }, []);

  return null;
}

export default GetClientUrlComponent;
