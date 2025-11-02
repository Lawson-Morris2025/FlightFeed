import { FlightData, SafetyRating } from './types.ts';

export const flightData: FlightData = {
  "daily_forecast": [
    {
      "day": "Monday",
      "conditions": "Wind 28 mph, Gusts 40 mph, 11°C, Heavy Rain.",
      "safety_rating": SafetyRating.UNSAFE
    },
    {
      "day": "Tuesday",
      "conditions": "Wind 18 mph, Gusts 25 mph, 13°C, Scattered Showers.",
      "safety_rating": SafetyRating.CAUTION
    },
    {
      "day": "Wednesday",
      "conditions": "Wind 8 mph, Gusts 12 mph, 16°C, Sunny Intervals.",
      "safety_rating": SafetyRating.SAFE
    },
    {
      "day": "Thursday",
      "conditions": "Wind 12 mph, Gusts 18 mph, 15°C, Partly Cloudy.",
      "safety_rating": SafetyRating.SAFE
    },
    {
      "day": "Friday",
      "conditions": "Wind 22 mph, Gusts 30 mph, 14°C, Overcast, 45% Precip.",
      "safety_rating": SafetyRating.CAUTION
    },
    {
      "day": "Saturday",
      "conditions": "Wind 10 mph, Gusts 15 mph, 17°C, Sunny.",
      "safety_rating": SafetyRating.SAFE
    },
    {
      "day": "Sunday",
      "conditions": "Wind 26 mph, Gusts 35 mph, 12°C, Rain likely.",
      "safety_rating": SafetyRating.UNSAFE
    }
  ],
  "map_locations": [
    {
      "location_id": "LOC-001",
      "name": "Pontcanna Fields",
      "lat": 51.4885,
      "lng": -3.2094,
      "location_type": "Open Parkland",
      "area": "Cardiff",
      "subArea": "Pontcanna",
      "safety_score": 5,
      "nfz_status": "Low-Risk, check for events"
    },
    {
      "location_id": "LOC-002",
      "name": "Cardiff Bay Barrage",
      "lat": 51.4465,
      "lng": -3.1661,
      "location_type": "Coastal Area",
      "area": "Cardiff",
      "subArea": "Cardiff Bay",
      "safety_score": 3,
      "nfz_status": "Advisory due to Heliport"
    },
    {
      "location_id": "LOC-003",
      "name": "Garth Hill",
      "lat": 51.5540,
      "lng": -3.2844,
      "location_type": "Nature Reserve",
      "area": "Cardiff",
      "subArea": "Pentyrch",
      "safety_score": 4,
      "nfz_status": "Clear, watch for hikers"
    },
    {
      "location_id": "LOC-004",
      "name": "Parc Cefn Onn",
      "lat": 51.5430,
      "lng": -3.1887,
      "location_type": "Parkland",
      "area": "Cardiff",
      "subArea": "Lisvane",
      "safety_score": 4,
      "nfz_status": "Clear, mind the trees"
    },
    {
      "location_id": "LOC-005",
      "name": "Lavernock Point",
      "lat": 51.4057,
      "lng": -3.1706,
      "location_type": "Coastal Area",
      "area": "Vale of Glamorgan",
      "subArea": "Penarth",
      "safety_score": 3,
      "nfz_status": "Clear, strong coastal winds"
    },
    {
      "location_id": "LOC-006",
      "name": "Llanishen & Lisvane Reservoirs",
      "lat": 51.5260,
      "lng": -3.1765,
      "location_type": "Reservoir / Parkland",
      "area": "Cardiff",
      "subArea": "Lisvane",
      "safety_score": 4,
      "nfz_status": "Clear, respect wildlife sensitive areas"
    },
    {
      "location_id": "LOC-007",
      "name": "Sully Island",
      "lat": 51.3995,
      "lng": -3.2323,
      "location_type": "Coastal Area / Island",
      "area": "Vale of Glamorgan",
      "subArea": "Sully",
      "safety_score": 2,
      "nfz_status": "Clear, check tide times carefully"
    },
    {
      "location_id": "LOC-008",
      "name": "Heath Park",
      "lat": 51.5065,
      "lng": -3.1888,
      "location_type": "Open Parkland",
      "area": "Cardiff",
      "subArea": "Heath",
      "safety_score": 4,
      "nfz_status": "Advisory due to nearby hospital helipad"
    },
    {
      "location_id": "LOC-009",
      "name": "Caerphilly Mountain",
      "lat": 51.5645,
      "lng": -3.2201,
      "location_type": "Mountain / Viewpoint",
      "area": "Caerphilly",
      "safety_score": 4,
      "nfz_status": "Clear, can be windy"
    },
    {
      "location_id": "LOC-010",
      "name": "Roath Park Recreation Ground",
      "lat": 51.5001,
      "lng": -3.1685,
      "location_type": "Parkland",
      "area": "Cardiff",
      "subArea": "Roath",
      "safety_score": 3,
      "nfz_status": "Can be busy, fly with consideration"
    },
    {
      "location_id": "LOC-011",
      "name": "Cosmeston Lakes Country Park",
      "lat": 51.4235,
      "lng": -3.1998,
      "location_type": "Nature Reserve / Parkland",
      "area": "Vale of Glamorgan",
      "subArea": "Penarth",
      "safety_score": 4,
      "nfz_status": "Clear, respect wildlife and model aircraft club"
    },
    {
      "location_id": "LOC-012",
      "name": "St Fagans",
      "lat": 51.4862,
      "lng": -3.2755,
      "location_type": "Historic Grounds / Parkland",
      "area": "Cardiff",
      "subArea": "St Fagans",
      "safety_score": 3,
      "nfz_status": "Permission may be required, check opening times"
    },
    {
      "location_id": "LOC-013",
      "name": "The Tump, Trevethin",
      "lat": 51.5951,
      "lng": -3.2680,
      "location_type": "Hilltop / Common Land",
      "area": "Torfaen",
      "subArea": "Pontypool",
      "safety_score": 4,
      "nfz_status": "Clear, excellent views, can be windy"
    },
    {
      "location_id": "LOC-014",
      "name": "Parc Tredelerch",
      "lat": 51.4921,
      "lng": -3.1255,
      "location_type": "Parkland / Lake",
      "area": "Cardiff",
      "subArea": "Rumney",
      "safety_score": 3,
      "nfz_status": "Clear, popular with dog walkers"
    },
    {
      "location_id": "LOC-015",
      "name": "Rumney River Mouth",
      "lat": 51.4802,
      "lng": -3.1101,
      "location_type": "Coastal Area / Estuary",
      "area": "Cardiff",
      "subArea": "Rumney",
      "safety_score": 3,
      "nfz_status": "Clear, can be windy and tidal"
    },
    {
      "location_id": "LOC-016",
      "name": "Hendre Lake Park",
      "lat": 51.5208,
      "lng": -3.1153,
      "location_type": "Parkland / Lake",
      "area": "Cardiff",
      "subArea": "St Mellons",
      "safety_score": 4,
      "nfz_status": "Clear, can be busy on weekends"
    },
    {
      "location_id": "LOC-017",
      "name": "Peterstone Wentlooge Flats",
      "lat": 51.5150,
      "lng": -3.0700,
      "location_type": "Coastal Farmland",
      "area": "Newport",
      "subArea": "Peterstone",
      "safety_score": 4,
      "nfz_status": "Advisory, SSSI area, fly responsibly"
    },
    {
      "location_id": "LOC-018",
      "name": "Llanrumney Playing Fields",
      "lat": 51.5135,
      "lng": -3.1188,
      "location_type": "Open Parkland",
      "area": "Cardiff",
      "subArea": "Llanrumney",
      "safety_score": 4,
      "nfz_status": "Clear, check for local sports activities"
    },
    {
      "location_id": "LOC-019",
      "name": "Cefn Mably Countryside",
      "lat": 51.5510,
      "lng": -3.1050,
      "location_type": "Farmland / Countryside",
      "area": "Caerphilly",
      "subArea": "Cefn Mably",
      "safety_score": 4,
      "nfz_status": "Clear, respect private property boundaries"
    },
    {
      "location_id": "LOC-020",
      "name": "Michaelston-y-Fedw Fields",
      "lat": 51.5433,
      "lng": -3.0781,
      "location_type": "Riverside / Farmland",
      "area": "Newport",
      "subArea": "Michaelston-y-Fedw",
      "safety_score": 3,
      "nfz_status": "Clear, watch for livestock"
    },
    {
      "location_id": "LOC-021",
      "name": "St Mellons Business Park (Outskirts)",
      "lat": 51.5245,
      "lng": -3.0921,
      "location_type": "Open Parkland",
      "area": "Cardiff",
      "subArea": "St Mellons",
      "safety_score": 3,
      "nfz_status": "Fly with caution, avoid business hours"
    },
    {
      "location_id": "LOC-022",
      "name": "Rumney Hill Gardens",
      "lat": 51.5050,
      "lng": -3.1350,
      "location_type": "Local Park",
      "area": "Cardiff",
      "subArea": "Rumney",
      "safety_score": 3,
      "nfz_status": "Urban park, fly with caution, can be busy"
    },
    {
      "location_id": "LOC-023",
      "name": "Trowbridge Mawr Fields",
      "lat": 51.5120,
      "lng": -3.1050,
      "location_type": "Open Fields",
      "area": "Cardiff",
      "subArea": "Trowbridge",
      "safety_score": 4,
      "nfz_status": "Clear, large open area suitable for beginners"
    },
    {
      "location_id": "LOC-024",
      "name": "Rhymney River Trail",
      "lat": 51.5180,
      "lng": -3.1300,
      "location_type": "Riverside Trail",
      "area": "Cardiff",
      "subArea": "Llanrumney",
      "safety_score": 3,
      "nfz_status": "Clear, popular walking & cycling path"
    },
    {
      "location_id": "LOC-025",
      "name": "Llanrumney Hillside Fields",
      "lat": 51.5250,
      "lng": -3.1350,
      "location_type": "Hillside / Farmland",
      "area": "Cardiff",
      "subArea": "Llanrumney",
      "safety_score": 4,
      "nfz_status": "Clear, provides good views, respect farmland"
    },
    {
      "location_id": "LOC-026",
      "name": "Caerphilly Castle",
      "lat": 51.5760,
      "lng": -3.2195,
      "location_type": "Historic Grounds",
      "area": "Caerphilly",
      "safety_score": 2,
      "nfz_status": "Strictly check for restrictions, very busy"
    },
    {
      "location_id": "LOC-027",
      "name": "Parc Penallta",
      "lat": 51.6445,
      "lng": -3.2280,
      "location_type": "Country Park",
      "area": "Caerphilly",
      "subArea": "Ystrad Mynach",
      "safety_score": 5,
      "nfz_status": "Clear, large open space, can be windy"
    },
    {
      "location_id": "LOC-028",
      "name": "Aber Valley",
      "lat": 51.6155,
      "lng": -3.2750,
      "location_type": "Valley / Parkland",
      "area": "Caerphilly",
      "subArea": "Senghenydd",
      "safety_score": 3,
      "nfz_status": "Fly respectfully, watch for valley winds"
    },
    {
      "location_id": "LOC-029",
      "name": "Rudry Common",
      "lat": 51.5700,
      "lng": -3.1550,
      "location_type": "Common Land / Hillside",
      "area": "Caerphilly",
      "subArea": "Rudry",
      "safety_score": 4,
      "nfz_status": "Clear, watch for walkers and livestock"
    },
    {
      "location_id": "LOC-030",
      "name": "Newport Wetlands Reserve",
      "lat": 51.5620,
      "lng": -2.9465,
      "location_type": "Nature Reserve",
      "area": "Newport",
      "safety_score": 4,
      "nfz_status": "Clear, SSSI area, maintain distance from wildlife"
    },
    {
      "location_id": "LOC-031",
      "name": "Whitmore Bay, Barry Island",
      "lat": 51.3935,
      "lng": -3.2770,
      "location_type": "Coastal / Beach",
      "area": "Vale of Glamorgan",
      "subArea": "Barry",
      "safety_score": 3,
      "nfz_status": "Can be very busy, strong coastal winds"
    },
    {
      "location_id": "LOC-032",
      "name": "Twmbarlwm Viewpoint",
      "lat": 51.6255,
      "lng": -3.0780,
      "location_type": "Hilltop / Common Land",
      "area": "Caerphilly",
      "subArea": "Risca",
      "safety_score": 4,
      "nfz_status": "Clear, popular with walkers, can be very windy"
    },
    {
      "location_id": "LOC-033",
      "name": "Porthkerry Country Park",
      "lat": 51.3890,
      "lng": -3.3280,
      "location_type": "Country Park / Coastal",
      "area": "Vale of Glamorgan",
      "subArea": "Barry",
      "safety_score": 4,
      "nfz_status": "Clear, avoid flying near Cardiff Airport flight path"
    },
    {
      "location_id": "LOC-034",
      "name": "Forest Farm Country Park",
      "lat": 51.5235,
      "lng": -3.2350,
      "location_type": "Nature Reserve / Parkland",
      "area": "Cardiff",
      "subArea": "Whitchurch",
      "safety_score": 3,
      "nfz_status": "Clear, popular area, respect wildlife"
    },
    {
      "location_id": "LOC-035",
      "name": "Ball Lane Recreation Ground",
      "lat": 51.5165,
      "lng": -3.1248,
      "location_type": "Local Park",
      "area": "Cardiff",
      "subArea": "Llanrumney",
      "safety_score": 3,
      "nfz_status": "Clear, residential area nearby"
    },
    {
      "location_id": "LOC-036",
      "name": "St Mellons Hub Fields",
      "lat": 51.5190,
      "lng": -3.1010,
      "location_type": "Open Fields",
      "area": "Cardiff",
      "subArea": "St Mellons",
      "safety_score": 4,
      "nfz_status": "Large open space behind community centre"
    },
    {
      "location_id": "LOC-037",
      "name": "Rumney RFC Pitch",
      "lat": 51.5015,
      "lng": -3.1305,
      "location_type": "Sports Field",
      "area": "Cardiff",
      "subArea": "Rumney",
      "safety_score": 3,
      "nfz_status": "Check for training/matches before flying"
    },
    {
      "location_id": "LOC-038",
      "name": "Great House Farm Fields",
      "lat": 51.5282,
      "lng": -3.1129,
      "location_type": "Farmland / Open Fields",
      "area": "Cardiff",
      "subArea": "St Mellons",
      "safety_score": 4,
      "nfz_status": "Respect farming activity and privacy"
    },
    {
      "location_id": "LOC-039",
      "name": "Witla Court Fields",
      "lat": 51.4911,
      "lng": -3.1177,
      "location_type": "Open Parkland",
      "area": "Cardiff",
      "subArea": "Rumney",
      "safety_score": 3,
      "nfz_status": "Clear, near coastal path"
    }
  ],
  "location_reviews": []
}