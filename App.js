import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RedSoHeader from "./components/RedSoHeader";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import EmployeeTab from "./components/EmployeeTab";

export default class App extends Component {
  render() {
    return (
      <Container style={styles.SafeAreaContainer}>
        <RedSoHeader />
        <EmployeeTab />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  SafeAreaContainer: {
    backgroundColor: "black",
    paddingTop: 30
  },
  TabContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row", //inside the view, items are align in row
    //justifyContent: "center", //inside the view, items are align in center
    //alignItems: "center", // align children of a container in the center of containers's axis // https://facebook.github.io/react-native/docs/flexbox
    backgroundColor: "#000000"
  },
  TabTitle: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "row"
  },
  TabTitleSelected: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "row"
  }
});
