import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Text, Button, Card, IconButton, Chip } from "react-native-paper";
import { RootStackParamList } from "./utils/types";
import LocationMap from "./utils/LocationMap";
type DestinationCardRouteProp = RouteProp<
  RootStackParamList,
  "DestinationDetail"
>;

const DestinationDetail = () => {
  const route = useRoute<DestinationCardRouteProp>();

  const { location } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Card mode="contained"  style={{ backgroundColor: 'transparent' }}>
        <Card.Cover
          source={{
            uri: location.imageUrl,
          }}
        />
        <View style={styles.imageRow}>
    {location.images.slice(0, 3).map((img, index) => (
      <Image
        key={index}
        source={{ uri: img }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
    ))}
  </View>
      </Card>

      {/* Title & Price */}
      <View style={styles.header}>
        <Text variant="titleLarge">{location.name}</Text>
        <Chip>{location.type}</Chip>
      </View>

      {/* Location & Distance */}
      <View style={styles.row}>
        <Text>📍 {location.region}</Text>
      </View>
      <View>
        {/* Description */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Best Time To Visit
        </Text>
        <Text style={styles.paragraph}>{location.bestTimeToVisit}</Text>
      </View>
      <View>
        {/* Description */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Description
        </Text>
        <Text style={styles.paragraph}>{location.description}</Text>
      </View>
      <View style={styles.attraction}>
        <Text variant="titleLarge">Activities</Text>
      </View>

      <View style={styles.chipRow}>
        {location.activities.map((attraction) => (
          <Chip icon="camera">{attraction}</Chip>
        ))}
      </View>
      <View style={styles.attraction}>
        <Text variant="titleLarge">Attractions</Text>
      </View>

      <View style={styles.chipRow}>
        {location.nearbyAttractions.map((attraction) => (
          <Chip icon="camera">{attraction}</Chip>
        ))}
      </View>
      <View>
        {/* Description */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
         Nearby Place to live
        </Text>
        <Text style={styles.paragraph}>{location.nearbyTownToStay}</Text>
      </View>
      <View>
        {/* Description */}
        <View>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Nearby City
          </Text>
         <Text>{location.nearbyCity}</Text>
        </View>
        <View>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Distance
          </Text>
          
          <Text>{location.nearbyCityDistance}</Text>

        </View>
        <View>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Travel Time
          </Text>
          
          <Text>{location.travelTimeFromNearestCity}</Text>

        </View>
      </View>
      <View>
        {/* Description */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Accessibility
        </Text>
        <Text style={styles.paragraph}>{location.accessibility}</Text>
      </View>
      <View>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Tips
        </Text>
        {location.visitorTips.map((tip) => (
          <Text>{tip}</Text>
        ))}
      </View>
      {/* Location Link */}
      {/* <LocationMap
        latitude={location.coordinates.latitude}
        longitude={location.coordinates.longitude}
        name={location.name}
      /> */}
      {/* <Button icon="map-marker" mode="text" onPress={() => {}}>
        Open on maps
      </Button> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 5,
  },
  shareButton: {
    position: "absolute",
    top: 10,
    right: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  price: {
    color: "green",
  },
  row: {
    flexDirection: "row",
    marginVertical: 4,
  },
  rating: {
    marginBottom: 8,
  },
  chipRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 12,
  },
  sectionTitle: {
    marginTop: 10,
    marginBottom: 4,
  },
  paragraph: {
    marginBottom: 12,
  },
  bookButton: {
    marginTop: 16,
    backgroundColor: "#6b8e23",
  },
  attraction: {
    marginTop: 16,
  },
  flexbox: {
    display: "flex",
     flexDirection:"row",
     justifyContent:"space-between"
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     marginTop:8
  },
  thumbnail: {
    width: '31%', // 3 images with a bit of margin
    height: 80,
    borderRadius: 8,
  },
});

export default DestinationDetail;
