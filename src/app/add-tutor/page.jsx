"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";

const AddTutorPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const tutor = Object.fromEntries(formData.entries());

    const days = Array.from(
      document.querySelectorAll("input[name='availableDays']:checked")
    ).map((el) => el.value);

    tutor.availableDays = days;

    console.log(tutor);
  };

  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className="min-h-screen bg-sky-50/30 px-4 py-10">
      
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">
          Add Tutor
        </h1>

        <Card className="p-10 md:p-14 rounded-2xl border border-sky-100 shadow-sm">

          <form onSubmit={onSubmit} className="space-y-8">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Tutor Name */}
              <div className="md:col-span-2">
                <TextField name="name" isRequired>
                  <Label>Tutor Name</Label>
                  <Input placeholder="Enter tutor name" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL */}
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input placeholder="https://..." type="url" />
                <FieldError />
              </TextField>

              {/* Subject */}
              <TextField name="subject" isRequired>
                <Label>Subject</Label>
                <Input placeholder="Math, English..." />
                <FieldError />
              </TextField>

              {/* Category */}
              <div>
                <Select name="category" isRequired>
                  <Label>Category</Label>

                  <Select.Trigger className="rounded-xl">
                    <Select.Value placeholder="Select category" />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="School" textValue="School">School</ListBox.Item>
                      <ListBox.Item id="College" textValue="College">College</ListBox.Item>
                      <ListBox.Item id="University" textValue="University">University</ListBox.Item>
                      <ListBox.Item id="Admission" textValue="Admission">Admission</ListBox.Item>
                      <ListBox.Item id="Skill" textValue="Skill Development">Skill Development</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Experience */}
              <TextField name="experience" isRequired>
                <Label>Experience</Label>
                <Input placeholder="e.g. 3 years" />
              </TextField>

              {/* Institution */}
              <TextField name="institution" isRequired>
                <Label>Institution</Label>
                <Input placeholder="University / College" />
              </TextField>

              {/* Slots */}
              <TextField name="totalSlots" isRequired>
                <Label>Total Slots Per Day</Label>
                <Input type="number" placeholder="5" />
              </TextField>

              {/* Date */}
              <TextField name="sessionStartDate" isRequired>
                <Label>Session Start Date</Label>
                <Input type="date" />
              </TextField>

              {/* Time */}
              <TextField name="availableTime" isRequired>
                <Label>Available Time</Label>
                <Input placeholder="5PM - 9PM" />
              </TextField>
            </div>

            {/* DAYS (IMPROVED UI) */}
            <div>
              <Label>Available Days</Label>

              <div className="flex flex-wrap gap-3 mt-3">
                {days.map((day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      name="availableDays"
                      value={day}
                      className="hidden peer"
                    />

                    <span className="
                      px-4 py-2 text-sm rounded-full border cursor-pointer
                      border-sky-100 text-slate-600
                      peer-checked:bg-sky-600 peer-checked:text-white
                      peer-checked:border-sky-600
                      hover:border-sky-300 transition
                    ">
                      {day}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* BIO */}
            <div>
              <TextField name="bio" isRequired>
                <Label>Bio</Label>
                <TextArea
                  placeholder="Short description..."
                  className="min-h-[120px]"
                />
                <FieldError />
              </TextField>
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              className="w-full bg-sky-600 text-white rounded-xl py-3"
            >
              Add Tutor
            </Button>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddTutorPage;