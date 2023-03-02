import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

const iconUbicate = new leaflet.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [20, 20],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const localization = [
  { city: "puerto madryn", latitude: { x: -42.7692, y: -65.03851 } },
  { city: "bogota", latitude: { x: 4.60971, y: -74.08175 } },
  { city: "caracas", latitude: { x: 10.48801, y: -66.87919 } },
  { city: "lima", latitude: { x: -12.04318, y: -77.02824 } },
  { city: "rosario", latitude: { x: -32.94682, y: -60.63932 } },
  { city: "cali", latitude: { x: 3.43722, y: -76.5225 } },
  { city: "coro", latitude: { x: 11.4045, y: -69.67344 } },
  { city: "cusco", latitude: { x: -13.52264, y: -71.96734 } },
  { city: "merida", latitude: { x: 8.58972, y: -71.15611 } },
  { city: "ayacucho", latitude: { x: -13.15878, y: -74.22321 } },
  { city: "barranquilla", latitude: { x: 10.96854, y: -74.78132 } },
  { city: "salta", latitude: { x: -24.7859, y: -65.41166 } },
];

const Map = ({ data }) => {
  let corX;
  let corY;

  for (let i = 0; i < localization.length; i++) {
    if (data.city === localization[i].city) {
      corX = localization[i].latitude.x;
      corY = localization[i].latitude.y;
    }
  }

  return (
    <div className="flex justify-center items-center">
      <MapContainer
        className="w-full h-[20rem] rounded-3xl shadow-xl"
        center={[corX, corY]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[corX, corY]} icon={iconUbicate}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
