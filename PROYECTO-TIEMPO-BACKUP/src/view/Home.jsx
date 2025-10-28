import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  Dimensions
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import HeaderComponent from "../component/HeaderComponent";
import TagsAssigmentComonent from "../component/TagsAssigmentComponent";
import { emote, profile,weeklyAssigment } from "../helper/data";
import TagsWeeklyProgress from "../component/TagsWeeklyProgress";
import SightComponent from "../component/SightComponent";
import EmoteComponent from "../component/Emotecomponent";
import ChatBotComponent from "../component/ChatBotComponent";

const { height } = Dimensions.get("window");

const Home = ({ navigation }) => {
const [visible,setVisible] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const [currentEmote, setCurrentEmote] = useState(emote.happy);

  const handleEmotionChange = (emotion) => {
    switch (emotion) {
      case "HAPPY":
        setCurrentEmote(emote.happy);
        break;
      case "SAD":
        setCurrentEmote(emote.exhausted);
        break;
      case "NEUTRAL":
        setCurrentEmote(emote.unsure);
        break;
      case "TALKING":
        setCurrentEmote(emote.noWords);
        break;
      default:
        setCurrentEmote(emote.unsure);
    }
  };

  const visibleButton = () =>{
    setVisible(!visible);
  }

  const visibleChatBot = () =>{
    setVisibleEmote(!visibleEmote)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/Home/backGroundImage.png")}
        style={styles.background}
        resizeMode="cover"
      >

       <View style={{width:"100%"}}>
         <HeaderComponent navigation={navigation} visibleButton={visibleButton}/>
       </View>

        <View style={styles.titleContainer}><Text style={styles.title} > {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).replace(',', '')}</Text></View>

        <View style={styles.profileContent}>
          <Text style={styles.name}>{profile.name}</Text>
          <View style={styles.pointsContainer}>
            <View style={styles.imageContent}>
              <Image style={styles.image} source={profile.image}/>
            </View>
            <View style={styles.pointsContent}>
              <Text style={styles.text}>Tus puntos de salud son</Text>
              <Text style={styles.points}>{profile.points}</Text>
            </View>
          </View>
        </View>

        <View style={styles.assigmentTitleCentent}><Text style={styles.assigmentTitle}>Completa tus hábitos diarios 🙌</Text></View>

         <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
        {weeklyAssigment.map((tag,index) => (
           <TagsAssigmentComonent navigation={navigation} tag={tag} index={index} key={tag.assigment}/>
          ))}

        </ScrollView>
        
         <View style={{width:"90%",justifyContent:"flex-start",marginVertical:20}}><Text style={{fontSize:20,color:"#002055",fontWeight:"bold"}}>Tu progreso semanal</Text></View>

        <ScrollView
          contentContainerStyle={styles.contentContainerTagsWeekly}
        >
         {weeklyAssigment.map((tag,index) => (
           <TagsWeeklyProgress navigation={navigation} tag={tag} key={tag.assigment}/>
          ))}

        </ScrollView>
        <SightComponent visible={visible} onClose={() => setVisible(false)} />
      <View style={{marginTop:30}}>
        <EmoteComponent
          onPress={() => setModalVisible(!modalVisible)}
          emoteImage={currentEmote}
        />
      </View>

      {/* Modal del chatbot */}
      <ChatBotComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onEmotionChange={handleEmotionChange}
      />
      </ImageBackground>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height:300
  },
  titleContainer: {
    width: "100%",
    alignItems: "center", 
    paddingHorizontal: 20,    
    marginTop: 20,          
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  profileContent:{
    width:"90%",
    height:"auto",
    alignItems:"center",
    justifyContent:"center",
    padding: 15,
    marginTop:30,
    backgroundColor:"#fff",
    borderRadius:8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  name:{
    fontSize:18,
    fontWeight:"bold",
    color:"#002055"
  },
  pointsContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    gap:40
  },
  imageContent:{
    width:80,
    height:80
  },
  image:{
    width:"100%",
    height:"100%"
  },
  pointsContent:{
    justifyContent:"flex-start"
  },
  text:{
    fontSize:16,
    fontWeight:"bold",
    color:"#002055"
  },
  points:{
    fontSize:16,
    fontWeight:"bold",
    color:"#1AA92E"
  },
  assigmentTitleCentent:{
    width: "90%",
    justifyContent: "flex-center",
    marginVertical:20
  },
  assigmentTitle:{
    fontSize:25,
    color:"#002055",
    fontWeight:"bold",
    textAlign:"left",
    width:"60%",
  },
  contentContainerStyle:{
    paddingHorizontal: 20,
    height:height * 0.27,
    gap:10
  },
  contentContainerTagsWeekly:{
    width:"90%",
    height:"auto",
    paddingBottom:10
  },
  emote:{
  marginBottom: 40,
  position: "relative", 
  }
});

export default Home;
