'use client'
import { Button } from '@/components/ui/button'
import { Navbar } from '../components/joseph/navbar'
import { Shield, AlertTriangle, Users, TrendingUp } from 'lucide-react'

import Image from 'next/image'
import FeaturedCrime from '@/components/faysal/featuredCrime'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Track and Report Criminal Activities in Your Area
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
              Report, verify, and track criminal activities in your area.
              Together, we can make our communities safer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="/">Report a Crime</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="/">Explore Reports</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <FeaturedCrime />

        {/* Features Section */}
        <section className="py-12 sm:py-20 bg-muted ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 bg-background rounded-lg shadow-sm hover:cursor-pointer hover:scale-110 transition-all duration-700 ease">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Verified Reports</h3>
                <p className="text-muted-foreground">
                  Community-verified crime reports with evidence and proof-based
                  verification system.
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm hover:cursor-pointer hover:scale-110 transition-all duration-700 ease">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
                <p className="text-muted-foreground">
                  Stay informed about criminal activities in your area with
                  real-time notifications.
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm sm:col-span-2 lg:col-span-1 hover:cursor-pointer hover:scale-110 transition-all duration-700 ease">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  Engage with your community through verified comments and
                  collaborative verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-muted rounded-lg hover:cursor-pointer hover:scale-110 transition-all duration-700 ease">
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  1,234+
                </div>
                <div className="text-muted-foreground">Verified Reports</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg hover:cursor-pointer hover:scale-110 transition-all duration-700 ease">
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  5,678+
                </div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg hover:cursor-pointer hover:scale-110 transition-all duration-700 ease">
                <div className="text-3xl sm:text-4xl font-bold mb-2">89%</div>
                <div className="text-muted-foreground">Verification Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/how-it-works"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/guidelines"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 CrimeWatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
