import React, { useState } from 'react';
import { MapContainer, TileLayer,Marker } from 'react-leaflet';

const Map = () => {
  const [activeLayer, setActiveLayer] = useState('Heatmap');
  const layers = ['Heatmap', 'Cameras', 'Units'];

  const deviceData ={
    latitude: 27.684,
    longitude: 85.305
  }
  return (
    <div className="relative h-125  w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">

      {/* Map Container */}
      <div className="relative w-full h-[500px] overflow-hidden">

        {/* ✅ REAL MAP */}
        <MapContainer
          center={[deviceData.latitude, deviceData.longitude]} // Kathmandu
          zoom={13}
          className="h-full w-full z-0"
        >
          <TileLayer
            // attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={[deviceData.latitude, deviceData.longitude]} />
        </MapContainer>

        {/* Floating Action Buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
          {layers.map((layer) => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest rounded-lg border transition-all ${
                activeLayer === layer
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white/90 text-slate-500 border-slate-200 hover:bg-blue-50'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>

        {/* Coordinates Overlay */}
        <div className="absolute bottom-4 right-6 pointer-events-none z-10">
          <p className="text-[9px] font-bold text-red-700">
            {`${deviceData.latitude}, ${deviceData.longitude}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
