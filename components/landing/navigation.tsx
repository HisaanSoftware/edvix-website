"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Learning Network", href: "/learning-network" },
  { name: "About", href: "/about" },
  { name: "AIZA Tools", href: "/tools" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isFloating = isScrolled || isMobileMenuOpen;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500",
        isFloating ? "top-3 left-3 right-3" : "top-0 left-0 right-0"
      )}
    >
      <nav
        className={cn(
          "mx-auto transition-all duration-500",
          isFloating
            ? "max-w-[1220px] rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            : "max-w-[1400px] bg-transparent"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 px-5 lg:px-8",
            isScrolled ? "h-14" : "h-20"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Edvix logo"
              width={146}
              height={44}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-all duration-300",
                  isActive(link.href)
                    ? "bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="h-9 rounded-full bg-white px-5 text-xs text-black transition-all duration-300 hover:bg-white/90"
            >
              <Link href="/contact">Contact Team</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden rounded-full border border-white/20 p-2 transition-colors duration-300",
              isFloating ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-lg" onClick={closeMenu} aria-hidden="true" />
        <div
          className={cn(
            "relative ml-auto flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-black px-6 pb-8 pt-6 transition-transform duration-500",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center" onClick={closeMenu}>
              <Image src="/logo.png" alt="Edvix logo" width={120} height={36} className="h-10 w-auto" />
            </Link>
            <button
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-4 py-3 text-lg font-medium text-white transition-all duration-500",
                  isActive(link.href) ? "bg-white text-black" : "hover:bg-white/10"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div
            className={cn(
              "border-t border-white/10 pt-6 transition-all duration-500",
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
            style={{ transitionDelay: isMobileMenuOpen ? "250ms" : "0ms" }}
          >
            <Button asChild className="h-12 w-full rounded-full bg-white text-black hover:bg-white/90">
              <Link href="/contact" onClick={closeMenu}>
                Contact Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
