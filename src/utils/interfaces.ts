export interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  export interface  ILocation {
    name: string;
    region: string;
    type: string;
    description: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    activities: string[];
    imageUrl: string;
    images: string[];
    nearbyCity?: string;
    nearbyCityDistance?: string;
    travelTimeFromNearestCity?: string;
    bestTimeToVisit?: string;
    accessibility?: string;
    nearbyTownToStay?: string;
    visitorTips: string[];
    nearbyAttractions: string[];
    createdAt?: Date;
    updatedAt?: Date;
    _id: string; 
  }
  
  