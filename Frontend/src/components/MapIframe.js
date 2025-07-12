// import React from 'react';

// const MapIframe = () => {
//     return (
//         <div style={{ height: '400px', width: '100%' }}>
//             <iframe
//                 width="100%"
//                 height="100%"
//                 frameBorder="0"
//                 scrolling="no"
//                 src="https://www.openstreetmap.org/export/embed.html?bbox=51.505%2C-0.09%2C51.51%2C-0.08&amp;layer=mapnik"
//                 title="Map"
//             ></iframe>
//         </div>
//     );
// };

// export default MapIframe;


import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapIframe = ({ mapCenter, markerPosition }) => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <MapContainer center={mapCenter} zoom={10} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={markerPosition}
                    icon={new L.Icon({
                        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                    })}
                >
                    <Popup>Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapIframe;
