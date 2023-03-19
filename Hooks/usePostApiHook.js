import { useState } from "react";
import axios from "axios";

const usePostApiHook = () => {

  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");

  const postData = async (url, params) => {
    axios
      .post(url, params)
      .then(function (response) {

        setData(response.data);
        setMessage(response.data.message);

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { 
    message, postData, 
  };
};

export default usePostApiHook;
