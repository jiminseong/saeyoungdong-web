"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const t = useTranslations("HomePage");
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isDraggable, setIsDraggable] = useState(false);

  const roomImages = ["/images/room/1.jpeg", "/images/room/2.jpeg", "/images/room/3.jpeg"];

  useEffect(() => {
    const updateConstraints = () => {
      if (scrollRef.current && containerRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const canDrag = scrollWidth > containerWidth;

        setIsDraggable(canDrag);
        setConstraints({
          left: canDrag ? Math.min(0, -(scrollWidth - containerWidth + 48)) : 0,
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
            {isDraggable && (
              <div className="hidden md:block">
                <span className="text-light-brown/40 text-[10px] font-sans tracking-[0.2em] uppercase">
                  {t("gallery.dragToExplore")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Draggable Area */}
      <div
        ref={containerRef}
        className={`w-full relative touch-pan-y ${
          isDraggable ? "cursor-grab active:cursor-grabbing" : "cursor-default"
        }`}
      >
        <motion.div
          ref={scrollRef}
          className={`flex gap-6 px-6 ${isDraggable ? "justify-start" : "justify-center"}`}
          drag={isDraggable ? "x" : false}
          dragConstraints={constraints}
          dragElastic={0.1}
          dragTransition={{ power: 0.2, timeConstant: 200 }}
          whileTap={isDraggable ? { cursor: "grabbing" } : undefined}
        >
          {roomImages.map((src, index) => (
            <div
              key={`gallery-item-${src}`}
              className="min-w-[80vw] md:min-w-[450px] aspect-video bg-ivory rounded-[2rem] overflow-hidden shadow-photo border border-soft-brown/5 flex-shrink-0 relative group/item select-none"
            >
              <Image
                src={src}
                alt={`${t("gallery.title")} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                sizes="(max-width: 768px) 80vw, 450px"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soft-brown/20 via-transparent to-transparent opacity-60" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Hint */}
      {isDraggable && (
        <div className="mt-8 flex justify-center md:hidden">
          <div className="flex gap-1.5">
            {roomImages.map((_, index) => (
              <div
                key={`dot-${index}`}
                className={`w-1.5 h-1.5 rounded-full ${index === 0 ? "bg-orange-primary" : "bg-orange-primary/20"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
