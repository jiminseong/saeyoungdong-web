"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Gallery() {
  const t = useTranslations("HomePage");
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  // 10 items as before
  const roomItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const updateConstraints = () => {
      if (scrollRef.current && containerRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        setConstraints({
          left: -(scrollWidth - containerWidth + 48), // 48 is for padding
          right: 0,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <section className="bg-warm-beige py-24 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif text-soft-brown mb-4 tracking-tight">
                {t("gallery.title")}
              </h2>
              <p className="text-light-brown font-sans break-keep max-w-2xl text-[15px] leading-relaxed whitespace-pre-line">
                {t("gallery.description")}
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-light-brown/40 text-[10px] font-sans tracking-[0.2em] uppercase">
                {t("gallery.dragToExplore")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Draggable Area */}
      <div
        ref={containerRef}
        className="w-full relative cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <motion.div
          ref={scrollRef}
          className="flex gap-6 px-6"
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          dragTransition={{ power: 0.2, timeConstant: 200 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {roomItems.map((num, i) => {
            const roomNum = (i % 5) + 1;
            return (
              <div
                key={`gallery-item-${num}`}
                className="min-w-[80vw] md:min-w-[450px] aspect-video bg-ivory rounded-[2rem] overflow-hidden shadow-photo border border-soft-brown/5 flex-shrink-0 relative group/item select-none"
              >
                {/* Simplified Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-orange-primary text-white text-xs md:text-sm font-bold px-5 py-2 rounded-full shadow-photo-lg backdrop-blur-sm bg-orange-primary/90">
                    {t("gallery.roomBadge", { num: roomNum })}
                  </div>
                </div>

                {/* Placeholder Image Content */}
                <div className="w-full h-full bg-orange-light/30 flex flex-col items-center justify-center text-orange-primary/20 font-serif transition-transform duration-1000 group-hover/item:scale-105">
                  <div className="w-16 h-px bg-orange-primary/10 mb-4" />
                  <span className="text-4xl md:text-5xl opacity-10 mb-2">Room {roomNum}</span>
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase opacity-30">
                    Sae Young Dong
                  </span>
                  <div className="w-16 h-px bg-orange-primary/10 mt-4" />
                </div>

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-light/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile Hint */}
      <div className="mt-8 flex justify-center md:hidden">
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={`dot-${num}`}
              className={`w-1.5 h-1.5 rounded-full ${num === 1 ? "bg-orange-primary" : "bg-orange-primary/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
