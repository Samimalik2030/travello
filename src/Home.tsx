import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      {/* Background Image with Text and Button */}
      <ImageBackground
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
        }} // Replace with travel-related image
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text variant="headlineLarge" style={styles.title}>
            Explore the World with Medigo
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            Find the perfect destination for your next adventure.
          </Text>

          <Button
            mode="contained"
            onPress={() => navigation.navigate("AreaPrefernce")}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Start Exploring
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay to improve text readability
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: "80%",
    marginTop: 20,
  },
  buttonContent: {
    paddingVertical: 10,
  },
});
