import React, { useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

const MapComponent = ({ devices = [] }) => {
  const [activeLayer, setActiveLayer] = useState('Units');

  const center = devices.length
    ? [devices[0].latitude, devices[0].longitude]
    : [27.7172, 85.3240];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 shadow-2xl bg-white font-sans">
      
      <div className="relative w-full h-[500px]">
        <Map height={500} center={center} zoom={13}>
          
          {/* Custom Styled Zoom Controls */}
          <ZoomControl
            style={{
              margin: '12px',
            }}
            buttonStyle={{
              background: '#3b82f6', // softer modern blue
              color: 'white',
              borderRadius: '999px', // fully rounded
              width: '38px',
              height: '38px',
              fontSize: '18px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              border: 'none',
            }}
          />

          {devices.map((device, idx) => (
            <Marker
              key={idx}
              anchor={[device.latitude, device.longitude]}
              width={38}
              color={device.infotype === 'CRASH' ? '#ef4444' : '#3b82f6'}
              onClick={() =>
                alert(
                  `License: ${device.licenseNo}\nDevice: ${device.deviceId}\nStatus: ${device.infotype}`
                )
              }
            />
          ))}
        </Map>

        {/* Layer Buttons */}
        <div className="absolute right-5 top-5 flex flex-col gap-3 z-10">
          {['Units', 'Cameras', 'Heatmap'].map(layer => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 shadow-md ${
                activeLayer === layer
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="absolute bottom-5 right-6 z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
          <p className="text-xs font-semibold text-slate-700 tracking-wide">
            Crash Alerts: {devices.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;