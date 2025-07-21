"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Leaf,
  MapPin,
  Star,
  Heart,
  MessageCircle,
  Calendar,
  Package,
  Truck,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react"

// Mock listing data - in real app this would be fetched based on ID
const mockListing = {
  id: 1,
  title: "Fresh Organic Tomatoes",
  farmer: {
    name: "Green Valley Farm",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    totalReviews: 24,
    location: "Green Valley, Nairobi",
    joinDate: "2023-06-15",
    verified: true,
  },
  location: "Green Valley, Nairobi",
  distance: "2.3 km",
  quantity: "50 kg",
  price: 350,
  priceType: "fixed",
  category: "vegetables",
  organic: true,
  harvestDate: "2024-01-15",
  expiryDate: "2024-01-25",
  availableFrom: "2024-01-16T08:00",
  availableTo: "2024-01-25T18:00",
  images: [
    "/placeholder.svg?height=400&width=600&text=Organic+Tomatoes+1",
    "/placeholder.svg?height=400&width=600&text=Organic+Tomatoes+2",
    "/placeholder.svg?height=400&width=600&text=Organic+Tomatoes+3",
  ],
  description:
    "Fresh, vine-ripened organic tomatoes grown without pesticides. Perfect for cooking, salads, or eating fresh. These tomatoes are harvested at peak ripeness and are bursting with flavor. Great for restaurants, families, or anyone who loves fresh, quality produce.",
  pickupOptions: ["farm-pickup", "delivery"],
  views: 24,
  favorites: 8,
  posted: "2024-01-16T10:00:00Z",
}

// Mock similar listings
const similarListings = [
  {
    id: 2,
    title: "Cherry Tomatoes",
    price: 400,
    farmer: "Sunny Farm",
    category: "vegetables",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Roma Tomatoes",
    price: 300,
    farmer: "Valley Produce",
    category: "vegetables",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Heirloom Tomatoes",
    price: 550,
    farmer: "Heritage Farm",
    category: "vegetables",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    title: "Fresh Spinach",
    price: 400,
    farmer: "Leafy Greens Co",
    category: "vegetables",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    title: "Organic Carrots",
    price: 200,
    farmer: "Sunny Acres Farm",
    category: "vegetables",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ListingDetailPage() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)
  const [message, setMessage] = useState("")
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mockListing.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mockListing.images.length) % mockListing.images.length)
  }

  const handleSendMessage = () => {
    // In real app, send message via API
    alert("Message sent successfully!")
    setMessage("")
    setIsMessageDialogOpen(false)
  }

  const handleContactFarmer = () => {
    setIsMessageDialogOpen(true)
  }

  // Filter similar listings by category and exclude current listing
  const filteredSimilarListings = similarListings.filter(
    (listing) => listing.category === mockListing.category && listing.id !== mockListing.id,
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/browse" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">AgriLink</span>
            </Link>
            <Link href="/browse">
              <Button variant="ghost">Back to Browse</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <Card className="overflow-hidden">
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={mockListing.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${mockListing.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {mockListing.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {mockListing.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex ? "bg-white" : "bg-white/50"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>
                {mockListing.images.length > 1 && (
                  <div className="p-4 border-t">
                    <div className="flex space-x-2 overflow-x-auto">
                      {mockListing.images.map((image, index) => (
                        <button
                          key={index}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                            index === currentImageIndex ? "border-green-500" : "border-gray-200"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              {/* Listing Details */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{mockListing.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-4">
                        {mockListing.organic && <Badge className="bg-green-600">Organic</Badge>}
                        {mockListing.priceType === "donation" && <Badge className="bg-purple-600">Free</Badge>}
                        <Badge variant="secondary" className="capitalize">
                          {mockListing.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">
                        {mockListing.priceType === "donation" ? "Free" : `Ksh ${mockListing.price}/kg`}
                      </div>
                      <div className="text-sm text-gray-600">{mockListing.quantity} available</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{mockListing.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">Harvest Date</div>
                          <div className="text-sm text-gray-600">
                            {new Date(mockListing.harvestDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Package className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">Best Before</div>
                          <div className="text-sm text-gray-600">
                            {new Date(mockListing.expiryDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-sm text-gray-600">{mockListing.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">Pickup Options</div>
                          <div className="text-sm text-gray-600">
                            {mockListing.pickupOptions.includes("farm-pickup") && "Farm pickup, "}
                            {mockListing.pickupOptions.includes("delivery") && "Local delivery"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Availability</h3>
                    <p className="text-sm text-gray-600">
                      Available from {new Date(mockListing.availableFrom).toLocaleString()} to{" "}
                      {new Date(mockListing.availableTo).toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Farmer Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Farmer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={mockListing.farmer.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{mockListing.farmer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{mockListing.farmer.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{mockListing.farmer.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">
                            ({mockListing.farmer.totalReviews} reviews)
                          </span>
                        </div>
                        {mockListing.farmer.verified && <Badge className="bg-green-600 text-xs">Verified</Badge>}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {mockListing.farmer.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button onClick={handleContactFarmer} className="w-full bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Farmer
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t text-sm text-gray-600">
                    <p>Member since {new Date(mockListing.farmer.joinDate).toLocaleDateString()}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Listing Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Listing Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Views</span>
                      <span className="text-sm font-medium">{mockListing.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Favorites</span>
                      <span className="text-sm font-medium">{mockListing.favorites}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Posted</span>
                      <span className="text-sm font-medium">{new Date(mockListing.posted).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Listings */}
              <Card>
                <CardHeader>
                  <CardTitle>Similar Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredSimilarListings.slice(0, 3).map((item) => (
                      <Link key={item.id} href={`/listing/${item.id}`}>
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{item.title}</h4>
                            <p className="text-xs text-gray-600">{item.farmer}</p>
                            <p className="text-sm font-semibold text-green-600">Ksh {item.price}/kg</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {filteredSimilarListings.length > 3 && (
                    <div className="mt-4">
                      <Link href={`/browse?category=${mockListing.category}`}>
                        <Button variant="outline" className="w-full bg-transparent">
                          View More Similar Items
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact {mockListing.farmer.name}</DialogTitle>
            <DialogDescription>Send a message about this listing</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <img
                src="/placeholder.svg?height=60&width=80"
                alt={mockListing.title}
                className="w-16 h-12 object-cover rounded"
              />
              <div>
                <h4 className="font-medium">{mockListing.title}</h4>
                <p className="text-sm text-gray-600">
                  Ksh {mockListing.price}/kg • {mockListing.quantity}
                </p>
              </div>
            </div>
            <Textarea
              placeholder="Hi! I'm interested in your organic tomatoes. Are they still available?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
            <div className="flex space-x-2">
              <Button onClick={handleSendMessage} className="flex-1 bg-green-600 hover:bg-green-700">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" onClick={() => setIsMessageDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
