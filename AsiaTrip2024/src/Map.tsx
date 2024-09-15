import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Don't forget to import Leaflet's base CSS
import {touristIcon, fashionIcon, foodIcon, districtIcon, museumIcon} from './Icons'


const locations = [
  {
    position: [35.659576, 139.700518],
    icon: touristIcon,
    description: "Shibuya Crossing <br /> Lots of people crossing the street."
  },
  {
    position: [35.714693, 139.796582],
    icon: touristIcon,
    description: "Sensō-ji <br/><br/> One of the most sacret temples in the world."
  },
  {
    position: [35.685406, 139.753223],
    icon: touristIcon,
    description: "Kōkyo Castle <br/><br/>The Imperial Palace of Tokyo is an icon of the city — a fortified castle that sits high up on a stone embankment surrounded by a moat. The imperial family live here, giving it extraordinary importance in Japan. "
  },
  {
    position: [35.649044, 139.789708],
    icon: museumIcon,
    description: "Teamlab Planets <br><br> a sensory museum experience with large-scale art spaces. Move through a series of rooms, each home to a unique experience, from giant glowing orbs and lights to water spaces filled with flowers and mirrors."
  },
  {
    position: [35.649044, 139.789708],
    icon: museumIcon,
    description: "Teamlab Planets <br><br> a sensory museum experience with large-scale art spaces. Move through a series of rooms, each home to a unique experience, from giant glowing orbs and lights to water spaces filled with flowers and mirrors."
  },
  {
    position: [35.685843, 139.711168],
    icon: touristIcon,
    description: "Shinjuku Gyoen National Garden<br/><br/> "
  },
  {
    position: [35.695099, 139.701810],
    icon: touristIcon,
    description: "godzillla heafd"
  },
  {
    position: [35.594141, 139.704672],
    icon: districtIcon,
    description: "Golden Gai <br /> Famous for nightlife and tiny bars."
  },
  {
    position: [35.696233, 139.570406], 
    icon: museumIcon,
    description: "Ghubli Museum"
  },
  {
    position: [35.670537, 139.763301],
    icon: fashionIcon,
    description: "Dover Street Market  <br/> <br/> Dover Street Market Ginza, 6 Chome-9-5 Ginza, Chuo City, Tokyo 104-0061, Japan."
  },
  {
    position: [35.671177, 139.705057],
    icon: districtIcon,
    description: "Harajuku"
  },
  {
    position: [35.665777, 139.770700],
    icon: touristIcon, 
    description: "Tsukiji Outer Market "
  },
  {
    position: [35.665828, 139.669850],
    icon: districtIcon,
    description: "Shimokitazawa <br/> <br/> Trove of vintage fashion and its love of vinyl records. In between stores selling one or the other – sometimes both – is a vibrant community of quaint cafés and cool restaurants scattered throughout Shimokitazawa's small streets and alleys."
  },
  {
    position: [35.690576, 139.740518],
    icon: foodIcon,
    description: "Sushi Restaurant <br /> Famous for delicious sushi."
  }
];

const Map = () => {
  const initialPosition: [number, number] = [35.659576, 139.700518];

  return (
    <MapContainer center={initialPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
      />
      
      {locations.map(({ position, icon, description }, index) => (
        <Marker key={index} position={position} icon={icon}>
          <Popup>
            <div className="bg-green-100 p-2 rounded-lg text-blue-900 font-semibold" dangerouslySetInnerHTML={{ __html: description }} />
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
};

export default Map;
