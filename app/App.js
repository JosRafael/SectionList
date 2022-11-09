import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const dataNomes = [
  {
    title: "P",
    data: ["Paulo", "Pedro", "Puskas"]
  },
  {
    title: "Q",
    data: ["Quelidônio"]
  },
  {
    title: "R",
    data: ["Raimundo Papa Leão", "Recemvindo Pereira", "Remédio Amargo"]
  },
  {
    title: "S",
    data: ["Saymon", "Samuel"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={dataNomes}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 25
  },
  item: {
    backgroundColor: "#ABDEE6",
    padding: 18,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;