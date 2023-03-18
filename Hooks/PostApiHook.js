import { useState } from "react";
import axios from "axios";

const usePostApiHook = (username, password, email) => {

  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");

  const postData = async () => {
    axios
      .post("http://talk2you-live.lingmo-api.com/api/user", {

        password: password,
        languageId: "en-US",
        couponCode: "",
        username: username,
        deviceToken: "",
        fullName: "random",
        email: email,
        notificationApp: "lingmoimtab",
        phone: "00000000000",

      })
      .then(function (response) {

        setData(response.data);
        setMessage(response.data.message);

        console.log(response.data);

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
