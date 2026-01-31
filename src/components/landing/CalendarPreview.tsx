'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MessageSquare } from 'lucide-react';

interface Appointment {
  id: number;
  day: number;
  startTime: string;
  endTime: string;
  clientName: string;
  serviceDescription: string;
  gradient: 'warm' | 'cool' | 'vibrant';
  duration: number;
}

interface Day {
  name: string;
  number: number;
  date: string;
}

// Only weekdays (Mon-Fri)
const days: Day[] = [
  { name: 'PON', number: 2, date: '2026-02-02' },
  { name: 'TOR', number: 3, date: '2026-02-03' },
  { name: 'SRE', number: 4, date: '2026-02-04' },
  { name: 'ČET', number: 5, date: '2026-02-05' },
  { name: 'PET', number: 6, date: '2026-02-06' },
];

// Time slots from 09:00 to 16:00
const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

function getGradientClass(gradient: 'warm' | 'cool' | 'vibrant'): string {
  const gradients = {
    warm: 'bg-gradient-to-br from-orange-400 via-pink-400 to-pink-500',
    cool: 'bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500',
    vibrant: 'bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500'
  };
  return gradients[gradient];
}

function getServiceName(gradient: 'warm' | 'cool' | 'vibrant'): string {
  const services = {
    warm: 'Masaža',
    cool: 'Striženje',
    vibrant: 'Nohti'
  };
  return services[gradient];
}

const appointments: Appointment[] = [
  {
    id: 1,
    day: 2,
    startTime: '09:00',
    endTime: '10:30',
    clientName: 'Ana Novak',
    serviceDescription: 'Masaža',
    gradient: 'warm',
    duration: 90
  },
  {
    id: 2,
    day: 2,
    startTime: '11:00',
    endTime: '12:30',
    clientName: 'Maja Horvat',
    serviceDescription: 'Striženje',
    gradient: 'cool',
    duration: 90
  },
  {
    id: 3,
    day: 3,
    startTime: '09:00',
    endTime: '10:30',
    clientName: 'Jan Kovač',
    serviceDescription: 'Striženje',
    gradient: 'cool',
    duration: 90
  },
  {
    id: 4,
    day: 3,
    startTime: '13:00',
    endTime: '14:30',
    clientName: 'Petra Vidmar',
    serviceDescription: 'Nohti',
    gradient: 'vibrant',
    duration: 90
  },
  {
    id: 5,
    day: 4,
    startTime: '10:00',
    endTime: '11:30',
    clientName: 'Žan Golob',
    serviceDescription: 'Masaža',
    gradient: 'warm',
    duration: 90
  },
  {
    id: 6,
    day: 4,
    startTime: '12:00',
    endTime: '13:30',
    clientName: 'Aleksandra M.',
    serviceDescription: 'Striženje',
    gradient: 'cool',
    duration: 90
  },
  {
    id: 7,
    day: 5,
    startTime: '09:00',
    endTime: '10:30',
    clientName: 'Marko Kranjc',
    serviceDescription: 'Nohti',
    gradient: 'vibrant',
    duration: 90
  },
  {
    id: 8,
    day: 5,
    startTime: '11:00',
    endTime: '12:30',
    clientName: 'Darja K.',
    serviceDescription: 'Masaža',
    gradient: 'warm',
    duration: 90
  },
  {
    id: 9,
    day: 6,
    startTime: '09:30',
    endTime: '11:00',
    clientName: 'Blaž Kovačič',
    serviceDescription: 'Striženje',
    gradient: 'cool',
    duration: 90
  },
  {
    id: 10,
    day: 6,
    startTime: '13:00',
    endTime: '14:30',
    clientName: 'Nina Zupan',
    serviceDescription: 'Nohti',
    gradient: 'vibrant',
    duration: 90
  },
];

const HOUR_HEIGHT = 48; // pixels per hour
const BASE_HOUR = 9;

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function calculateTop(startTime: string): number {
  const [hours, minutes] = startTime.split(':').map(Number);
  const hoursPassed = hours - BASE_HOUR;
  const minutesPassed = minutes / 60;
  return (hoursPassed + minutesPassed) * HOUR_HEIGHT;
}

function calculateHeight(duration: number): number {
  return (duration / 60) * HOUR_HEIGHT;
}

// Check if two appointments overlap
function appointmentsOverlap(a: Appointment, b: Appointment): boolean {
  const aStart = timeToMinutes(a.startTime);
  const aEnd = timeToMinutes(a.endTime);
  const bStart = timeToMinutes(b.startTime);
  const bEnd = timeToMinutes(b.endTime);
  return aStart < bEnd && bStart < aEnd;
}

// Calculate column positions for overlapping appointments
function calculateAppointmentColumns(dayAppointments: Appointment[]): Map<number, { column: number; totalColumns: number }> {
  const positions = new Map<number, { column: number; totalColumns: number }>();

  if (dayAppointments.length === 0) return positions;

  // Sort by start time
  const sorted = [...dayAppointments].sort((a, b) =>
    timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
  );

  // Find overlapping groups
  const groups: Appointment[][] = [];
  let currentGroup: Appointment[] = [];

  for (const apt of sorted) {
    if (currentGroup.length === 0) {
      currentGroup.push(apt);
    } else {
      const overlapsWithGroup = currentGroup.some(other => appointmentsOverlap(apt, other));
      if (overlapsWithGroup) {
        currentGroup.push(apt);
      } else {
        groups.push(currentGroup);
        currentGroup = [apt];
      }
    }
  }
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  // Assign columns within each group
  for (const group of groups) {
    const columns: Appointment[][] = [];

    for (const apt of group) {
      let placed = false;
      for (let col = 0; col < columns.length; col++) {
        const canPlace = !columns[col].some(other => appointmentsOverlap(apt, other));
        if (canPlace) {
          columns[col].push(apt);
          positions.set(apt.id, { column: col, totalColumns: 0 });
          placed = true;
          break;
        }
      }
      if (!placed) {
        columns.push([apt]);
        positions.set(apt.id, { column: columns.length - 1, totalColumns: 0 });
      }
    }

    // Update total columns for this group
    for (const apt of group) {
      const pos = positions.get(apt.id)!;
      pos.totalColumns = columns.length;
    }
  }

  return positions;
}

interface AppointmentCardProps {
  appointment: Appointment;
  delay: number;
  column: number;
  totalColumns: number;
}

function AppointmentCard({ appointment, delay, column, totalColumns }: AppointmentCardProps) {
  const height = calculateHeight(appointment.duration);

  // Calculate width and left position for side-by-side rendering
  const widthPercent = totalColumns > 1 ? (100 / totalColumns) - 2 : 100;
  const leftPercent = column * (100 / totalColumns);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`
        absolute
        ${getGradientClass(appointment.gradient)}
        rounded-lg p-2
        text-white
        shadow-lg
        hover:shadow-xl
        hover:scale-[1.02]
        transition-all duration-200
        cursor-pointer
        overflow-hidden
        z-10
      `}
      style={{
        top: `${calculateTop(appointment.startTime)}px`,
        height: `${Math.max(height, 32)}px`,
        left: `${leftPercent + 1}%`,
        width: `${widthPercent - 1}%`,
      }}
    >
      <div className="text-[10px] font-semibold bg-white/20 px-1.5 py-0.5 rounded w-fit mb-1">
        {appointment.startTime}
      </div>
      <div className="font-bold text-[11px] truncate">
        {appointment.clientName}
      </div>
      <div className="text-[9px] opacity-90 truncate mt-0.5">
        {getServiceName(appointment.gradient)}
      </div>
    </motion.div>
  );
}

function DayColumn({ day, dayAppointments }: { day: Day; dayAppointments: Appointment[] }) {
  const columnPositions = calculateAppointmentColumns(dayAppointments);

  return (
    <div className="relative flex-1 min-w-0">
      {/* Day Header */}
      <div className="h-10 border-b border-r border-gray-200/50 flex flex-col items-center justify-center bg-white/50">
        <div className="text-[10px] text-gray-500 font-medium uppercase leading-none">
          {day.name}
        </div>
        <div className="text-base font-bold text-gray-900 leading-none">
          {day.number}
        </div>
      </div>

      {/* Time Slots */}
      <div className="relative border-r border-gray-200/50">
        {timeSlots.map((time) => (
          <div
            key={time}
            className="border-b border-gray-200/50"
            style={{ height: `${HOUR_HEIGHT}px` }}
          />
        ))}

        {/* Appointments */}
        {dayAppointments.map((appointment, index) => {
          const pos = columnPositions.get(appointment.id) || { column: 0, totalColumns: 1 };
          return (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              delay={0.2 + (index * 0.08)}
              column={pos.column}
              totalColumns={pos.totalColumns}
            />
          );
        })}
      </div>
    </div>
  );
}

function SMSPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="absolute -right-4 -bottom-4 sm:right-2 sm:bottom-2 lg:-right-8 lg:-bottom-8 w-56 sm:w-64 bg-white rounded-2xl shadow-2xl shadow-purple-500/20 border border-gray-100 p-3 z-20"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-900">Salon Lepote</div>
          <div className="text-[10px] text-gray-500">SMS sporočilo</div>
        </div>
      </div>

      {/* Message */}
      <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-xl p-3">
        <p className="text-[11px] text-gray-700 leading-relaxed">
          Pozdravljeni Ana! Hvala za zaupanje in uspešno opravljen termin beljenja zob.
          <span className="block mt-1.5">
            Nasvet: Izogibajte se temni hrani in pijači (kava, rdeče vino) naslednjih 48 ur za najboljše rezultate.
          </span>
          <span className="block mt-2 font-semibold text-purple-700">
            – Salon Lepote
          </span>
        </p>
      </div>

      {/* Timestamp */}
      <div className="flex items-center justify-end mt-2">
        <span className="text-[9px] text-gray-400">Danes, 14:32</span>
      </div>
    </motion.div>
  );
}

export default function CalendarPreview() {
  const visibleAppointments = appointments.filter(apt => apt.day >= 2 && apt.day <= 6);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative w-full max-w-lg
          bg-gradient-to-br from-white/90 via-white/80 to-white/70
          border border-white/40
          backdrop-blur-xl
          rounded-2xl
          shadow-2xl shadow-purple-500/10
          overflow-hidden
          p-4
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          {/* Left: Navigation & Date */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <button className="p-1.5 hover:bg-white/50 rounded transition-colors">
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button className="p-1.5 hover:bg-white/50 rounded transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            <h2 className="text-sm font-bold text-gray-900">
              2. - 6. Feb 2026
            </h2>
          </div>

          {/* Right: Appointments Count */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-purple-100 rounded-md">
            <Calendar className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-semibold text-purple-900">
              {visibleAppointments.length} terminov
            </span>
          </div>
        </div>

        {/* View Toggle - simplified */}
        <div className="flex items-center gap-0.5 bg-gray-100/50 rounded-lg p-0.5 mb-4 w-fit mx-auto">
          <button className="px-3 py-1.5 text-xs font-medium text-gray-500 rounded transition-colors">
            Dan
          </button>
          <button className="px-3 py-1.5 text-xs font-medium bg-white text-purple-600 rounded shadow-sm">
            Teden
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-gray-500 rounded transition-colors">
            Mesec
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="overflow-hidden">
          <div className="flex border-l border-t border-gray-200/50 relative">
            {/* Time Column */}
            <div className="border-r border-gray-200/50 bg-gray-50/30 w-11 flex-shrink-0">
              <div className="h-10 border-b border-gray-200/50" />
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className="border-b border-gray-200/50 px-1.5 text-[10px] text-gray-400 font-medium flex items-start pt-1"
                  style={{ height: `${HOUR_HEIGHT}px` }}
                >
                  {time}
                </div>
              ))}
            </div>

            {/* Day Columns */}
            {days.map((day) => {
              const dayAppointments = visibleAppointments.filter(
                (apt) => apt.day === day.number
              );
              return (
                <DayColumn
                  key={day.date}
                  day={day}
                  dayAppointments={dayAppointments}
                />
              );
            })}

            {/* Current Time Indicator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute left-0 right-0 h-0.5 bg-red-500 z-30 pointer-events-none"
              style={{ top: `${calculateTop('11:30') + 40}px` }}
            >
              <div className="absolute left-0 w-2.5 h-2.5 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SMS Preview - positioned outside calendar */}
      <SMSPreview />
    </div>
  );
}
