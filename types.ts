export enum SafetyRating {
  SAFE = "SAFE",
  CAUTION = "CAUTION",
  UNSAFE = "UNSAFE",
}

export interface DailyForecast {
  day: string;
  conditions: string;
  safety_rating: SafetyRating;
}

export interface MapLocation {
  location_id: string;
  name: string;
  lat: number;
  lng: number;
  location_type: string;
  area: string;
  subArea?: string;
  safety_score: number;
  nfz_status: string;
}

export interface LocationReview {
  review_id: string;
  location_id: string;
  username: string;
  rating: number;
  review_text: string;
  date: string;
}

export interface FlightData {
  daily_forecast: DailyForecast[];
  map_locations: MapLocation[];
  location_reviews: LocationReview[];
}