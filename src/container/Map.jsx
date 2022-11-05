import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return ( 
    <>
    <MapContainer
      center={[48.14676, -103.62206]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
    url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxla3NhbWFyamFub3YiLCJhIjoiY2wxNzg4OWdnNGNsdTNjcnB0eTUyaTFpZyJ9.Gb0b3LdcSTevZuB-w1ipCA"
    attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
  />
      <Marker position={[48.14676, -103.62206]} draggable={true} animate={true}>
        <Popup>Daily Addiction Coffee Shop</Popup>
      </Marker>
    </MapContainer>
      <button type="button" onClick={() => router.push('https://www.google.com/maps/dir/48.1574907,-103.6397794/daily+addiction+williston+nd/@48.1522838,-103.6395727,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x53215b6088f0b3a5:0xbadcade96cc8ebc7!2m2!1d-103.6220281!2d48.1468544')}>Get Directions</button>
    </>
  );
};

export default Map;