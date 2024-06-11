// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SplashScreen from './src/Screens/SplashScreen';
// import WelcomeScreen from './src/Screens/WelcomeScreen';
// import React from 'react';

// const Stack = createNativeStackNavigator();

// const App=()=> {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="SplashScreen">
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

// export default App;

import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, SafeAreaView,Image, View} from 'react-native';
// import Video from 'react-native-video';
import {createElement} from 'react';

//   const handleVideoEnd = () => {
//     navigation.navigate("WelcomeScreen");
//   }

const videoAttrs = {
  src: './assets/Videoes/splash_screen.mp4',
  // poster: "https://www.fillmurray.com/500/360",
  controls: 'controls',
  autoPlay: true,
  onEnded: () => {
    console.log('video ended');
  },
};

const imgAttrs = {
  src: './assets/images/newLogo.png',
  backgroundSize: 'contain',
  backgroundPosition : "center center",
  style: {
    width: '100%',
    height: 180,
  },
};

const SplashScreen = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const createVideo = (attrs: any) => {
    return createElement('video', attrs);
  };

  const createImg = (attrs: any) => {
    return createElement('img', attrs);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {width: '100%', height: 180, marginTop: 50},
          {opacity: fadeAnim},
        ]}>
          <View 
          style={
            {
              width: '100%',
              height: 180,
              flexBasis: 'auto',
              overflow: 'hidden',
              zIndex: 0
            }
          }
          >
            <View
            style={
              {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                backgroundSize : 
              }
            }>

            </View>
{createImg(imgAttrs)}
          </View>
        <Image
          source={{uri: './assets/images/newLogo.png'}}
          resizeMode="contain"
          style={{width: '100%', height: 180}}
        />
        {/* {createImg(imgAttrs)} */}
      </Animated.View>
      <View>{createVideo(videoAttrs)}</View>
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
  bgStyle: {
    
  }
});

export default SplashScreen;
