import React from 'react';
import { MapContainer, TileLayer, Marker, LayerGroup, Popup, Tooltip, LayersControl, Circle, FeatureGroup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';



const Basemap = () => {

const center = [2.190332544, 31.277821916];
const outerbounds = [
    [2.136824494833693, 31.227494204047687],
    [2.2881290545168738, 31.3459771527601],
];

return (

    <MapContainer
        doubleClickZoom={false}
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        minZoom={14}
        maxZoom={16}
        maxBounds={outerbounds}
        maxBoundsViscosity={1.0}
        style={{ height: "90vh", backgroundColor: 'white' }}>

        <TileLayer
            url="https://www.alessandromusetta.com/geo/tiles/dei/{z}/{x}/{y}.png" />

    </MapContainer>
)

}

export default Basemap;
