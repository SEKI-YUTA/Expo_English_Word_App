import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>今日の学習</Text>
      <Text>*目標を設定して学習する</Text>
      <View></View>
      <View>
        <Text>ヒント</Text>
        <View>
          <Text>連続正解すると名言ボイスが聞けるよ</Text>
        </View>
      </View>
      <View>
        <Text>学習する</Text>
        <View>
          <Text>管理</Text>
          <View>
            <Text>英検3級</Text>
          </View>
          <View>
            <Text>TOEUC L&R</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default HomeScreen;
