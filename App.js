import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";

import usePostApiHook from "./Hooks/PostApiHook";
import useGetApiHook from "./Hooks/useGetApiHook";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { data, getData } = useGetApiHook();
  const { message, postData } = usePostApiHook(username, password, email);

  useEffect(() => {
    getData();
  });

  function onButtonPress() {
    postData();
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
        <Button onPress={onButtonPress} title="Press me to send data" />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:16,
    backgroundColor: "#fff",
    marginTop: 60,
  },
  text: {
    fontSize: 24,
  },
  text2:{
    fontSize:18,
    margin:4
  },
  fields: {
    margin: 8,
    backgroundColor: "lightgrey",
    height: 50,
    padding: 4,
  },
});
