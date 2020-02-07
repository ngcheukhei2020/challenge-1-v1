import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";

class EmployeeView extends React.Component {
  componentDidMount() {}

  render() {
    const { employee } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.avatar} source={{ uri: employee.avatar }} />
        <SafeAreaView style={styles.details}>
          <Text style={styles.text}>{employee.name}</Text>
          <Text style={styles.text}>{employee.position}</Text>
          {employee.expertise && employee.expertise.length > 0 && (
            <Text style={styles.text}>
              {employee.expertise.map((skill, index) => {
                return index < employee.expertise.length - 1
                  ? skill + ", "
                  : skill;
              })}
            </Text>
          )}
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
    width: "100%",
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#123"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "stretch",
    marginRight: 10,
    marginLeft: 10
  },
  details: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flexShrink: 1
  },
  text: {
    marginRight: 10,
    fontSize: 20,
    padding: 8,
    fontWeight: "bold",
    color: "#fff"
  },
  separator: {
    flexShrink: 0,
    height: 1
  }
});

export default EmployeeView;
