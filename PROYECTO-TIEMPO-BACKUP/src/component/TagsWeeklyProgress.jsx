import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Dimensions } from "react-native";
import { Svg, Circle } from "react-native-svg";

const { height } = Dimensions.get("window");

const TagsWeeklyProgress = ({navigation,tag}) => {
  const radius = 30;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (circumference * tag.progress) / 100;

  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate("Statistics")}>
      <View>
        <Text style={styles.title}>{tag.assigment}</Text>
        <Text style={styles.subtitle}>{tag.time}</Text>
      </View>

      <View style={styles.progressContainer}>
        <Svg height={70} width={70}>
          <Circle
            stroke="#E5E7EB"
            fill="none"
            cx={35}
            cy={35}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="#6366F1"
            fill="none"
            cx={35}
            cy={35}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
          />
        </Svg>
        <Text style={styles.progressText}>{tag.progress}%</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:height * 0.11,
    paddingHorizontal:20,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#002055",
  },
  subtitle: {
    color: "#848A94",
    marginTop: 2,
    fontSize: 14,
  },
  progressContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
});

export default TagsWeeklyProgress;
