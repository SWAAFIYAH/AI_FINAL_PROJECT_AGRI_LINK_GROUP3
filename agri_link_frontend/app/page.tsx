"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, Heart, ArrowRight, CheckCircle, Globe, MessageCircle, ChevronUp } from "lucide-react"

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">AgriLink</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-gray-600 hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/browse" className="text-gray-600 hover:text-green-600 transition-colors">
              Browse Listings
            </Link>
          </nav>
          <div className="flex items-center space-x-3 animate-fade-in-right">
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
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in-up">
            Connect Surplus Food with
            <span className="text-green-600 block">Those Who Need It</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            Join our community platform that connects farmers with surplus produce to buyers and food banks, reducing
            waste while feeding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-400">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3 hover:scale-105 transition-transform"
              >
                Start Sharing Food <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white border-green-600 text-green-600 hover:bg-green-50 hover:scale-105 transition-transform"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 opacity-0 animate-fade-in-up">About AgriLink</h2>
            <p className="text-xl text-gray-600 mb-8 opacity-0 animate-fade-in-up animate-delay-200">
              We're on a mission to reduce food waste while strengthening local communities. AgriLink bridges the gap
              between surplus produce and those who need it most.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="opacity-0 animate-fade-in-left animate-delay-400">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To create a sustainable food ecosystem where surplus produce finds its way to families, restaurants,
                  and food banks instead of landfills.
                </p>
              </div>
              <div className="opacity-0 animate-fade-in-right animate-delay-600">
                <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                <p className="text-gray-600">
                  Since launching, we've helped redirect over 50,000 pounds of fresh produce, supporting local farmers
                  and feeding communities nationwide.
                </p>
              </div>
            </div>
            <div className="mt-8 opacity-0 animate-fade-in-up animate-delay-600">
              <Link href="/about">
                <Button variant="outline" className="bg-transparent hover:bg-green-50 border-green-600 text-green-600">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-fade-in-up">Choose Your Role</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-green-200 opacity-0 animate-fade-in-up animate-delay-200 hover:scale-105 max-w-sm mx-auto">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">I'm a Farmer</CardTitle>
                <CardDescription>Share your surplus produce with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    List surplus produce easily
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Set your own prices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reduce food waste
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Connect with local buyers
                  </li>
                </ul>
                <Link href="/register?role=farmer" className="block mt-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Join as Farmer</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-200 opacity-0 animate-fade-in-up animate-delay-400 hover:scale-105 max-w-sm mx-auto">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">I'm a Buyer</CardTitle>
                <CardDescription>Find fresh, local produce at great prices</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Access fresh local produce
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Support local farmers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Get competitive prices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Request specific items
                  </li>
                </ul>
                <Link href="/register?role=buyer" className="block mt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Join as Buyer</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-purple-200 opacity-0 animate-fade-in-up animate-delay-600 hover:scale-105 max-w-sm mx-auto">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">I'm a Food Bank</CardTitle>
                <CardDescription>Receive donations to feed your community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Receive food donations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Manage distribution efficiently
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Track donation history
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Help feed communities
                  </li>
                </ul>
                <Link href="/register?role=foodbank" className="block mt-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Join as Food Bank</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-fade-in-up">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center opacity-0 animate-fade-in-up animate-delay-200 max-w-sm mx-auto">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sign Up & Create Profile</h3>
              <p className="text-gray-600">
                Choose your role as a farmer, buyer, or food bank and set up your profile with location and preferences.
              </p>
            </div>
            <div className="text-center opacity-0 animate-fade-in-up animate-delay-400 max-w-sm mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">List or Request Produce</h3>
              <p className="text-gray-600">
                Farmers list surplus produce, while buyers and food banks can browse listings or post specific requests.
              </p>
            </div>
            <div className="text-center opacity-0 animate-fade-in-up animate-delay-600 max-w-sm mx-auto">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect & Exchange</h3>
              <p className="text-gray-600">
                Get matched with relevant partners, communicate directly, and coordinate pickup or delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-fade-in-up">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center opacity-0 animate-fade-in-up animate-delay-200 max-w-sm mx-auto">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location-Based Matching</h3>
              <p className="text-gray-600">Find produce and partners near you with smart location filtering</p>
            </div>
            <div className="text-center opacity-0 animate-fade-in-up animate-delay-400 max-w-sm mx-auto">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">In-App Messaging</h3>
              <p className="text-gray-600">Communicate directly with farmers, buyers, and food banks</p>
            </div>
            <div className="text-center opacity-0 animate-fade-in-up animate-delay-600 max-w-sm mx-auto">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Notifications</h3>
              <p className="text-gray-600">Get instant alerts for new matches and opportunities</p>
            </div>
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
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
              </div>
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
            <p>&copy; 2024 AgriLink. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
