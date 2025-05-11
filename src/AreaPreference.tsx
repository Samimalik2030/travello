// src/screens/QuizScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Text, Button, RadioButton, Card } from "react-native-paper";

export default function AreaPrefernce({ navigation }: { navigation: any }) {
  const [region, setRegion] = useState("");

  const handleSubmit = () => {
    navigation.navigate("VacationType",{region});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1659553761498-6a8728fbf281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVlbHVtJTIwdmFsbGV5fGVufDB8fDB8fHww",
        }} // Use a beautiful image of Pakistan
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

          {/* Region Preference Question */}
          <Card style={styles.card}>
            <Text style={styles.question}>Do you have a preferred region?</Text>
            <RadioButton.Group onValueChange={setRegion} value={region}>
              <RadioButton.Item
                label="Northern Areas (e.g., Hunza, Skardu, Fairy Meadows)"
                value="Gilgit-Baltistan"
              />
              <RadioButton.Item
                label="Coastal Areas (e.g., Karachi, Gwadar, Clifton Beach)"
                value="Sindh"
              />
              <RadioButton.Item
                label="Punjab (e.g., Lahore, Murree, Rawalpindi, Bahawalpur)"
                value="Punjab"
              />
              <RadioButton.Item
                label="Khyber Pakhtunkhwa (e.g., Swat, Naran, Kaghan, Chitral)"
                value="Khyber Pakhtunkhwa"
              />
              <RadioButton.Item
                label="Balochistan (e.g., Ziarat, Quetta, Hingol National Park)"
                value="Balochistan"
              />
              <RadioButton.Item
                label="Azad Kashmir (e.g., Muzaffarabad, Neelum Valley, Rawalakot)"
                value="Azad Kashmir"
              />
              <RadioButton.Item
                label="Islamabad (e.g., Daman-e-Koh, Faisal Mosque, Shakarparian)"
                value="Islamabad Capital Territory  "
              />
            </RadioButton.Group>
          </Card>

      

          {/* Submit Button */}
          <Button mode="contained"  disabled={region?false:true} onPress={handleSubmit} style={styles.button}>
            Go To Next Step
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
