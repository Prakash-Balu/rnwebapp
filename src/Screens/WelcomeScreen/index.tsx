import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import Colors from '../../Controllers/Colors';
// import { useNavigation } from '@react-navigation/native';

const WelcomeScreen =() => {
  // const navigation = useNavigation();

  // Animated values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Move animation
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Scaling animation
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();


     // Clean up animations on unmount
     return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(moveAnim, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
  }, [fadeAnim, moveAnim, scaleAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: moveAnim }] }]}>
      {/* First component: Image */}
      <Animated.Image
        source={require('../../../assets/images/welcome.png')}
        style={styles.image}
      />

      {/* Second component: Title and paragraph */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Veera education</Text>
        <Text style={styles.paragraph}>
          {"In the heart of Veera's Education, amidst the hushed corridors where knowledge whispers its secrets, lies a vibrant tapestry woven with the hues of Hindi."}
        </Text>
      </View>

      {/* Third component: Rounded corner button */}
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'arial',
    fontWeight: '600',
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    paddingHorizontal: 15,
    fontSize: 16,
    letterSpacing: 1.5,
    fontFamily: 'arial',
    color: '#666',
  },
  button: {
    elevation: 5,
    backgroundColor: Colors.lightGold,
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 1.5,
    fontFamily: 'Poppins-Bold'
  },
});

export default WelcomeScreen;
