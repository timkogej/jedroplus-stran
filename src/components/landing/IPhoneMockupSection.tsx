"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function IPhoneMockupSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Direct transforms — no useSpring so there's zero artificial lag
  const phoneScale = useTransform(scrollYProgress, [0.05, 0.35], [0.82, 1]);
  const phoneY     = useTransform(scrollYProgress, [0.05, 0.35, 0.75, 1], [70, 0, 0, -60]);

  const screenOpacity = useTransform(scrollYProgress, [0.2, 0.38], [0, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.28, 0.48], [0, 1]);
  const textY       = useTransform(scrollYProgress, [0.28, 0.48], [40, 0]);

  const card1Opacity = useTransform(scrollYProgress, [0.32, 0.50], [0, 1]);
  const card1Y       = useTransform(scrollYProgress, [0.32, 0.50], [24, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.37, 0.54], [0, 1]);
  const card2Y       = useTransform(scrollYProgress, [0.37, 0.54], [24, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.42, 0.58], [0, 1]);
  const card3Y       = useTransform(scrollYProgress, [0.42, 0.58], [24, 0]);

  const appointments = [
    { time: "09:00", name: "Ana N.",  service: "Masaža",    color: "#5B4FE9" },
    { time: "10:30", name: "Maja H.", service: "Striženje", color: "#3B82F6" },
    { time: "12:00", name: "Jan K.",  service: "Barvanje",  color: "#4ECDC4" },
    { time: "14:00", name: "Petra V.", service: "Nohti",   color: "#a855f7" },
  ];

  const calendarDays = [24, 25, 26, 27, 28, 1, 2];
  const dayLabels    = ["P", "T", "S", "Č", "P", "S", "N"];

  const featureCards = [
    {
      yMV: card1Y, opMV: card1Opacity,
      gradient: "from-primary to-blue-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
      title: "Vse na enem mestu",
      desc:  "Termini, stranke in opomniki v enem sistemu",
    },
    {
      yMV: card2Y, opMV: card2Opacity,
      gradient: "from-blue-500 to-secondary",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
      title: "Hitro upravljanje",
      desc:  "Dodajte ali spremenite termine v sekundi",
    },
    {
      yMV: card3Y, opMV: card3Opacity,
      gradient: "from-secondary to-primary",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
      title: "Analitika v živo",
      desc:  "Spremljajte uspešnost v realnem času",
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-[260vh]" style={{ contain: "none" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">

        {/* Static background glow — no animation, just radial gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #5B4FE9 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — Text & feature cards */}
            <motion.div
              className="text-center lg:text-left"
              style={{ opacity: textOpacity, y: textY }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-secondary text-sm font-medium mb-6">
                Dostopno na spletu
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Podjetje v{" "}
                <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
                  vašem žepu
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-lg">
                Upravljajte termine, stranke in opomnike kadarkoli in kjerkoli.
                Jedro+ vam omogoča popoln nadzor nad vašim poslovanjem.
              </p>

              <div className="space-y-4">
                {featureCards.map((card, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    style={{ opacity: card.opMV, y: card.yMV }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {card.icon}
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{card.title}</h4>
                      <p className="text-sm text-gray-400">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — iPhone mockup */}
            <div className="relative flex items-center justify-center">
              {/* Glow behind phone — scales with phone */}
              <motion.div
                className="absolute w-[340px] h-[340px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(91,79,233,0.28) 0%, transparent 70%)",
                  scale: phoneScale,
                }}
              />

              {/* Phone */}
              <motion.div
                className="relative z-10"
                style={{ scale: phoneScale, y: phoneY }}
              >
                <div className="relative w-[280px] md:w-[300px] h-[570px] md:h-[615px]">
                  {/* Outer bezel */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 rounded-[48px] shadow-2xl shadow-black/60">
                    <div className="absolute inset-[3px] bg-black rounded-[45px]">
                      <div className="absolute inset-[8px] bg-gray-900 rounded-[38px] overflow-hidden">
                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[96px] h-[30px] bg-black rounded-full z-20" />

                        {/* Screen content fades in */}
                        <motion.div className="absolute inset-0" style={{ opacity: screenOpacity }}>
                          <div className="p-4 pt-12 h-full flex flex-col">
                            {/* Status bar */}
                            <div className="flex justify-between items-center text-white text-xs mb-4 px-1">
                              <span className="font-semibold">9:41</span>
                              <div className="w-4 h-2 rounded-sm border border-white/60 flex">
                                <div className="w-3/4 bg-white/80 rounded-sm m-px" />
                              </div>
                            </div>

                            {/* App header — text only, no icon */}
                            <div className="text-center mb-4">
                              <h3 className="text-lg font-bold bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
                                Jedro+
                              </h3>
                              <p className="text-gray-400 text-xs">Današnji termini</p>
                            </div>

                            {/* Mini calendar */}
                            <div className="bg-white/10 rounded-xl p-3 mb-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-xs font-semibold">Februar 2026</span>
                                <span className="text-secondary text-xs">5 terminov</span>
                              </div>
                              <div className="grid grid-cols-7 gap-1 text-center">
                                {dayLabels.map((d, i) => (
                                  <span key={i} className="text-gray-400 text-[10px]">{d}</span>
                                ))}
                                {calendarDays.map((d, i) => (
                                  <span
                                    key={i}
                                    className={`py-0.5 rounded text-[11px] ${
                                      d === 27 ? "bg-primary text-white font-semibold" : "text-gray-300"
                                    }`}
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Appointment list */}
                            <div className="space-y-2 flex-1">
                              {appointments.map((apt, i) => (
                                <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                                  <div
                                    className="w-1 h-8 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: apt.color }}
                                  />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-white text-xs font-semibold truncate">{apt.name}</p>
                                    <p className="text-gray-400 text-[10px]">{apt.service}</p>
                                  </div>
                                  <span className="text-secondary text-[10px] font-medium">{apt.time}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Physical side buttons */}
                  <div className="absolute -left-[2px] top-[110px] w-[3px] h-[28px] bg-gray-600 rounded-l" />
                  <div className="absolute -left-[2px] top-[155px] w-[3px] h-[56px] bg-gray-600 rounded-l" />
                  <div className="absolute -left-[2px] top-[220px] w-[3px] h-[56px] bg-gray-600 rounded-l" />
                  <div className="absolute -right-[2px] top-[170px] w-[3px] h-[76px] bg-gray-600 rounded-r" />
                </div>

                {/* Floating badges — CSS keyframe animation (runs on compositor, zero JS per frame) */}
                <div className="badge-float absolute -top-6 -right-8 w-14 h-14 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="badge-float-alt absolute -bottom-4 -left-10 w-12 h-12 bg-gradient-to-br from-blue-500 to-secondary rounded-xl flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
