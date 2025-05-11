import { ILocation } from "./interfaces";

export type RootStackParamList = {
  Home: undefined;
  DestinationCard: {
    vacationType: string;
    region:string
  };
  VacationType: {
    region: string;
  };
  DestinationDetail:{
    location:ILocation
  }
};
