import React, { useState } from 'react';

const Map = () => {
    const [activeLayer, setActiveLayer] = useState('Heatmap');
    const layers = ['Heatmap', 'Cameras', 'Units'];

    const legendItems = [
        { label: 'Congestion', color: 'bg-yellow-500', text: 'text-yellow-500/90' },
        { label: 'Crash', color: 'bg-red-500', text: 'text-red-500/90' },
        { label: 'Theft', color: 'bg-purple-500', text: 'text-purple-500/90' },
    ];

    return (
        <div className="relative h-125 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
            {/* Map Container - Using a deep zinc/slate color to simulate a dark-mode map */}
            <div className="relative w-full h-[500px] bg-[#1a1c1e] overflow-hidden">
                
                {/* Decorative Map Pattern (Optional visual flair) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 3px)', backgroundSize: '24px 24px' }}>
                </div>

                {/* Floating Action Buttons (Right Side) */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
                    {layers.map((layer) => (
                        <button
                            key={layer}
                            onClick={() => setActiveLayer(layer)}
                            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest rounded-lg border transition-all duration-300 shadow-lg backdrop-blur-md ${
                                activeLayer === layer
                                    ? 'bg-zinc-100 text-zinc-900 border-zinc-100'
                                    : 'bg-zinc-900/60 text-zinc-400 border-zinc-700/50 hover:bg-zinc-800 hover:text-zinc-200'
                            }`}
                        >
                            {layer}
                        </button>
                    ))}
                </div>

                {/* Legend (Bottom Left) */}
                <div className="absolute bottom-6 left-6 w-44 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-4 rounded-xl shadow-2xl z-10">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3">
                        Live Legend
                    </p>
                    <div className="space-y-2.5">
                        {legendItems.map((item) => (
                            <div key={item.label} className="flex items-center gap-3">
                                <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] ${item.color}`}></div>
                                <p className={`text-[11px] font-bold tracking-tight ${item.text}`}>
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map Coordinates Overlay (Professional touch) */}
                <div className="absolute bottom-4 right-6 pointer-events-none">
                    <p className="text-[9px] font-mono text-zinc-600 tracking-tighter">
                        27.6710° N, 85.3123° E
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Map;