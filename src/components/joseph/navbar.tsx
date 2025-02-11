"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">CrimeWatch</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-20"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <>
              <Button variant="ghost" asChild>
                <Link href="/report">Report Crime</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/profile">Profile</Link>
              </Button>
              <Button variant="outline">Logout</Button>
            </>

            {/* <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </> */}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-background md:hidden">
          <div className="pt-20 pb-6 px-4">
            <div className="flex flex-col space-y-4">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/report">Report Crime</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/profile">Profile</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
