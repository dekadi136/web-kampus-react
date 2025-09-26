import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  User,
  MapPin,
} from "lucide-react";

type Course = {
  name: string;
  time: string;
  lecturer: string;
  room: string;
  sks: number;
};

const courses: Course[] = [
  {
    name: "Machine Learning (MLM1)",
    time: "18:00 - 20:00 WITA",
    lecturer: "IDA BAGUS KRESNA SUDIAMTIKA, S.KOM., M.T.",
    room: "Ruang 05",
    sks: 3,
  },
  {
    name: "Basis Data (BD1)",
    time: "14:00 - 16:00 WITA",
    lecturer: "I NYOMAN GEDE SUKARSA, S.KOM., M.KOM.",
    room: "Ruang 07",
    sks: 3,
  },
  {
    name: "Pemrograman Web (PW1)",
    time: "08:00 - 10:00 WITA",
    lecturer: "MADE ARI PUTRA, S.KOM., M.Cs.",
    room: "Ruang 03",
    sks: 4,
  },
];

export default function CourseCard() {
  const [index, setIndex] = useState(0);

  const nextCourse = () => {
    setIndex((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const course = courses[index];

  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-xl p-6">
      {/* Mata Kuliah */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {course.name}
      </h2>

      <div className="space-y-2 text-gray-700 text-sm">
        <p className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          {course.time}
        </p>
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-500" />
          {course.lecturer}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          {course.room}
        </p>
        <p className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gray-500" />
          {course.sks} SKS
        </p>
      </div>

      {/* Navigasi */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevCourse}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <span className="text-gray-600 text-sm">
          {index + 1} / {courses.length}
        </span>
        <button
          onClick={nextCourse}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
