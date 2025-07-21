"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, Heart, ArrowRight, CheckCircle, Target, Globe, Shield, Lightbulb, HandHeart } from "lucide-react"

// Counter animation hook
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  const startCounting = () => setHasStarted(true)

  return { count, startCounting }
}

export default function AboutPage() {
  const impact1 = useCountUp(50000)
  const impact2 = useCountUp(1200)
  const impact3 = useCountUp(800)
  const impact4 = useCountUp(25000)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            // Start counting when the impact section comes into view
            if (entry.target.id === "impact-section") {
              setTimeout(() => {
                impact1.startCounting()
                impact2.startCounting()
                impact3.startCounting()
                impact4.startCounting()
              }, 300) // Small delay for better visual effect
            }
          }
        })
      },
      { threshold: 0.3 }, // Trigger when 30% of the element is visible
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [impact1, impact2, impact3, impact4])

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
            <Link href="/how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-green-600 font-medium">
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
            About <span className="text-green-600">AgriLink</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Bridging the gap between food surplus and food insecurity through innovative technology and community
            connections.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  To create a sustainable food ecosystem where surplus produce finds its way to families, restaurants,
                  and food banks instead of landfills, reducing waste while strengthening local communities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  A world where no fresh produce goes to waste, where every community has access to nutritious food, and
                  where technology serves as the bridge connecting abundance with need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 animate-on-scroll opacity-0">The Problem We're Solving</h2>
            <p className="text-xl text-gray-600 mb-12 animate-on-scroll opacity-0">
              Food waste is one of the most pressing issues of our time, with far-reaching environmental, economic, and
              social consequences.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center animate-on-scroll opacity-0">
                <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                <p className="text-gray-600">of food produced in the US is wasted annually</p>
              </div>
              <div className="text-center animate-on-scroll opacity-0">
                <div className="text-4xl font-bold text-red-600 mb-2">80B</div>
                <p className="text-gray-600">pounds of food thrown away each year</p>
              </div>
              <div className="text-center animate-on-scroll opacity-0">
                <div className="text-4xl font-bold text-red-600 mb-2">38M</div>
                <p className="text-gray-600">Americans face food insecurity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 animate-on-scroll opacity-0">Our Solution</h2>
            <p className="text-xl text-gray-600 animate-on-scroll opacity-0">
              AgriLink connects the dots in the food supply chain, creating a seamless platform where surplus meets
              need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>For Farmers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Turn surplus into revenue
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reduce waste disposal costs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Build community relationships
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Enhance sustainability practices
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>For Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Access to fresh, local produce
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Competitive pricing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Support local agriculture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Reduce environmental impact
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-on-scroll opacity-0 max-w-sm mx-auto">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>For Food Banks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Consistent food donations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Fresh, nutritious options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Efficient distribution planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Community impact tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section id="impact-section" className="py-16 px-6 bg-green-600 text-white animate-on-scroll opacity-0">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact So Far</h2>
            <p className="text-xl mb-12 opacity-90">
              Since launching AgriLink, we've made significant strides in reducing food waste and strengthening
              communities.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{impact1.count.toLocaleString()}+</div>
                <p className="opacity-90">Pounds of produce redirected</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{impact2.count.toLocaleString()}+</div>
                <p className="opacity-90">Farmers connected</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{impact3.count.toLocaleString()}+</div>
                <p className="opacity-90">Buyers and food banks served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{impact4.count.toLocaleString()}+</div>
                <p className="opacity-90">Meals provided to communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 animate-on-scroll opacity-0">Our Core Values</h2>
            <p className="text-xl text-gray-600 animate-on-scroll opacity-0">
              These principles guide everything we do at AgriLink, from product development to community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Continuously improving our platform with cutting-edge technology and user-centered design.
              </p>
            </div>

            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Building strong relationships between farmers, buyers, and food banks to create lasting impact.
              </p>
            </div>

            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-gray-600 text-sm">
                Maintaining transparency, security, and reliability in all our interactions and transactions.
              </p>
            </div>

            <div className="text-center animate-on-scroll opacity-0 max-w-sm mx-auto">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Promoting environmental responsibility through waste reduction and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 animate-on-scroll opacity-0">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600 max-w-4xl">
              <p className="mb-6 animate-on-scroll opacity-0">
                AgriLink was born from a simple observation: while millions of pounds of fresh produce go to waste on
                farms across the country, countless families struggle with food insecurity. Our founders, a team of
                agricultural experts, technologists, and community advocates, recognized that the missing piece wasn't
                more food or more need—it was the connection between them.
              </p>
              <p className="mb-6 animate-on-scroll opacity-0">
                Starting in 2023, we began developing a platform that would make it easy for farmers to list surplus
                produce, for buyers to find fresh local ingredients, and for food banks to access nutritious donations.
                What started as a local initiative has grown into a nationwide network of food sharing and community
                building.
              </p>
              <p className="animate-on-scroll opacity-0">
                Today, AgriLink continues to evolve, driven by feedback from our community and guided by our mission to
                create a more sustainable and equitable food system for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-green-600 text-white">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0">Join the AgriLink Community</h2>
          <p className="text-xl mb-8 opacity-90 animate-on-scroll opacity-0">
            Be part of the solution. Connect, share, and make a difference in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0">
            <Link href="/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
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
