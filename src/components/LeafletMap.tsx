import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import iconLocation from "../assets/icons/icon-location.svg";
import L from "leaflet";
import { useContext } from "react";
import { LeafletContext } from "../context/LeafletContext";

export default function LeafletMap() {
  // Custom icon for map
  const iconCustom = new L.Icon({
    iconUrl: iconLocation,
    iconAnchor: [20, 60], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -90],
    className: "leaflet-div-icon",
  });
  // Using context to obtain latitud and longitud values
  const context = useContext(LeafletContext);
  const position: [number, number] = [
    context.position.lat,
    context.position.lng,
  ];
  // Function to update map view
  function ChangeView({ center = position, zoom = 13 }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <ChangeView center={position} zoom={13} />
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={iconCustom}>
        {/* <Marker position={position}> */}
        <Popup>This is an aproximate location.</Popup>
      </Marker>
    </MapContainer>
  );
}
