import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Don't forget to import Leaflet's base CSS
import {
  touristIcon,
  fashionIcon,
  foodIcon,
  districtIcon,
  museumIcon,
  fashionIconBig,
  shoppingIcon,
  coffeeIcon,
  knifeIcon,
} from "./Icons";

type Location = {
  on: boolean;
  position: [number, number];
  icon: any;
  description: string;
};

const locations: Location[] = [
  {
    on: true,
    position: [35.714544, 139.789157],
    icon: knifeIcon,
    description: "Tsubaya<br/><br/>",
  },
  {
    on: true,
    position: [35.693065, 139.699512],
    icon: foodIcon,
    description:
      "Omoide Yokocho, Tokyo, this narrow lane is filled with hidden gem restaurants in Tokyo that offer a nostalgic glimpse into the city’s vibrant past.<br/><br/>The lane is a tight cluster of around sixty small bars and eateries, with alleys just wide enough for two people to pass. The air is rich with the aroma of yakitori being grilled, and the ambiance is thick with memories of post-war Tokyo. This place has roots dating back to the 1940s when it was a hub for street vendors and black market traders. Over time, it evolved into a beloved drinking spot, with its structures getting a revamp after a fire in 1999.<br/><br/>What’s on the menu? Expect traditional Japanese delights like grilled fish, yakitori, and tempura. And if you’re feeling adventurous, some spots even offer unique dishes like horse meat or farmed Chinese softshell turtle. But it’s not just about the food. The real charm of Omoide Yokocho lies in its atmosphere. The grit, the noise, the camaraderie its all part of the experience.",
  },
  {
    on: true,
    position: [35.660184, 139.723575],
    icon: foodIcon,
    description:
      "Kill Bill set: Gonpachi Nishiazabu. <br/>https://gonpachi.jp/nishi-azabu/<br/><br/>Gonpachi Nishi-Azabu, 1 Chome-13-11 Nishiazabu, Minato City, Tokyo 106-0031, Japan",
  },
  {
    on: true,
    position: [35.670627, 139.708361],
    icon: foodIcon,
    description:
      "sakura tei<br/><br/>Sakura-tei, 3 Chome-20-1 Jingumae, Shibuya City, Tokyo 150-0001, Japan<br/>https://www.sakuratei.co.jp/en/",
  },
  {
    on: true,
    position: [35.713098, 139.788536],
    icon: knifeIcon,
    description: "Kamata <br/><br/> Where the chef's knife knife is from",
  },
  {
    on: true,
    position: [35.714034, 139.78874],
    icon: knifeIcon,
    description:
      "Kamaasa<br/><br/>KAMA-ASA(Kitchen Knife Section), 2 Chome-24-1 Matsugaya, Taito City, Tokyo 111-0036, Japan",
  },
  {
    on: true,
    position: [35.669085, 139.706807],
    icon: fashionIconBig,
    description:
      "Cune + Bape <br/><br/>Cune, https://www.cune.jp/ 4 Chome-28-22 Jingumae, Shibuya City, Tokyo, Japan",
  },
  {
    on: true,
    position: [35.67208, 139.709414],
    icon: fashionIcon,
    description:
      "UNITED ARROWS Harajuku Main Store, 2F-3F 3 Chome-28-1 Jingumae, Shibuya City, Tokyo 150-0001, Japan",
  },
  {
    on: true,
    position: [35.657628, 139.700265],
    icon: shoppingIcon,
    description:
      "Beams. Department Store <br/><br/> Tokyu Plaza Shibuya, 渋谷フクラス 内 1 Chome-2-3 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan",
  },
  {
    on: true,
    position: [35.66708, 139.707107],
    icon: shoppingIcon,
    description:
      "Shopping Icon <br/><br/>Oriental Bazzaar, One of the best shops for tourist and antique items in Tokyo",
  },
  {
    on: true,
    position: [35.659576, 139.700518],
    icon: touristIcon,
    description: "Shibuya Crossing <br /> Lots of people crossing the street.",
  },
  {
    on: true,
    position: [35.714693, 139.796582],
    icon: touristIcon,
    description:
      "Sensō-ji <br/><br/> One of the most sacret temples in the world.",
  },
  {
    on: true,
    position: [35.667404, 139.707086],
    icon: coffeeIcon,
    description:
      "inside Gyre, the Omotesando shopping centre designed by renowned architectural firm MVRDV. <br/>Uni takes up a good half of the space and is defined by a stunning seating area made up of wooden cubes in varying heights. The space was designed by Atelier Tsuyoshi Tane Architects and is inspired by soil, with the floor and walls covered in different types of earth. The surrounding greenery adds to the natural space and gives the café a forest-like feel. Its Zen atmosphere makes it the perfect retreat from the hustle and bustle of the streets below.",
  },
  {
    on: true,
    position: [35.685406, 139.753223],
    icon: touristIcon,
    description:
      "Kōkyo Castle <br/><br/>The Imperial Palace of Tokyo is an icon of the city — a fortified castle that sits high up on a stone embankment surrounded by a moat. The imperial family live here, giving it extraordinary importance in Japan. ",
  },
  {
    on: true,
    position: [35.649044, 139.789708],
    icon: museumIcon,
    description:
      "Teamlab Planets <br><br> a sensory museum experience with large-scale art spaces. Move through a series of rooms, each home to a unique experience, from giant glowing orbs and lights to water spaces filled with flowers and mirrors.",
  },
  {
    on: true,
    position: [35.649044, 139.789708],
    icon: museumIcon,
    description:
      "Teamlab Planets <br><br> a sensory museum experience with large-scale art spaces. Move through a series of rooms, each home to a unique experience, from giant glowing orbs and lights to water spaces filled with flowers and mirrors.",
  },
  {
    on: true,
    position: [35.667544, 139.706134],
    icon: foodIcon,
    description:
      "MUSHROOM TOKYO <br/>, 岡島ビル 1F 6 Chome-2-4 Jingumae, Shibuya City, Tokyo 150-0001, Japan <br/><br/>https://www.mushroomtokyo.com/",
  },
  {
    on: true,
    position: [35.685843, 139.711168],
    icon: touristIcon,
    description: "Shinjuku Gyoen National Garden<br/><br/> ",
  },
  {
    on: true,
    position: [35.695099, 139.70181],
    icon: touristIcon,
    description: "godzillla heafd",
  },
  {
    on: true,
    position: [35.710355, 139.774963],
    icon: fashionIcon,
    description:
      "HINOYA <br/><br/> 6 Chome-10-14 Ueno, Taito City, Tokyo 110-0005, Japan<br/><br/>Hinoya, it’s high-quality denim you’ll find. You can’t miss the store as the open facade is covered with denim, including everything from varying washes of jeans to stylish jackets. Venture inside and browse a range of major Japanese and international denim brands. Expect to see the likes of Momotaro and Big John, as well as some lesser-known labels such as Oni Denim, Yen Jeans and Burgus Plus. You’ll find at least ten brands stocked at a time with Hinoya’s two sister stores next door, but if it’s jeans you’re looking for, this main shop is your best bet.",
  },
  {
    on: true,
    position: [35.696233, 139.570406],
    icon: museumIcon,
    description: "Ghubli Museum",
  },
  {
    on: true,
    position: [35.670537, 139.763301],
    icon: fashionIconBig,
    description:
      "Dover Street Market  <br/> <br/> Dover Street Market Ginza, 6 Chome-9-5 Ginza, Chuo City, Tokyo 104-0061, Japan.",
  },
  {
    on: true,
    position: [35.665777, 139.7707],
    icon: touristIcon,
    description: "Tsukiji Outer Market <br/><br/>",
  },
  {
    on: true,
    position: [35.690576, 139.740518],
    icon: foodIcon,
    description: "Sushi Restaurant <br /> Famous for delicious sushi.",
  },
  {
    on: true,
    position: [35.594141, 139.704672],
    icon: districtIcon,
    description: "Golden Gai <br /> Famous for nightlife and tiny bars.",
  },
  {
    on: true,
    position: [35.665828, 139.66985],
    icon: districtIcon,
    description:
      "Shimokitazawa <br/> <br/> Trove of vintage fashion and its love of vinyl records. In between stores selling one or the other – sometimes both – is a vibrant community of quaint cafés and cool restaurants scattered throughout Shimokitazawa's small streets and alleys.",
  },
  {
    on: true,
    position: [35.671177, 139.705057],
    icon: districtIcon,
    description:
      "Harajuku</br></br> Harajuku is a neighborhood in Tokyo known for its unique and quirky fashion, culture, and attractions. From colorful street style to iconic landmarks, there’s no shortage of interesting things to see and do in Harajuku",
  },
  {
    on: true,
    position: [35.710045, 139.774784],
    icon: districtIcon,
    description:
      "AMEYOKO PLAZA <br/><br/> 6 Chome-9-9 Ueno, Taito City, Tokyo 110-0005, Japan <br/> This maze of streets next to the railway tracks between Ueno and Okachimachi stations comprises two markets: the covered Ueno Centre Mall and open-air Ameyoko itself. The mall sells an array of souvenirs and clothes, while the 500 stalls of jam-packed Ameyoko - one of Tokyo’s greatest street markets - specialise in fresh food, especially fish.",
  },
];

const Map = () => {
  const initialPosition: [number, number] = [35.659576, 139.700518];

  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
      />

      {locations.map(({ position, icon, description }, index) => (
        <Marker key={index} position={position} icon={icon}>
          <Popup>
            <div
              className="bg-green-100 p-2 rounded-lg text-blue-900 font-semibold"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
