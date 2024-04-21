import React, {useEffect, useRef } from 'react';
import {Animated, StyleSheet, SafeAreaView, Image, View } from 'react-native';
// import Video from 'react-native-video';
import { createElement } from 'react';

//   const handleVideoEnd = () => {
//     navigation.navigate("WelcomeScreen");
//   }

const videoattrs = {
  src: "./assets/Videoes/splash_screen.mp4",
  // poster: "https://www.fillmurray.com/500/360",
  controls: "controls",
  autoPlay: "autoplay",
  onEnded: () => {
    console.log("video ended");
  }
};

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  const createVideo=(attrs:any) => {
    return createElement("video", attrs);
  }

  return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            {width: '100%', height: 180, marginTop: 50},
            {opacity: fadeAnim},
          ]}>
          <Image
            source={{uri: './assets/images/newLogo.png'}}
            resizeMode="contain"
            style={{width: '100%', height: 180}}
          />
        </Animated.View>
        <View>
          {createVideo(videoattrs)}
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  video: {
    flex: 1,
    width: '100%',
  },
});

export default App;
