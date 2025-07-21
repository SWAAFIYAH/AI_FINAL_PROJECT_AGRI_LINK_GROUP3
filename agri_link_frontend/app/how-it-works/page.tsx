"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Leaf,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  UserPlus,
  MessageCircle,
  Handshake,
  Package,
  MapPin,
  Bell,
  Star,
  Shield,
  Truck,
} from "lucide-react"

export default function HowItWorksPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">AgriLink</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-gray-600 hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-green-600 font-medium">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/browse" className="text-gray-600 hover:text-green-600 transition-colors">
              Browse Listings
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-on-scroll opacity-0">
            How <span className="text-green-600">AgriLink</span> Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Our platform makes it simple to connect surplus food with those who need it. Here's your complete guide to
            getting started and making the most of AgriLink.
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0">
            Getting Started in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">1. Create Your Account</CardTitle>
                <CardDescription>Choose your role and set up your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Select farmer, buyer, or food bank role
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Add your location and contact details
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete profile verification
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">2. List or Browse</CardTitle>
                <CardDescription>Share produce or find what you need</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Create detailed listings with photos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Browse local produce offerings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Use filters to find exactly what you need
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">3. Connect & Exchange</CardTitle>
                <CardDescription>Communicate and coordinate pickup</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Message directly with other users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Arrange pickup or delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Complete the exchange and leave reviews
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Role-Specific Guides */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0">Role-Specific Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Farmer Guide */}
            <Card className="animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>For Farmers</CardTitle>
                    <CardDescription>Share your surplus produce</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Creating Listings</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Add high-quality photos of your produce</li>
                    <li>• Set competitive pricing or offer donations</li>
                    <li>• Include harvest and expiry dates</li>
                    <li>• Specify pickup options and availability</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Managing Orders</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Respond to buyer inquiries promptly</li>
                    <li>• Coordinate pickup times and locations</li>
                    <li>• Update listing status as needed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Buyer Guide */}
            <Card className="animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>For Buyers</CardTitle>
                    <CardDescription>Find fresh local produce</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Finding Produce</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Use location filters to find nearby farms</li>
                    <li>• Filter by organic, price range, and category</li>
                    <li>• Save favorites for quick access</li>
                    <li>• Set up alerts for specific items</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Making Purchases</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Contact farmers directly through messaging</li>
                    <li>• Negotiate quantities and pickup times</li>
                    <li>• Leave reviews after successful exchanges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Food Bank Guide */}
            <Card className="animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>For Food Banks</CardTitle>
                    <CardDescription>Receive donations efficiently</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Receiving Donations</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Browse donation listings in your area</li>
                    <li>• Contact farmers offering free produce</li>
                    <li>• Coordinate large-scale pickups</li>
                    <li>• Track donation history and impact</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Managing Distribution</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Update your capacity and needs</li>
                    <li>• Schedule regular pickup routes</li>
                    <li>• Report impact to donor farmers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location-Based</h3>
              <p className="text-gray-600 text-sm">Find produce and partners near you with smart location filtering</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Messaging</h3>
              <p className="text-gray-600 text-sm">Communicate directly with farmers, buyers, and food banks</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Alerts</h3>
              <p className="text-gray-600 text-sm">Get instant notifications for new matches and opportunities</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rating System</h3>
              <p className="text-gray-600 text-sm">Build trust through verified reviews and ratings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0">Safety & Trust</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-on-scroll opacity-0 max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Verified Profiles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• All users go through identity verification</li>
                    <li>• Farm and organization credentials are checked</li>
                    <li>• Verified badges indicate trusted users</li>
                    <li>• Report system for any issues</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll opacity-0 max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-blue-600" />
                    Safe Exchanges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Meet in public locations when possible</li>
                    <li>• Inspect produce before completing exchange</li>
                    <li>• Use in-app messaging for all communications</li>
                    <li>• Follow food safety guidelines</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How do I know if produce is still fresh?",
                  answer:
                    "All listings include harvest dates and best-before information. Farmers are required to provide accurate freshness details, and you can always message them for more information.",
                },
                {
                  question: "What if I can't pick up the produce on time?",
                  answer:
                    "Communication is key! Message the farmer as soon as possible to reschedule. Most farmers are flexible and understand that plans can change.",
                },
                {
                  question: "Are there any fees for using AgriLink?",
                  answer:
                    "AgriLink is free to use for all basic features. We may introduce premium features in the future, but connecting and exchanging food will always remain free.",
                },
                {
                  question: "How do I report a problem with a user or listing?",
                  answer:
                    "Each profile and listing has a report button. You can also contact our support team directly through the help center for any issues.",
                },
              ].map((faq, index) => (
                <Card key={index} className="animate-on-scroll opacity-0 max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-green-600 text-white">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 animate-on-scroll opacity-0">
            Join thousands of farmers, buyers, and food banks already using AgriLink
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0">
            <Link href="/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
                Create Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/browse">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3 bg-transparent"
              >
                Browse Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-green-400 mr-2" />
                <span className="text-2xl font-bold">AgriLink</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Connecting communities through food sharing. Reducing waste, feeding families, and supporting local
                farmers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/login-credentials" className="text-gray-400 hover:text-white transition-colors">
                    Test Accounts
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgriLink. Connecting communities through food sharing.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
