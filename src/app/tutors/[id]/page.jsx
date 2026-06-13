
// const fetchTutorById = async (id) => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`);
//         const tutor = await res.json();
//         return tutor;
//     } catch (error) {
//         console.error("Error fetching tutor by ID:", error);
//         return null;
//     }
// };

// const TutorDetailsPage = async ({ params }) => {
//   const { id } = await params;
//   const tutor = await fetchTutorById(id);
//   const { name, subject } = tutor || {};
//   console.log("Tutor Data:", tutor); // Debugging log to check the tutor data
//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-center mt-10">Tutor Details Page - {id}</h1>
//             <p className="text-center mt-4 text-gray-600">Tutor Name: {name}</p>
//             <p className="text-center mt-2 text-gray-600">Subject: {subject}</p>
//         </div>
//     );
// }

// export default TutorDetailsPage;

// import { Button, Chip, Card } from "@heroui/react";

// const ALL_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const formatTime = (t) => {
//   if (!t) return "";
//   const [h, m] = t.split(":");
//   const hour = parseInt(h);
//   const ampm = hour >= 12 ? "PM" : "AM";
//   return `${hour % 12 || 12}:${m} ${ampm}`;
// };

// const StarRating = ({ rating = 0 }) => (
//   <div className="flex items-center gap-0.5">
//     {[1, 2, 3, 4, 5].map((i) => (
//       <svg
//         key={i}
//         className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "text-warning" : "text-default-200"}`}
//         fill="currentColor"
//         viewBox="0 0 20 20"
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     ))}
//   </div>
// );

// const InfoRow = ({ label, value }) => (
//   <div className="flex items-start gap-4 py-3 border-b border-default-100 last:border-0">
//     <span className="text-[10px] uppercase tracking-widest text-default-400 w-28 shrink-0 pt-0.5">
//       {label}
//     </span>
//     <span className="text-sm text-default-700">{value || "—"}</span>
//   </div>
// );

// const SectionLabel = ({ children }) => (
//   <p className="text-[10px] uppercase tracking-widest text-default-400 mb-4">
//     {children}
//   </p>
// );

// const fetchTutorById = async (id) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`);
//     const tutor = await res.json();
//     return tutor;
//   } catch (error) {
//     console.error("Error fetching tutor by ID:", error);
//     return null;
//   }
// };

// const TutorDetailsPage = async ({ params }) => {
//   const { id } = await params;
//   const tutor = await fetchTutorById(id);

//   if (!tutor) {
//     return (
//       <div className="min-h-screen bg-default-50 flex items-center justify-center">
//         <p className="text-default-400 text-sm tracking-widest uppercase">
//           Tutor not found
//         </p>
//       </div>
//     );
//   }

//   const {
//     name,
//     photo,
//     subject,
//     teachingMode,
//     hourlyFee,
//     totalSlots = 0,
//     bookedSlots = 0,
//     sessionStartDate,
//     availableDays = [],
//     timeSlot = {},
//     institution,
//     location,
//     rating = 0,
//     totalReviews = 0,
//     bio,
//   } = tutor;

//   const available = totalSlots - bookedSlots;
//   const slotPercent = totalSlots > 0 ? Math.round((bookedSlots / totalSlots) * 100) : 0;

//   return (
//     <div className="min-h-screen bg-default-50 flex flex-col md:flex-row">

//       {/* ══ LEFT — sticky photo panel ══ */}
//       <div className="md:w-[42%] md:sticky md:top-0 md:h-screen shrink-0 relative overflow-hidden">

//         <div className="w-full aspect-[4/5] md:aspect-auto md:h-full relative">
//           <img
//             src={photo}
//             alt={name}
//             className="w-full h-full object-cover object-top"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//           <span className="absolute top-5 left-5 text-[10px] tracking-[0.2em] text-white/30 uppercase">
//             01 / Tutor
//           </span>

//           {subject && (
//             <div className="absolute top-5 right-5">
//               <Chip
//                 size="sm"
//                 variant="bordered"
//                 className="border-white/20 text-white/60 text-[10px] tracking-widest uppercase bg-black/20 backdrop-blur-sm"
//               >
//                 {subject}
//               </Chip>
//             </div>
//           )}

//           <div className="absolute bottom-0 left-0 right-0 p-7">
//             <h1 className="text-3xl md:text-4xl font-light text-white leading-tight mb-2">
//               {name}
//             </h1>
//             <div className="flex items-center gap-2">
//               <StarRating rating={rating} />
//               <span className="text-xs text-white/60">
//                 {rating} · {totalReviews} reviews
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ══ RIGHT — content ══ */}
//       <div className="flex-1 overflow-y-auto px-7 py-10 md:px-12 md:py-14">
//         <div className="max-w-lg">

//           {bio && (
//             <p className="text-sm text-default-500 leading-relaxed font-light mb-8">
//               {bio}
//             </p>
//           )}

//           <hr className="border-t border-default-100 my-7" />

//           <div className="mb-2">
//             <InfoRow label="Institution" value={institution} />
//             <InfoRow label="Location" value={location} />
//             <InfoRow label="Mode" value={teachingMode} />
//             <InfoRow
//               label="Session starts"
//               value={
//                 sessionStartDate
//                   ? new Date(sessionStartDate).toLocaleDateString("en-GB", {
//                       day: "numeric", month: "long", year: "numeric",
//                     })
//                   : null
//               }
//             />
//           </div>

//           <hr className="border-t border-default-100 my-7" />

//           {/* Schedule */}
//           <div className="mb-8">
//             <SectionLabel>Schedule</SectionLabel>

//             <div className="flex flex-wrap gap-2 mb-5">
//               {ALL_DAYS.map((day) => {
//                 const active = availableDays.includes(day);
//                 return (
//                   <Chip
//                     key={day}
//                     size="sm"
//                     variant={active ? "solid" : "bordered"}
//                     className={`text-[11px] tracking-wider rounded-sm ${
//                       active
//                         ? "bg-blue-600 text-white border-default-900"
//                         : "text-default-300 border-default-200"
//                     }`}
//                   >
//                     {day}
//                   </Chip>
//                 );
//               })}
//             </div>

//             {timeSlot?.from && timeSlot?.to && (
//               <div className="inline-flex items-center gap-2 bg-default-100 rounded-lg px-4 py-2.5">
//                 <svg
//                   className="w-4 h-4 text-default-400 shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={1.5}
//                   viewBox="0 0 24 24"
//                 >
//                   <circle cx="12" cy="12" r="9.5" />
//                   <path d="M12 6.5v5.75l3.5 2" />
//                 </svg>
//                 <span className="text-sm text-default-700">
//                   {formatTime(timeSlot.from)} — {formatTime(timeSlot.to)}
//                 </span>
//               </div>
//             )}
//           </div>

//           <hr className="border-t border-default-100 my-7" />

//           {/* Availability + Fee */}
//           <div className="grid grid-cols-2 gap-6 mb-8">
//             <div>
//               <SectionLabel>Availability</SectionLabel>
//               <div className="h-1 bg-default-200 rounded-full overflow-hidden mb-2">
//                 <div
//                   className="h-full bg-default-900 rounded-full transition-all duration-500"
//                   style={{ width: `${slotPercent}%` }}
//                 />
//               </div>
//               <p className="text-xs text-default-400">
//                 <span className="text-sm font-medium text-default-800">{available}</span>
//                 {" "}of {totalSlots} slots open
//               </p>
//             </div>

//             <div>
//               <SectionLabel>Hourly rate</SectionLabel>
//               <p className="text-default-800">
//                 <span className="text-3xl font-light">৳{hourlyFee}</span>
//                 <span className="text-xs text-default-400 ml-1">/ hr</span>
//               </p>
//             </div>
//           </div>

//           {/* Book button — client component needed for interactivity */}
//           <Button
//             isDisabled={available === 0}
//             className="w-full bg-default-900 text-default-50 tracking-[0.18em] uppercase text-[11px] h-12 rounded-xl font-normal"
//           >
//             {available === 0 ? "No slots available" : "Book a session"}
//           </Button>

//           <p className="text-[10px] text-center text-default-300 tracking-widest uppercase mt-4">
//             Free cancellation within 24 hours
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TutorDetailsPage;

import BookButton from "@/components/shared/BookButton";
import { Chip } from "@heroui/react";
import {
  MapPin,
  Clock,
  GraduationCap,
  Laptop,
  CalendarDays,
  Star,
} from "lucide-react";



const ALL_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatTime = (t) => {
  if (!t) return "";
  const [h, m] = t.split(":");
  const hour = parseInt(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  return `${hour % 12 || 12}:${m} ${ampm}`;
};

const StarRating = ({ rating = 0 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i <= Math.round(rating)
            ? "fill-warning text-warning"
            : "fill-default-200 text-default-200"
        }`}
      />
    ))}
  </div>
);

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 py-3 border-b border-default-100 last:border-0">
    <Icon className="w-4 h-4 text-default-400 shrink-0" strokeWidth={1.5} />
    <span className="text-[10px] uppercase tracking-widest text-default-400 w-24 shrink-0">
      {label}
    </span>
    <span className="text-sm text-default-700">{value || "—"}</span>
  </div>
);

const SectionLabel = ({ children }) => (
  <p className="text-[10px] uppercase tracking-widest text-default-400 mb-4">
    {children}
  </p>
);

const fetchTutorById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`);
    const tutor = await res.json();
    return tutor;
  } catch (error) {
    console.error("Error fetching tutor by ID:", error);
    return null;
  }
};

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const tutor = await fetchTutorById(id);

  if (!tutor) {
    return (
      <div className="min-h-screen bg-default-50 flex items-center justify-center">
        <p className="text-default-400 text-sm tracking-widest uppercase">
          Tutor not found
        </p>
      </div>
    );
  }

  const {
    name,
    photo,
    subject,
    teachingMode,
    hourlyFee,
    totalSlots = 0,
    bookedSlots = 0,
    sessionStartDate,
    availableDays = [],
    timeSlot = {},
    institution,
    location,
    rating = 0,
    totalReviews = 0,
    bio,
  } = tutor;

  const available = totalSlots - bookedSlots;
  const slotPercent = totalSlots > 0 ? Math.round((bookedSlots / totalSlots) * 100) : 0;

  return (
    <div className="min-h-screen container mx-auto bg-default-50 flex flex-col md:flex-row">

      {/* ══ LEFT — photo panel ══ */}
      <div className="md:w-[42%] md:sticky md:top-0 md:h-screen shrink-0 relative overflow-hidden">
        <div className="w-full aspect-[4/5] md:aspect-auto md:h-full relative">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <span className="absolute top-5 left-5 text-[10px] tracking-[0.2em] text-white/30 uppercase">
            Tutor
          </span>

          {subject && (
            <div className="absolute top-5 right-5">
              <Chip
                size="sm"
                variant="bordered"
                className="border-white/20 text-white/60 text-[10px] tracking-widest uppercase bg-black/20 backdrop-blur-sm"
              >
                {subject}
              </Chip>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <h1 className="text-3xl md:text-4xl font-light text-white leading-tight mb-2">
              {name}
            </h1>
            
          </div>
        </div>
      </div>

      {/* ══ RIGHT — content ══ */}
      <div className="flex-1 overflow-y-auto px-7 py-10 md:px-12 md:py-14">
        <div className="max-w-lg">
            <p className="text-3xl md:text-4xl font-bold text-default-500 leading-relaxed">
              {name}
            </p>
            <p className="text-sm text-default-50">{subject}</p>
    
          <hr className="border-t border-default-100 my-4" />

          {/* Info rows with lucide icons */}
          <div className="mb-2">
            <InfoRow icon={GraduationCap} label="Institution" value={institution} />
            <InfoRow icon={MapPin} label="Location" value={location} />
            <InfoRow icon={Laptop} label="Mode" value={teachingMode} />
            <InfoRow
              icon={CalendarDays}
              label="Starts"
              value={
                sessionStartDate
                  ? new Date(sessionStartDate).toLocaleDateString("en-GB", {
                      day: "numeric", month: "long", year: "numeric",
                    })
                  : null
              }
            />
          </div>

          <hr className="border-t border-default-100 my-7" />

          {/* Schedule */}
          <div className="mb-8">
            <SectionLabel>Schedule</SectionLabel>

            <div className="flex flex-wrap gap-2 mb-5">
              {ALL_DAYS.map((day) => {
                const active = availableDays.includes(day);
                return (
                  <Chip
                    key={day}
                    size="sm"
                    variant={active ? "solid" : "bordered"}
                    className={`text-[11px] tracking-wider rounded-sm ${
                      active
                        ? "bg-default-900 text-default-50 border-default-900"
                        : "text-blue-600 border-default-200"
                    }`}
                  >
                    {day}
                  </Chip>
                );
              })}
            </div>

            {timeSlot?.from && timeSlot?.to && (
              <div className="inline-flex items-center gap-2 bg-default-100 rounded-lg px-4 py-2.5">
                <Clock className="w-4 h-4 text-default-400 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-default-700">
                  {formatTime(timeSlot.from)} — {formatTime(timeSlot.to)}
                </span>
              </div>
            )}
          </div>

          <hr className="border-t border-default-100 my-7" />

          {/* Availability + Fee */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <SectionLabel>Availability</SectionLabel>
              <div className="h-1 bg-default-200 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-default-900 rounded-full transition-all duration-500"
                  style={{ width: `${slotPercent}%` }}
                />
              </div>
              <p className="text-xs text-default-400">
                <span className="text-sm font-medium text-default-800">{available}</span>
                {" "}of {totalSlots} slots open
              </p>
            </div>

            <div>
              <SectionLabel>Hourly rate</SectionLabel>
              <p className="text-default-800">
                <span className="text-3xl font-light">৳{hourlyFee}</span>
                <span className="text-xs text-default-400 ml-1">/ hr</span>
              </p>
            </div>
          </div>

          <BookButton disabled={available === 0} />

          <p className="text-[10px] text-center text-default-300 tracking-widest uppercase mt-4">
            Free cancellation within 24 hours
          </p>

        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;
