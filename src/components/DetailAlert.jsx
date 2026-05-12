import React from 'react';
import {
    MapPin,
    Clock3,
    ShieldAlert,
    CarFront,
    User,
    TriangleAlert,
    Activity,
    BadgeCheck,
    X,
} from 'lucide-react';

const DetailAlert = ({ alert, onClose }) => {
    if (!alert) {
        return (
            <div className="hidden lg:flex w-full h-[820px] items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-xl overflow-hidden">
                <div className="text-center">
                    <div className="h-20 w-20 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                        <ShieldAlert className="w-10 h-10 text-slate-400" />
                    </div>

                    <h2 className="text-lg font-bold text-slate-700">
                        No Alert Selected
                    </h2>

                    <p className="text-sm text-slate-400 mt-2">
                        Select an alert from the dashboard to view full details.
                    </p>
                </div>
            </div>
        );
    }

    const severityColor = {
        Critical:
            'bg-red-500/10 text-red-600 border border-red-200',
        High:
            'bg-orange-500/10 text-orange-600 border border-orange-200',
        Medium:
            'bg-yellow-500/10 text-yellow-600 border border-yellow-200',
        Low:
            'bg-emerald-500/10 text-emerald-600 border border-emerald-200',
    };

    return (
        <div className="hidden lg:flex flex-col w-full h-full bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
            
            {/* TOP HEADER */}
            <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6">

                {/* Glow Effect */}
                <div className="absolute top-0 right-0 h-44 w-44 bg-blue-500/20 blur-3xl rounded-full"></div>

                <div className="relative z-10 flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/10">
                                <TriangleAlert className="text-white w-6 h-6" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">
                                    Alert ID
                                </p>

                                <h2 className="text-white text-lg font-bold tracking-wide">
                                    {alert.id}
                                </h2>
                            </div>
                        </div>

                        <h1 className="text-3xl font-black text-white leading-tight mb-3">
                            {alert.title}
                        </h1>

                        <div className="flex items-center gap-3 flex-wrap">
                            <div
                                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                                    severityColor[alert.severity] ||
                                    'bg-slate-100 text-slate-700'
                                }`}
                            >
                                {alert.severity} Severity
                            </div>

                            <div className="flex items-center gap-2 text-slate-300 text-sm">
                                <Clock3 className="w-4 h-4" />
                                {alert.time}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
                
                {/* OVERVIEW */}
                <div className="mb-6">
                    <h2 className="text-sm font-black uppercase tracking-[0.25em] text-slate-400 mb-4">
                        Incident Overview
                    </h2>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <p className="text-sm leading-7 text-slate-600">
                            A traffic-related incident has been detected and flagged by the intelligent monitoring system. 
                            The system identified abnormal activity associated with the detected vehicle and generated an alert for operator review.
                        </p>
                    </div>
                </div>

                {/* INFO GRID */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-blue-600" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    Location
                                </p>

                                <h3 className="font-semibold text-slate-800">
                                    {alert.location}
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-slate-500 leading-6">
                            Incident detected near monitored traffic zone.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                                <CarFront className="w-5 h-5 text-indigo-600" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    License Plate
                                </p>

                                <h3 className="font-mono font-bold text-indigo-600 text-lg">
                                    {alert.license}
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-slate-500">
                            Vehicle registration successfully recognized.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-xl bg-red-100 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-red-600" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    Alert Status
                                </p>

                                <h3 className="font-semibold text-slate-800">
                                    Active Monitoring
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-slate-500">
                            Authorities are currently tracking this event.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                                <BadgeCheck className="w-5 h-5 text-emerald-600" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    Verification
                                </p>

                                <h3 className="font-semibold text-slate-800">
                                    AI Verified
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-slate-500">
                            Detection validated using intelligent analysis.
                        </p>
                    </div>
                </div>

                {/* DRIVER / OWNER SECTION */}
                <div className="mb-6">
                    <h2 className="text-sm font-black uppercase tracking-[0.25em] text-slate-400 mb-4">
                        Vehicle Information
                    </h2>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            
                            <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center">
                                <User className="w-7 h-7 text-slate-600" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-800 mb-1">
                                    Registered Vehicle
                                </h3>

                                <p className="text-sm text-slate-500 leading-7">
                                    This vehicle has been associated with the current traffic alert event. 
                                    System records indicate that the vehicle was identified through automated 
                                    surveillance and traffic analysis modules.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RESPONSE ACTIONS */}
                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.25em] text-slate-400 mb-4">
                        Suggested Response
                    </h2>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-3">
                            Immediate Attention Recommended
                        </h3>

                        <p className="text-sm text-blue-100 leading-7 mb-5">
                            Security operators should review surveillance feeds, confirm the incident details, 
                            and coordinate with nearby traffic personnel if escalation is required.
                        </p>

                        <div className="flex gap-3">
                            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-105 transition-all">
                                Dispatch Team
                            </button>

                            <button className="px-5 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur hover:bg-white/20 transition-all">
                                View Camera Feed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailAlert;