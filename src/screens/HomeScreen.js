import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{ ...styles.txtLg, ...styles.txtCenter, color: "#AAAAAA" }}
        >
          今日の学習
        </Text>
        <Text style={{ ...styles.txtSm, ...styles.txtRight }}>
          *目標を設定して学習する
        </Text>
      </View>
      <View style={styles.graphArea}></View>
      <View style={styles.hintArea}>
        <Text>ヒント</Text>
        <View style={styles.hintRow}>
          <View style={styles.hintBox}>
            <Text>連続正解すると名言ボイスが聞けるよ</Text>
          </View>
          <Ionicons name="reload" size={24} color="black" />
        </View>
      </View>
      <View>
        <Text style={{ ...styles.txtLg, ...styles.txtCenter }}>学習する</Text>
        <View>
          <Text
            style={{
              ...styles.txtNormal,
              ...styles.txtRight,
              color: "#AAAAAA",
            }}
          >
            管理
          </Text>
          <View style={styles.lessonList}>
            <View style={styles.lessonCard}>
              <Text style={{ ...styles.txtCenter, ...styles.txtNormal }}>
                英検3級
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 20,
                  fontSize: 16,
                }}
              >
                50
              </Text>
            </View>
            <View style={styles.lessonCard}>
              <Text style={{ ...styles.txtCenter, ...styles.txtNormal }}>
                TOEUC L&R
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 20,
                  fontSize: 16,
                }}
              >
                100
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    position: "relative",
    height: 50,
  },
  txtLg: {
    fontSize: 20,
  },
  txtSm: {
    fontSize: 10,
  },
  txtNormal: {
    fontSize: 16,
  },
  headerTxtLg: {
    position: "absolute",
    right: 10,
    bottom: 5,
  },
  graphArea: {
    height: 200,
  },
  hintArea: {
    marginTop: 20,
    marginBottom: 30,
  },
  hintBox: {
    marginTop: 10,
    marginRight: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    borderRadius: 20,
  },
  hintRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  txtCenter: {
    textAlign: "center",
  },
  txtRight: {
    textAlign: "right",
  },
  lessonList: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
  },
  lessonCard: {
    position: "relative",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 5,
    //   height: 10,
    // },
    // shadowOpacity: 0.3,
  },
});

export default HomeScreen;
