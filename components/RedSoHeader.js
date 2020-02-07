import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RedSoHeader = props => {
  return (
    <View>
      <View style={styles.HeaderTitle}>
        <Text style={styles.HeaderRed}>Red</Text>
        <Text style={styles.HeaderWhite}>So</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row", //inside the view, items are align in row
    justifyContent: "center", //inside the view, items are align in center
    //alignItems: "center", // align children of a container in the center of containers's axis // https://facebook.github.io/react-native/docs/flexbox
    backgroundColor: "#000000"
  },
  HeaderRed: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red"
  },
  HeaderWhite: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff"
  }
});

export default RedSoHeader;
