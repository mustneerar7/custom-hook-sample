import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "./Styles";


// Imports for custom hooks.
import usePostApiHook from "./Hooks/usePostApiHook";
import useGetApiHook from "./Hooks/useGetApiHook";


// URLs for making requests.
var urlPost = "http://talk2you-live.lingmo-api.com/api/user"
const urlGet = 'https://reactnative.dev/movies.json'


export default function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Using custom hooks.
  const { data, getData } = useGetApiHook();
  const { message, postData } = usePostApiHook();

  useEffect(() => {
      getData(urlGet);
  });


  // Called when button is pressed.
  function onButtonPress() {

    var params = {

      password: password,
      languageId: "en-US",
      couponCode: "",
      username: username,
      deviceToken: "",
      fullName: username,
      email: email,
      notificationApp: "lingmoimtab",
      phone: "00000000000",

    }

    postData(urlPost, params);
    alert(message);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Get Data Section</Text>
      <FlatList
        data={data}
        scrollEnabled={false}
        renderItem={({ item }) => <Text style={styles.text2}>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
      <View style={{ marginTop: 60 }}>
        <Text style={styles.text}>Post Data Section</Text>
        <TextInput
          style={styles.fields}
          placeholder="username"
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <TextInput
          style={styles.fields}
          placeholder="email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.fields}
          placeholder="password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Button onPress={onButtonPress} title="Sign up" />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}