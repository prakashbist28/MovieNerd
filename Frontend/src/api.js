import { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/api-key")
      .then((response) => {
        setApiKey(response.data.apiKey);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return apiKey; 

};

export default Api;