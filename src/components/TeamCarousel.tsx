"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  image: string;
}

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

export default function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: false })
  );

  return (
    <div className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-6 py-4">
          {teamMembers.map((member, i) => (
            <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3 select-none">
              <div 
                className="group h-full rounded-2xl overflow-hidden bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-grab active:cursor-grabbing"
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}
              >
                {/* Gold top accent line + photo */}
                <div className="relative h-72 overflow-hidden shrink-0">
                  {/* Gold top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col gap-2 flex-1 border-t border-border">
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm font-body font-semibold text-accent">
                    {member.role}
                  </p>
                  {member.credentials && (
                    <span className="inline-flex self-start text-xs font-body font-medium text-muted-foreground bg-muted border border-border rounded-full px-2.5 py-1 mt-1">
                      {member.credentials}
                    </span>
                  )}
                  <p className="text-xs text-muted-foreground font-body leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation buttons centered below the slider for all devices */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <CarouselPrevious className="flex static translate-y-0 translate-x-0 bg-white text-navy hover:bg-gold hover:text-navy border-border hover:border-gold transition-colors mx-0" />
          <CarouselNext className="flex static translate-y-0 translate-x-0 bg-white text-navy hover:bg-gold hover:text-navy border-border hover:border-gold transition-colors mx-0" />
        </div>
      </Carousel>
    </div>
  );
}
