import { RouteProp, useRoute } from "@react-navigation/native";
import * as React from "react";
import { View, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { Card, Text, IconButton, Chip, ActivityIndicator } from "react-native-paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { ILocation } from "./utils/interfaces";
import { RootStackParamList } from "./utils/types";

type DestinationCardRouteProp = RouteProp<RootStackParamList, "DestinationCard">;

export default function DestinationCard({ navigation }: { navigation: any }) {
  const route = useRoute<DestinationCardRouteProp>();
  const { vacationType, region } = route.params;

  const [locations, setLocations] = useState<ILocation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getDestinations() {
      try {
        const response = await axios.get(
          `http://192.168.18.25:5000/api/locations?type=${vacationType}&region=${region}`
        );
        ;
        setLocations(response.data);
      } catch (error) {
        console.error("Failed to fetch destinations", error);
      } finally {
        setLoading(false);
      }
    }
    getDestinations();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }
  if(
    locations.length === 0
  ){
    return(
      <View>
        <Text style={styles.heading} variant="headlineSmall">No Place found!</Text>
        <Text style={styles.para}>We are working to gather as data as possible</Text>
      </View>
    )
  }

  return (
    
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      {locations.map((location, index) => (
        <Pressable
          key={index}
          onPress={() => navigation.navigate("DestinationDetail", { location })}
        >
          <Card style={styles.card}>
            <View>
              <Image source={{ uri: location.imageUrl }} style={styles.image} />
              <Chip style={styles.chip} textStyle={{ color: "white" }}>
                {location.region}
              </Chip>
              
            </View>
            <Card.Content>
              <Text variant="titleMedium" style={styles.title}>
                {location.name}
              </Text>
              <Text variant="bodySmall" style={styles.description}>
                {location.description}
              </Text>
           
            </Card.Content>
          </Card>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    height: 180,
    width: "100%",
  },
  chip: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "black",
  },
  favoriteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "white",
  },
  title: {
    marginTop: 8,
    fontWeight: "600",
  },
  description: {
    color: "#555",
    marginTop: 4,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  price: {
    fontWeight: "600",
  },
  heading:{
    textAlign:"center",
    marginTop:16
  },
  para:{
    textAlign:"center"
  }
});
