// src/screens/QuizScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Text, Button, RadioButton, Card } from "react-native-paper";

import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "./utils/types";
type DestinationCardRouteProp = RouteProp<RootStackParamList, "VacationType">;

export default function VacationType({ navigation }: { navigation: any }) {
  const route = useRoute<DestinationCardRouteProp>();
  const { region } = route.params;

  const [vacationType, setVacationType] = useState("");

  const handleSubmit = () => {
    navigation.navigate("DestinationCard", { vacationType, region });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1592298285277-64da3dc70efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFufGVufDB8fDB8fHww",
        }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text variant="headlineLarge" style={styles.title}>
            Find Your Perfect Destination
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            Answer a few questions to help us recommend the best places in
            Pakistan for you!
          </Text>

          <Card style={styles.card}>
            <Text style={styles.question}>
              What type of vacation are you looking for?
            </Text>
            <RadioButton.Group
              onValueChange={setVacationType}
              value={vacationType}
            >
              <RadioButton.Item
                label="Adventure (e.g., trekking, rock climbing)"
                value="trekking"
              />
             
              <RadioButton.Item
                label="Culture (e.g., visit historical sites, museums)"
                value="historical"
              />
              <RadioButton.Item
                label="Family-friendly (e.g., hill stations, theme parks)"
                value="hill station"
              />
              <RadioButton.Item
                label="Nature (e.g., hiking, wildlife sanctuary)"
                value="hiking"
              />
             
              
              <RadioButton.Item
                label="Spiritual (e.g., visit to shrines)"
                value="shrine"
              />
              
            </RadioButton.Group>
          </Card>

          {/* Submit Button */}
          <Button
            mode="contained"
            onPress={handleSubmit}
            disabled={vacationType ? false : true}
            style={styles.button}
          >
            Get Recommendations
          </Button>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
  },
  card: {
    marginVertical: 10,
    backgroundColor: "#ffffffb3",
    borderRadius: 10,
    paddingTop: 12,
  },
  question: {
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    width: "80%",
    alignSelf: "center",
  },
});
