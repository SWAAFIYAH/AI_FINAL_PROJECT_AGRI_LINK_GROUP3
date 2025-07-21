"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, MapPin, Star, Heart, MessageCircle, Leaf, Package, Grid, List } from "lucide-react"

const mockListings = [
  {
    id: 1,
    title: "Fresh Organic Tomatoes",
    farmer: "Green Valley Farm",
    farmerAvatar: "/placeholder-user.jpg",
    rating: 4.8,
    location: "Green Valley, Nairobi",
    distance: 2.3,
    quantity: "50 kg",
    price: 350,
    priceType: "fixed",
    category: "vegetables",
    organic: true,
    harvestDate: "2024-01-15",
    expiryDate: "2024-01-25",
    image: "/placeholder.svg?height=200&width=300",
    description: "Fresh, vine-ripened organic tomatoes. Perfect for cooking or eating fresh.",
    views: 24,
    favorites: 8,
    posted: "2024-01-16T10:00:00Z",
  },
  {
    id: 2,
    title: "Seasonal Apples - Mixed Varieties",
    farmer: "Orchard Hills",
    farmerAvatar: "/placeholder-user.jpg",
    rating: 4.9,
    location: "Apple Valley, Nakuru",
    distance: 5.1,
    quantity: "100 kg",
    price: 150,
    priceType: "negotiable",
    category: "fruits",
    organic: false,
    harvestDate: "2024-01-10",
    expiryDate: "2024-02-10",
    image: "/placeholder.svg?height=200&width=300",
    description: "Mix of Gala, Fuji, and Granny Smith apples. Great for baking or fresh eating.",
    views: 45,
    favorites: 12,
    posted: "2024-01-15T08:00:00Z",
  },
  {
    id: 3,
    title: "Fresh Carrots - Donation",
    farmer: "Sunny Acres Farm",
    farmerAvatar: "/placeholder-user.jpg",
    rating: 4.7,
    location: "Carrot Creek, Kiambu",
    distance: 8.2,
    quantity: "75 kg",
    price: 0,
    priceType: "donation",
    category: "vegetables",
    organic: true,
    harvestDate: "2024-01-12",
    expiryDate: "2024-01-30",
    image: "/placeholder.svg?height=200&width=300",
    description: "Surplus organic carrots available for food banks and community organizations.",
    views: 32,
    favorites: 15,
    posted: "2024-01-14T14:00:00Z",
  },
  {
    id: 4,
    title: "Fresh Spinach Leaves",
    farmer: "Leafy Greens Co",
    farmerAvatar: "/placeholder-user.jpg",
    rating: 4.6,
    location: "Green Valley, Nairobi",
    distance: 3.8,
    quantity: "25 kg",
    price: 400,
    priceType: "fixed",
    category: "vegetables",
    organic: true,
    harvestDate: "2024-01-17",
    expiryDate: "2024-01-22",
    image: "/placeholder.svg?height=200&width=300",
    description: "Fresh organic spinach, perfect for salads and cooking.",
    views: 18,
    favorites: 6,
    posted: "2024-01-17T09:00:00Z",
  },
]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [maxDistance, setMaxDistance] = useState([25])
  const [organicOnly, setOrganicOnly] = useState(false)
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("newest")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const userRole = localStorage.getItem("userRole")
    setIsLoggedIn(!!userRole)
  }, [])

  const filteredAndSortedListings = useMemo(() => {
    const filtered = mockListings.filter((listing) => {
      const matchesSearch =
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.farmer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory
      const matchesOrganic = !organicOnly || listing.organic
      const matchesPrice =
        listing.priceType === "donation" || (listing.price >= priceRange[0] && listing.price <= priceRange[1])
      const matchesDistance = listing.distance <= maxDistance[0]

      return matchesSearch && matchesCategory && matchesOrganic && matchesPrice && matchesDistance
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "distance":
          return a.distance - b.distance
        case "rating":
          return b.rating - a.rating
        case "newest":
        default:
          return new Date(b.posted).getTime() - new Date(a.posted).getTime()
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, priceRange, maxDistance, organicOnly, sortBy])

  const handleContactFarmer = (farmerId: number, farmerName: string) => {
    if (!isLoggedIn) {
      // Redirect to login page
      localStorage.setItem("redirectAfterLogin", "/browse")
      window.location.href = "/login"
      return
    }
    alert(`Contacting ${farmerName}...`)
    // In real app, this would open messaging or contact modal
  }

  const handleDashboardAccess = () => {
    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", "/dashboard")
      window.location.href = "/login"
      return
    }
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">AgriLink</span>
            </Link>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for produce, farmers, locations..."
                  className="pl-10 pr-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <Button variant="ghost" onClick={handleDashboardAccess}>
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="herbs">Herbs</SelectItem>
                      <SelectItem value="grains">Grains</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Price Range (Ksh/kg)</label>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={50} className="w-full" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Ksh {priceRange[0]}</span>
                    <span>Ksh {priceRange[1]}</span>
                  </div>
                </div>

                {/* Distance */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Max Distance</label>
                  <Slider value={maxDistance} onValueChange={setMaxDistance} max={50} step={5} className="w-full" />
                  <div className="text-sm text-gray-600">Within {maxDistance[0]} km</div>
                </div>

                {/* Organic Only */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="organic"
                    checked={organicOnly}
                    onChange={(e) => setOrganicOnly(e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor="organic" className="text-sm font-medium">
                    Organic only
                  </label>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSelectedCategory("all")
                    setPriceRange([0, 1000])
                    setMaxDistance([25])
                    setOrganicOnly(false)
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">Browse Listings ({filteredAndSortedListings.length})</h1>
              </div>

              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Listings Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredAndSortedListings.map((listing) => (
                <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {viewMode === "grid" ? (
                    <>
                      <div className="aspect-video relative">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex space-x-1">
                          {listing.organic && <Badge className="bg-green-600">Organic</Badge>}
                          {listing.priceType === "donation" && <Badge className="bg-purple-600">Free</Badge>}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 left-2 bg-white/80 hover:bg-white"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold text-lg">{listing.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={listing.farmerAvatar || "/placeholder.svg"} />
                                <AvatarFallback>{listing.farmer.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{listing.farmer}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm">{listing.rating}</span>
                            </div>
                          </div>

                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-1" />
                            {listing.distance} km away
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-lg font-bold text-green-600">
                                {listing.priceType === "donation" ? "Free" : `Ksh ${listing.price}/kg`}
                              </span>
                              <span className="text-sm text-gray-600 ml-2">{listing.quantity}</span>
                            </div>
                            <div className="text-xs text-gray-500">{listing.views} views</div>
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() => handleContactFarmer(listing.id, listing.farmer)}
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Contact
                            </Button>
                            <Link href={`/listing/${listing.id}`}>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </>
                  ) : (
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{listing.title}</h3>
                              <p className="text-sm text-gray-600">{listing.description}</p>
                            </div>
                            <div className="flex space-x-1">
                              {listing.organic && <Badge className="bg-green-600">Organic</Badge>}
                              {listing.priceType === "donation" && <Badge className="bg-purple-600">Free</Badge>}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={listing.farmerAvatar || "/placeholder.svg"} />
                                  <AvatarFallback>{listing.farmer.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">{listing.farmer}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-sm">{listing.rating}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                {listing.distance} km
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-600">
                                  {listing.priceType === "donation" ? "Free" : `Ksh ${listing.price}/kg`}
                                </div>
                                <div className="text-sm text-gray-600">{listing.quantity}</div>
                              </div>
                              <div className="flex space-x-2">
                                <Button size="sm" onClick={() => handleContactFarmer(listing.id, listing.farmer)}>
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Contact
                                </Button>
                                <Link href={`/listing/${listing.id}`}>
                                  <Button variant="outline" size="sm">
                                    Details
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {filteredAndSortedListings.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
