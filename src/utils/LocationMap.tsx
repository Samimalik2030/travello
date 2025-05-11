import React from "react";
import { Linking, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { Button } from "react-native-paper";

export default function LocationMap({
  latitude,
  longitude,
  name,
}: {
  latitude: number;
  longitude: number;
  name: string;
}) {
  return (
    <ScrollView style={{
      paddingBottom:12,
    }}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title="Destination"
            description="This is the location"
          />
        </MapView>
      </View>
      <View
        style={{
          margin: 12,
       
        
        }}
      >
        <Button
          buttonColor="green"
          textColor="white"
          onPress={() => {
            const encodedName = encodeURIComponent(name); 
            const url = `https://www.google.com/maps/search/?api=1&query=${encodedName}`;
            Linking.openURL(url);
          }}
        >
          Open On Maps
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300, // or any height you want
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 16,
  },
  map: {
    flex: 1,
  },
});
