import React from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StatisticsCircleComponent from "../../component/StatisticsCircleComponent";
import HeaderComponent from "../../component/HeaderComponent";

export default function Statistics({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}> 

        <View style={{ width: "100%" }}>
            <HeaderComponent navigation={navigation} change={true} color={"#CC68E5"} />
        </View>

        <View style={[styles.titleContainer,{marginVertical: 20,}]}>
            <Text style={[styles.title,{fontSize: 30}]}>Mis estadísticas</Text>
        </View>
          <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
          >
            <StatisticsCircleComponent/>
             <StatisticsCircleComponent/>
              <StatisticsCircleComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f1f1ff",
    alignItems: "center",
  },
    titleContainer: {
    justifyContent:"flex-start",
    width:"100%",
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
  },
  scrollContent: {
    paddingBottom: 40,
    width:"90%"
  },
});