

// import {
//   FieldError,
//   Input,
//   Label,
//   TextField,
//   Select,
//   ListBox,
//   TextArea,
//   Button,
//   Card,
// } from "@heroui/react";

// const AddTutorPage = () => {
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const tutor = Object.fromEntries(formData.entries());
//     const res = await fetch('http://localhost:8080/tutor', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(tutor),
//     })
//       const data = await res.json();
//       console.log(data)


//     const days = Array.from(
//       document.querySelectorAll("input[name='availableDays']:checked")
//     ).map((el) => el.value);

//     tutor.availableDays = days;


//   };

//   const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

//   return (
//     <div className="min-h-screen bg-sky-50/30 px-4 py-10">
      
//       <div className="max-w-5xl mx-auto">

//         {/* Header */}
//         <h1 className="text-2xl font-semibold text-slate-800 mb-6">
//           Add Tutor
//         </h1>

//         <Card className="p-10 md:p-14 rounded-2xl border border-sky-100 shadow-sm">

//           <form onSubmit={onSubmit} className="space-y-8">

//             {/* GRID */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//               {/* Tutor Name */}
//               <div className="md:col-span-2">
//                 <TextField name="name" isRequired>
//                   <Label>Tutor Name</Label>
//                   <Input placeholder="Enter tutor name" />
//                   <FieldError />
//                 </TextField>
//               </div>

//               {/* Image URL */}
//               <TextField name="imageUrl" isRequired>
//                 <Label>Image URL</Label>
//                 <Input placeholder="https://..." type="url" />
//                 <FieldError />
//               </TextField>

//               {/* Subject */}
//               <TextField name="subject" isRequired>
//                 <Label>Subject</Label>
//                 <Input placeholder="Math, English..." />
//                 <FieldError />
//               </TextField>

//               {/* Category */}
//               <div>
//                 <Select name="category" isRequired>
//                   <Label>Category</Label>

//                   <Select.Trigger className="rounded-xl">
//                     <Select.Value placeholder="Select category" />
//                     <Select.Indicator />
//                   </Select.Trigger>

//                   <Select.Popover>
//                     <ListBox>
//                       <ListBox.Item id="School" textValue="School">School</ListBox.Item>
//                       <ListBox.Item id="College" textValue="College">College</ListBox.Item>
//                       <ListBox.Item id="University" textValue="University">University</ListBox.Item>
//                       <ListBox.Item id="Admission" textValue="Admission">Admission</ListBox.Item>
//                       <ListBox.Item id="Skill" textValue="Skill Development">Skill Development</ListBox.Item>
//                     </ListBox>
//                   </Select.Popover>
//                 </Select>
//               </div>

//               {/* Experience */}
//               <TextField name="experience" isRequired>
//                 <Label>Experience</Label>
//                 <Input placeholder="e.g. 3 years" />
//               </TextField>

//               {/* Institution */}
//               <TextField name="institution" isRequired>
//                 <Label>Institution</Label>
//                 <Input placeholder="University / College" />
//               </TextField>

//               {/* Slots */}
//               <TextField name="totalSlots" isRequired>
//                 <Label>Total Slots Per Day</Label>
//                 <Input type="number" placeholder="5" />
//               </TextField>

//               {/* Date */}
//               <TextField name="sessionStartDate" isRequired>
//                 <Label>Session Start Date</Label>
//                 <Input type="date" />
//               </TextField>

//               {/* Time */}
//               <TextField name="availableTime" isRequired>
//                 <Label>Available Time</Label>
//                 <Input placeholder="5PM - 9PM" />
//               </TextField>
//             </div>

//             {/* DAYS (IMPROVED UI) */}
//             <div>
//               <Label>Available Days</Label>

//               <div className="flex flex-wrap gap-3 mt-3">
//                 {days.map((day) => (
//                   <label key={day}>
//                     <input
//                       type="checkbox"
//                       name="availableDays"
//                       value={day}
//                       className="hidden peer"
//                     />

//                     <span className="
//                       px-4 py-2 text-sm rounded-full border cursor-pointer
//                       border-sky-100 text-slate-600
//                       peer-checked:bg-sky-600 peer-checked:text-white
//                       peer-checked:border-sky-600
//                       hover:border-sky-300 transition
//                     ">
//                       {day}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* BIO */}
//             <div>
//               <TextField name="bio" isRequired>
//                 <Label>Bio</Label>
//                 <TextArea
//                   placeholder="Short description..."
//                   className="min-h-[120px]"
//                 />
//                 <FieldError />
//               </TextField>
//             </div>

//             {/* BUTTON */}
//             <Button
//               type="submit"
//               className="w-full bg-sky-600 text-white rounded-xl py-3"
//             >
//               Add Tutor
//             </Button>

//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AddTutorPage;

"use client";

import { useState } from "react";
import {
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Button,
  Card,
  FieldError,
  Avatar,
} from "@heroui/react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const SUBJECTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Bangla",
  "ICT / Computer Science",
  "Accounting",
  "Economics",
  "Other",
];

const SectionHeading = ({ number, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-[10px] font-mono text-default-300 w-5 shrink-0">
      {String(number).padStart(2, "0")}
    </span>
    <span className="text-[10px] tracking-[0.18em] uppercase text-default-400 font-medium shrink-0">
      {title}
    </span>
    <hr className="flex-1 border-t border-default-100" />
  </div>
);

export default function AddTutorPage() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [photoUrl, setPhotoUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const toggleDay = (day) =>
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const tutor = Object.fromEntries(formData.entries());

    tutor.availableDays = selectedDays;
    tutor.timeSlot = { from: tutor.timeFrom, to: tutor.timeTo };
    delete tutor.timeFrom;
    delete tutor.timeTo;
    tutor.hourlyFee = Number(tutor.hourlyFee);
    tutor.totalSlots = Number(tutor.totalSlots);

    try {
      const res = await fetch("http://localhost:8080/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tutor),
      });
      const data = await res.json();
      console.log("Response:", data);
      setDone(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="min-h-screen bg-default-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-sm border border-default-100 shadow-none">
          <div className="flex flex-col items-center text-center gap-4 py-14 px-8">
            <span className="text-4xl text-default-200">✦</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-default-800">
                Profile submitted
              </h2>
              <p className="text-sm text-default-400">
                Tutor has been added successfully.
              </p>
            </div>
            <Button
              variant="bordered"
              size="sm"
              className="mt-2 tracking-widest uppercase text-xs text-default-500 border-default-200"
              onPress={() => {
                setDone(false);
                setPhotoUrl("");
                setSelectedDays([]);
              }}
            >
              Add another
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-default-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.22em] uppercase text-default-400 mb-2">
            Tutor Registration
          </p>
          <h1 className="text-3xl font-light text-default-900 tracking-tight">
            Add a new tutor
          </h1>
        </div>

        {/* Main card */}
        <Card className="border border-default-100 shadow-none">
          <div className="p-8 md:p-10">
            <form onSubmit={onSubmit} className="flex flex-col gap-10">

              {/* ── 01 IDENTITY ── */}
              <section className="flex flex-col gap-6">
                <SectionHeading number={1} title="Identity" />

                {/* Avatar + photo URL */}
                <div className="flex items-center gap-4">
                  <Avatar
                    src={photoUrl || undefined}
                    name="T"
                    size="lg"
                    className="shrink-0 bg-default-100 text-default-400"
                  />
                  <TextField name="photo" isRequired className="flex-1">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Photo URL
                    </Label>
                    <Input
                      type="url"
                      placeholder="https://i.ibb.co/..."
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>
                </div>

                {/* Full name */}
                <TextField name="name" isRequired className="w-full">
                  <Label className="text-[10px] tracking-widest uppercase text-default-400">
                    Full name
                  </Label>
                  <Input
                    placeholder="e.g. Richard Feynman"
                    variant="underlined"
                    className="text-sm"
                  />
                  <FieldError className="text-xs text-danger mt-1" />
                </TextField>

                {/* Institution + Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextField name="institution" isRequired className="w-full">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Institution & experience
                    </Label>
                    <Input
                      placeholder="e.g. BUET, 5 years"
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>

                  <TextField name="location" isRequired className="w-full">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Location
                    </Label>
                    <Input
                      placeholder="e.g. Agrabad, Chattogram"
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>
                </div>
              </section>

              <hr className="border-t border-default-100" />

              {/* ── 02 SUBJECT ── */}
              <section className="flex flex-col gap-6">
                <SectionHeading number={2} title="Subject" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select name="subject" isRequired>
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Subject / category
                    </Label>
                    <Select.Trigger className="text-sm border-0 border-b border-default-200 rounded-none px-0 shadow-none">
                      <Select.Value placeholder="Select subject" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        {SUBJECTS.map((s) => (
                          <ListBox.Item key={s} id={s} textValue={s}>
                            {s}
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Select name="teachingMode" isRequired>
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Teaching mode
                    </Label>
                    <Select.Trigger className="text-sm border-0 border-b border-default-200 rounded-none px-0 shadow-none">
                      <Select.Value placeholder="Select mode" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Online" textValue="Online">Online</ListBox.Item>
                        <ListBox.Item id="Offline" textValue="Offline">Offline</ListBox.Item>
                        <ListBox.Item id="Both" textValue="Both">Both</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
              </section>

              <hr className="border-t border-default-100" />

              {/* ── 03 SCHEDULE ── */}
              <section className="flex flex-col gap-6">
                <SectionHeading number={3} title="Schedule" />

                {/* Day chips */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] tracking-widest uppercase text-default-400">
                    Available days
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {DAYS.map((day) => {
                      const active = selectedDays.includes(day);
                      return (
                        <Button
                          key={day}
                          type="button"
                          size="sm"
                          variant={active ? "solid" : "bordered"}
                          className={`min-w-0 px-4 rounded-full text-xs tracking-wider transition-all ${
                            active
                              ? "bg-default-900 text-blue-600 border-default-900"
                              : "bg-transparent text-default-400 border-default-200 hover:border-default-500 hover:text-default-600"
                          }`}
                          onPress={() => toggleDay(day)}
                        >
                          {day}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Time / Date / Slots */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <TextField name="timeFrom" isRequired className="w-full">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      From
                    </Label>
                    <Input
                      type="time"
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>

                  <TextField name="timeTo" isRequired className="w-full">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      To
                    </Label>
                    <Input
                      type="time"
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>

                  <TextField name="sessionStartDate" isRequired className="w-full">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Start date
                    </Label>
                    <Input
                      type="date"
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>

                  <TextField name="totalSlots" isRequired className="w-full">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Total slots
                    </Label>
                    <Input
                      type="number"
                      placeholder="10"
                      min="1"
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>
                </div>
              </section>

              <hr className="border-t border-default-100" />

              {/* ── 04 FEES ── */}
              <section className="flex flex-col gap-6">
                <SectionHeading number={4} title="Fees" />

                <div className="max-w-xs">
                  <TextField name="hourlyFee" isRequired className="w-full">
                    <Label className="text-[10px] tracking-widest uppercase text-default-400">
                      Hourly fee (BDT)
                    </Label>
                    <Input
                      type="number"
                      placeholder="e.g. 600"
                      min="0"
                      variant="underlined"
                      className="text-sm"
                    />
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>
                </div>
              </section>

              <hr className="border-t border-default-100" />

              {/* ── SUBMIT ── */}
              <div className="flex flex-col items-center gap-3 pt-1">
                <Button
                  type="submit"
                  isDisabled={submitting}
                  isLoading={submitting}
                  className="w-full bg-default-900 text-default-50 tracking-[0.15em] uppercase text-xs h-12 rounded-xl font-normal"
                >
                  {!submitting && "Submit profile"}
                </Button>
                <p className="text-[10px] text-default-300 tracking-widest uppercase">
                  All fields are required
                </p>
              </div>

            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}