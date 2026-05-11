// import React from "react";

// const AlertCard = ({
//   type,
//   id,
//   time,
//   title,
//   location,
//   severity,
//   license,
//   onClick
// }) => {
//   // Map severity to colors
//   const severityColor = severity === "High" ? "red-600" :
//                         severity === "Medium" ? "yellow-500" :
//                         "green-500";

//   return (
//     <div
//       onClick={onClick}
//       className='group mb-3 p-4 w-full bg-white border border-slate-200 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 cursor-pointer shadow-sm'
//     >
//       <div className='flex justify-between items-center mb-3'>
//         <span className={`px-3 py-1 text-[10px] font-black bg-${severityColor} text-white rounded-md`}>
//           {type}
//         </span>
//         <span className='px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 rounded-md'>
//           NEW
//         </span>
//       </div>

//       <div className='flex justify-between mb-2'>
//         <p className='text-[11px] font-mono text-slate-400'>{id}</p>
//         <p className='text-[11px] text-slate-400 italic'>{time}</p>
//       </div>

//       <h3 className='text-slate-900 font-bold text-sm mb-3 group-hover:text-blue-700'>
//         {title}
//       </h3>

//       <div className='grid grid-cols-2 gap-y-2 border-t pt-3'>
//         <div>
//           <p className='text-[10px] uppercase text-slate-400 font-bold'>Location</p>
//           <p className='text-xs text-slate-600'>{location}</p>
//         </div>
//         <div>
//           <p className='text-[10px] uppercase text-slate-400 font-bold'>Severity</p>
//           <p className='text-xs text-slate-600'>{severity}</p>
//         </div>
//         <div className='col-span-2'>
//           <p className='text-[10px] uppercase text-slate-400 font-bold'>License No</p>
//           <p className='text-xs font-mono text-blue-600 font-bold'>{license}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlertCard;

import React from "react";

const AlertCard = ({
  type,
  id,
  time,
  title,
  location,
  severity,
  license,
  onClick
}) => {

  const severityStyles =
    severity === "High"
      ? {
          badge: "bg-red-100 text-red-700 border border-red-200",
          dot: "bg-red-500",
        }
      : severity === "Medium"
      ? {
          badge: "bg-yellow-100 text-yellow-700 border border-yellow-200",
          dot: "bg-yellow-500",
        }
      : {
          badge: "bg-emerald-100 text-emerald-700 border border-emerald-200",
          dot: "bg-emerald-500",
        };

  return (
    <div
      onClick={onClick}
      className="
        group relative overflow-hidden
        w-full mb-4
        bg-white/90 backdrop-blur-md
        border border-slate-200/70
        rounded-2xl
        p-5
        shadow-[0_8px_30px_rgb(0,0,0,0.05)]
        hover:shadow-[0_12px_40px_rgb(59,130,246,0.18)]
        hover:-translate-y-1
        hover:border-blue-200
        transition-all duration-300
        cursor-pointer
      "
    >

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Top Section */}
      <div className="relative flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${severityStyles.dot}`}></div>

          <span
            className={`
              px-3 py-1
              text-[11px]
              font-bold
              tracking-wide
              rounded-full
              ${severityStyles.badge}
            `}
          >
            {type}
          </span>
        </div>

        <span
          className="
            px-2.5 py-1
            text-[10px]
            font-bold
            rounded-full
            bg-blue-100
            text-blue-700
            border border-blue-200
            animate-pulse
          "
        >
          NEW
        </span>
      </div>

      {/* ID + Time */}
      <div className="relative flex justify-between items-center mb-3">
        <p className="text-[11px] font-mono text-slate-400 tracking-wide">
          #{id}
        </p>

        <p className="text-[11px] text-slate-400">
          {time}
        </p>
      </div>

      {/* Title */}
      <h3
        className="
          relative
          text-[15px]
          font-bold
          text-slate-800
          leading-snug
          mb-5
          group-hover:text-blue-700
          transition-colors duration-300
        "
      >
        {title}
      </h3>

      {/* Info Grid */}
      <div
        className="
          relative
          grid grid-cols-2 gap-4
          pt-4
          border-t border-slate-100
        "
      >

        {/* Location */}
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
            Location
          </p>

          <p className="text-sm text-slate-700 font-medium">
            {location}
          </p>
        </div>

        {/* Severity */}
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
            Severity
          </p>

          <p className="text-sm font-semibold text-slate-700">
            {severity}
          </p>
        </div>

        {/* License */}
        <div className="col-span-2 bg-blue-50 rounded-xl p-3 border border-blue-100">
          <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1">
            License Number
          </p>

          <p className="text-sm font-mono font-bold text-blue-700 tracking-wide">
            {license}
          </p>
        </div>
      </div>

      {/* Bottom Hover Line */}
      <div
        className="
          absolute bottom-0 left-0
          h-1 w-0
          bg-gradient-to-r from-blue-500 to-cyan-400
          group-hover:w-full
          transition-all duration-500
        "
      ></div>
    </div>
  );
};

export default AlertCard;