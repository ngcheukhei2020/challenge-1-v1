import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert
} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import EmployeeList from "./EmployeeList";

class EmployeeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangers: 0,
      elastic: 1,
      dynamo: 2
    };
  }

  render() {
    return (
      <Tabs
        tabBarUnderlineStyle={{ backgroundColor: "red" }}
        renderTabBar={() => (
          <ScrollableTab
            style={{
              width: 300
            }}
            tabsContainerStyle={{ width: 300 }}
          />
        )}
      >
        <Tab
          activeTextStyle={{ color: "#fff", fontWeight: "bold" }}
          textStyle={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}
          tabStyle={{ backgroundColor: "#000" }}
          activeTabStyle={{ backgroundColor: "#000000" }}
          heading="Rangers"
        >
          <EmployeeList TeamIndex={this.state.rangers.valueOf()} />
        </Tab>
        <Tab
          activeTextStyle={{ color: "#fff", fontWeight: "bold" }}
          textStyle={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}
          tabStyle={{ backgroundColor: "#000" }}
          activeTabStyle={{ backgroundColor: "#000000" }}
          heading="Elastic"
          index={index => this.tabChanged(this.index)}
        >
          <EmployeeList TeamIndex={this.state.elastic.valueOf()} />
        </Tab>
        <Tab
          activeTextStyle={{ color: "#fff", fontWeight: "bold" }}
          textStyle={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}
          tabStyle={{ backgroundColor: "#000" }}
          activeTabStyle={{ backgroundColor: "#000" }}
          heading="Dynamo"
        >
          <EmployeeList TeamIndex={this.state.dynamo.valueOf()} />
        </Tab>
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({});

export default EmployeeTab;
