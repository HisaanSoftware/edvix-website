"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-2 lg:py-4">
      <div className="max-w-[1400px] mx-auto ">
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-[52px] font-display tracking-tight mb-3 leading-[0.95]">
                  Start Your AI-Powered
                  
                  Learning Journey Today
                </h2>

                <p className="text-xl text-muted-foreground mb-5 leading-relaxed max-w-xl">
                  Give your child a smarter, calmer, and more confident learning experience.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                  >
                    Schedule Free Counseling
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                  >
                    Message AI.ZA
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-4 font-mono">
                  Start with a free assessment and personalized roadmap.
                </p>
              </div>

              {/* Right image */}
              <div
                className="hidden lg:flex items-end justify-center w-[520px] h-[520px] -mr-10 bg-[length:120%_auto] bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/bridge2.png')" }}
                aria-hidden="true"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
