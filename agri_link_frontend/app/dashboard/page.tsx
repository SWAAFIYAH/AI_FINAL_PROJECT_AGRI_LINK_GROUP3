"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Plus, MapPin, Package, Users, Heart, MessageCircle, Star, TrendingUp, Leaf, Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New match found for Organic Tomatoes", read: false },
    { id: 2, message: "Message received from Green Valley Buyer", read: true },
    { id: 3, message: "Listing viewed: Fresh Carrots", read: false },
  ])
  const [showNotifications, setShowNotifications] = useState(false)
  const router = useRouter()

  const [currentUser, setCurrentUser] = useState({
    role: "farmer",
    name: "John Smith",
    avatar: "/placeholder-user.jpg",
    location: "Green Valley, Nairobi",
    rating: 4.8,
    totalListings: 24,
    totalMatches: 18,
  })

  // Add useEffect to load user data
  useEffect(() => {
    const userRole = localStorage.getItem("userRole") || "farmer"
    const userEmail = localStorage.getItem("userEmail") || ""

    // Update user data based on role
    const userData = {
      farmer: {
        role: "farmer",
        name: "John Smith",
        avatar: "/placeholder-user.jpg",
        location: "Green Valley, Nairobi",
        rating: 4.8,
        totalListings: 24,
        totalMatches: 18,
      },
      buyer: {
        role: "buyer",
        name: "Sarah Johnson",
        avatar: "/placeholder-user.jpg",
        location: "Downtown, Nairobi",
        rating: 4.6,
        totalListings: 8,
        totalMatches: 12,
      },
      foodbank: {
        role: "foodbank",
        name: "Community Food Bank",
        avatar: "/placeholder-user.jpg",
        location: "Central District, Nairobi",
        rating: 4.9,
        totalListings: 3,
        totalMatches: 25,
      },
    }

    setCurrentUser(userData[userRole] || userData.farmer)
  }, [])

  // Add logout handler
  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userEmail")
    window.location.href = "/login"
  }

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications)
  }

  const handleProfileClick = () => {
    router.push("/profile")
  }

  const getNewButtonText = () => {
    switch (currentUser.role) {
      case "farmer":
        return "New Listing"
      case "buyer":
        return "New Request"
      case "foodbank":
        return "New Request"
      default:
        return "New Listing"
    }
  }

  const getNewButtonLink = () => {
    switch (currentUser.role) {
      case "farmer":
        return "/create-listing"
      case "buyer":
        return "/create-request"
      case "foodbank":
        return "/create-request"
      default:
        return "/create-listing"
    }
  }

  const getDashboardContent = () => {
    switch (currentUser.role) {
      case "farmer":
        return {
          stats: [
            { label: "Active Listings", value: 12, icon: Package, color: "text-green-600" },
            { label: "New Messages", value: 8, icon: MessageCircle, color: "text-blue-600" },
            { label: "Total Matches", value: 18, icon: Heart, color: "text-purple-600" },
          ],
          listings: [
            {
              title: "Organic Tomatoes",
              quantity: "50 kg",
              price: "Ksh 350/kg",
              status: "active",
              views: 24,
              interested: 3,
              image: "/placeholder.svg?height=200&width=300",
              id: "1",
            },
            {
              title: "Fresh Carrots",
              quantity: "30 kg",
              price: "Ksh 200/kg",
              status: "matched",
              views: 18,
              interested: 5,
              image: "/placeholder.svg?height=200&width=300",
              id: "2",
            },
          ],
        }
      case "buyer":
        return {
          stats: [
            { label: "Active Requests", value: 5, icon: Search, color: "text-blue-600" },
            { label: "New Matches", value: 3, icon: Heart, color: "text-purple-600" },
            { label: "Saved Listings", value: 12, icon: Package, color: "text-green-600" },
          ],
          listings: [
            {
              title: "Looking for Organic Apples",
              quantity: "100 kg",
              price: "Up to Ksh 200/kg",
              status: "active",
              views: 15,
              interested: 4,
              image: "/placeholder.svg?height=200&width=300",
              id: "1",
            },
            {
              title: "Need Fresh Lettuce",
              quantity: "25 kg",
              price: "Up to Ksh 150/kg",
              status: "matched",
              views: 8,
              interested: 2,
              image: "/placeholder.svg?height=200&width=300",
              id: "2",
            },
          ],
        }
      case "foodbank":
        return {
          stats: [
            { label: "Active Requests", value: 3, icon: Search, color: "text-purple-600" },
            { label: "Donations Received", value: 25, icon: Heart, color: "text-green-600" },
            { label: "Families Served", value: 150, icon: Users, color: "text-blue-600" },
          ],
          listings: [
            {
              title: "Seeking Vegetable Donations",
              quantity: "Any amount",
              price: "Free",
              status: "active",
              views: 32,
              interested: 8,
              image: "/placeholder.svg?height=200&width=300",
              id: "1",
            },
            {
              title: "Need Fruit Donations",
              quantity: "Any amount",
              price: "Free",
              status: "matched",
              views: 28,
              interested: 6,
              image: "/placeholder.svg?height=200&width=300",
              id: "2",
            },
          ],
        }
      default:
        return {
          stats: [],
          listings: [],
        }
    }
  }

  const dashboardContent = getDashboardContent()

  const getEditLink = (id: string) => {
    if (currentUser.role === "farmer") {
      return `/edit-listing/${id}`
    } else {
      return `/edit-request/${id}`
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-gray-900">AgriLink</span>
              </Link>
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search produce, locations..."
                  className="bg-transparent border-none outline-none text-sm w-64"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/browse" title="Browse">
                <Button variant="ghost" size="icon" className="hover:scale-105 transition-transform duration-200">
                  <Search className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/messages" title="Messages">
                <Button variant="ghost" size="icon" className="hover:scale-105 transition-transform duration-200">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={handleNotificationClick}
                title="Notifications"
              >
                <Bell className="h-5 w-5" />
                {notifications.filter((notification) => !notification.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.filter((notification) => !notification.read).length}
                  </span>
                )}
              </Button>
              <Avatar
                onClick={handleProfileClick}
                className="cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{currentUser.name}</CardTitle>
                <CardDescription className="flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {currentUser.location}
                </CardDescription>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{currentUser.rating}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Role</span>
                    <Badge variant="secondary" className="capitalize">
                      {currentUser.role}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      {currentUser.role === "farmer" ? "Total Listings" : "Total Requests"}
                    </span>
                    <span className="text-sm font-medium">{currentUser.totalListings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Successful Matches</span>
                    <span className="text-sm font-medium">{currentUser.totalMatches}</span>
                  </div>
                </div>
                <Link href="/profile" className="block mt-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    Edit Profile
                  </Button>
                </Link>
                <Button variant="destructive" className="w-full mt-2" onClick={handleLogout}>
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex space-x-2">
                <Link href={getNewButtonLink()}>
                  <Button className="bg-green-600 hover:bg-green-700 hover:shadow-lg transition-shadow duration-300">
                    <Plus className="h-4 w-4 mr-2" />
                    {getNewButtonText()}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {dashboardContent.stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="flex items-center mt-2 text-sm text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />+{Math.floor(Math.random() * 5) + 1} this week
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview" className="hover:bg-gray-50 transition-colors duration-200">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="listings" className="hover:bg-gray-50 transition-colors duration-200">
                  {currentUser.role === "farmer" ? "My Listings" : "My Requests"}
                </TabsTrigger>
                <TabsTrigger value="matches" className="hover:bg-gray-50 transition-colors duration-200">
                  Matches
                </TabsTrigger>
                <TabsTrigger value="messages" className="hover:bg-gray-50 transition-colors duration-200">
                  Messages
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Recent Activity */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "New match found", item: "Organic Tomatoes", time: "2 hours ago", type: "match" },
                        {
                          action: "Message received",
                          item: "From Green Valley Buyer",
                          time: "4 hours ago",
                          type: "message",
                        },
                        { action: "Listing viewed", item: "Fresh Carrots", time: "6 hours ago", type: "view" },
                        { action: "New listing created", item: "Seasonal Apples", time: "1 day ago", type: "listing" },
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              activity.type === "match"
                                ? "bg-green-500"
                                : activity.type === "message"
                                  ? "bg-blue-500"
                                  : activity.type === "view"
                                    ? "bg-yellow-500"
                                    : "bg-purple-500"
                            }`}
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-sm text-gray-600">{activity.item}</p>
                          </div>
                          <span className="text-xs text-gray-400">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link href={getNewButtonLink()}>
                        <Button
                          variant="outline"
                          className="w-full h-20 flex-col bg-transparent hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Plus className="h-6 w-6 mb-2" />
                          {getNewButtonText()}
                        </Button>
                      </Link>
                      <Link href="/browse">
                        <Button
                          variant="outline"
                          className="w-full h-20 flex-col bg-transparent hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Search className="h-6 w-6 mb-2" />
                          Browse
                        </Button>
                      </Link>
                      <Link href="/messages">
                        <Button
                          variant="outline"
                          className="w-full h-20 flex-col bg-transparent hover:bg-gray-50 transition-colors duration-200"
                        >
                          <MessageCircle className="h-6 w-6 mb-2" />
                          Messages
                        </Button>
                      </Link>
                      <Link href="/profile">
                        <Button
                          variant="outline"
                          className="w-full h-20 flex-col bg-transparent hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Users className="h-6 w-6 mb-2" />
                          Profile
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="listings" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dashboardContent.listings.map((listing, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-gray-100">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold">{listing.title}</h3>
                          <Badge variant={listing.status === "active" ? "default" : "secondary"}>
                            {listing.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {listing.quantity} • {listing.price}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{listing.views} views</span>
                          <span>{listing.interested} interested</span>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-white text-black border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => (window.location.href = getEditLink(listing.id))}
                          >
                            Edit
                          </Button>
                          <Link href={`/listing/${listing.id}`}>
                            <Button
                              size="sm"
                              className="flex-1 bg-black text-white hover:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
                            >
                              View
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="matches" className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      buyer: "Local Restaurant",
                      item: "Organic Tomatoes",
                      quantity: "20 kg",
                      status: "pending",
                      date: "2 hours ago",
                    },
                    {
                      buyer: "Community Food Bank",
                      item: "Fresh Carrots",
                      quantity: "30 kg",
                      status: "confirmed",
                      date: "1 day ago",
                    },
                    {
                      buyer: "Green Valley Market",
                      item: "Seasonal Apples",
                      quantity: "50 kg",
                      status: "completed",
                      date: "3 days ago",
                    },
                  ].map((match, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>{match.buyer.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{match.buyer}</h4>
                              <p className="text-sm text-gray-600">
                                Interested in {match.item} • {match.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                match.status === "pending"
                                  ? "default"
                                  : match.status === "confirmed"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {match.status}
                            </Badge>
                            <p className="text-xs text-gray-500 mt-1">{match.date}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Link href={`/messages?conversation=${match.buyer.replace(/\s+/g, "-").toLowerCase()}`}>
                            <Button size="sm" className="px-4 py-2 hover:shadow-lg transition-shadow duration-300">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                          </Link>
                          {match.status === "pending" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="px-4 py-2 bg-transparent hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => alert("Match accepted!")}
                            >
                              Accept
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          sender: "Green Valley Market",
                          message: "Hi! I'm interested in your organic tomatoes. Are they still available?",
                          time: "2 hours ago",
                          unread: true,
                        },
                        {
                          sender: "Community Food Bank",
                          message: "Thank you for the donation! The carrots were perfect.",
                          time: "1 day ago",
                          unread: false,
                        },
                        {
                          sender: "Local Restaurant",
                          message: "Can we schedule a pickup for tomorrow morning?",
                          time: "2 days ago",
                          unread: false,
                        },
                      ].map((message, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border hover:bg-gray-50 transition-colors duration-200 ${message.unread ? "bg-blue-50 border-blue-200" : "bg-gray-50"}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{message.sender}</h4>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{message.message}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-2 p-0 h-auto"
                            onClick={() => (window.location.href = "/messages")}
                          >
                            Reply
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Link href="/messages" className="block mt-4">
                      <Button variant="outline" className="w-full bg-transparent">
                        View All Messages
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Notification Dropdown */}
      {showNotifications && (
        <div className="fixed top-16 right-4 w-80 bg-white border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b hover:bg-gray-50 ${!notification.read ? "bg-blue-50" : ""}`}
              >
                <p className="text-sm">{notification.message}</p>
                {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
              </div>
            ))}
          </div>
          <div className="p-4">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-black hover:bg-gray-100"
              onClick={() => (window.location.href = "/notifications")}
            >
              View All
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
