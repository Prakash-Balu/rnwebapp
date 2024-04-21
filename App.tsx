import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, SafeAreaView, Image} from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from "@react-navigation/native";



const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

    const handleVideoEnd = () => {
    navigation.navigate("WelcomeScreen");
  }

  return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            {width: '100%', height: 180, marginTop: 50},
            {opacity: fadeAnim},
          ]}>
          <Image
            source={require('./assets/images/newLogo.png')}
            resizeMode="contain"
            style={{width: '100%', height: 180}}
          />
        </Animated.View>
        <Video
          source={require('./assets/Videoes/splash_screen.mp4')}
          style={styles.video}
          controls={false}
          resizeMode="contain"
          repeat={false}
          onEnd={handleVideoEnd} // Navigate to WelcomeScreen when video ends
        />
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
