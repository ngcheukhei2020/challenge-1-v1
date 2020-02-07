import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  Dimensions,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import EmployeeView from "../components/EmployeeView";
import Image from "react-native-scalable-image";
import { BallIndicator } from "react-native-indicators";

const teams = ["rangers", "elastic", "dynamo"];

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.page = 0;
    this.state = {
      currentEmployeeIndex: null,
      loading: false,
      isRefreshing: false,
      data: [],
      error: ""
    };

    //Binding
    //this.fetchTeam = this.fetchTeam.bind(this);
    this.fetchEmployee = this.fetchEmployee.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.showLoading = this.showLoading.bind(this);
    this.hideLoading = this.hideLoading.bind(this);
    //this.getNumber = this.getNumber.bind(this);
  }

  componentDidMount() {
    this.fetchEmployee(teams[this.props.TeamIndex], this.page);
  }

  fetchEmployee(team, page) {
    console.log("team:", team, "page:", page);
    const url = `https://us-central1-redso-challenge.cloudfunctions.net/catalog?team=${team}&page=${page}`;
    this.showLoading();

    axios
      .get(url)
      .then(response => {
        let listData = this.state.data;
        let Data = listData.concat(response.data.results);
        this.setState({ loading: false, data: Data });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: `Cannot fetch Employee list,"  ${team}  ' ' + ${page}`
        });
      });
  }

  onRefresh() {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    const currentTeam = teams[this.state.currentEmployeeIndex];
    const url = `https://us-central1-redso-challenge.cloudfunctions.net/catalog?team="${currentTeam}"&page=0`;
    axios
      .get(url)
      .then(response => {
        let data = response.data.results;
        this.setState({ isRefreshing: false, data: data }); // false isRefreshing flag for disable pull to refresh indicator, and clear all data and store only first page data
      })
      .catch(error => {
        this.setState({
          isRefreshing: false,
          error: `Cannot refresh Employee list,"  ${currentTeam}  ' ' + ${this.page}`
        }); // false isRefreshing flag for disable pull to refresh
      });
  }

  handleLoadMore = () => {
    if (!this.state.loading) {
      this.page = this.page + 1; // increase page by 1
      this.fetchEmployee(teams[this.props.TeamIndex], this.page); // method for API call
    }
  };

  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading(error) {
    this.setState({ loading: false, error: "ERROR" });
  }

  render() {
    if (this.state.isRefreshing && this.page === 0) {
      return (
        <View style={styles.indicatorContainer}>
          <BallIndicator color="white" />
        </View>
      );
    } else
      return (
        <View style={styles.root}>
          <FlatList
            onload
            data={this.state.data}
            extraData={this.state}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
              />
            }
            renderItem={({ item }) => {
              if (item.type === "employee")
                return <EmployeeView employee={item} />;
              else
                return (
                  <Image
                    width={Dimensions.get("window").width}
                    source={{ uri: item.url }}
                  />
                  //<Text>{this.props.TeamIndex}</Text>
                );
            }}
            keyExtractor={(employee, index) => index.toString()}
            onEndReachedThreshold={0.4}
            onEndReached={this.handleLoadMore}
          ></FlatList>
          {this.state.loading && (
            <View style={styles.indicatorContainer}>
              <BallIndicator color="white" />
            </View>
          )}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000"
  },
  list: {
    // flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  indicatorContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
    //alignItems: "center"
  }
});

export default EmployeeList;
