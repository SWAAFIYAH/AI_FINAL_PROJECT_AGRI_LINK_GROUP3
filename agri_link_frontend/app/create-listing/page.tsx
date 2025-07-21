"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Leaf, Upload, MapPin, Calendar, DollarSign, Package, X } from "lucide-react"

export default function CreateListingPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    quantity: "",
    unit: "",
    price: "",
    priceType: "fixed", // fixed, negotiable, donation
    description: "",
    harvestDate: "",
    expiryDate: "",
    location: "",
    availableFrom: "",
    availableTo: "",
    pickupOptions: [],
    organic: false,
    images: [],
  })
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      alert("Listing created successfully!")
      window.location.href = "/dashboard"
    }, 1500)
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    // In real app, upload to cloud storage
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file),
    }))
    setUploadedImages([...uploadedImages, ...newImages])
  }

  const removeImage = (id) => {
    setUploadedImages(uploadedImages.filter((img) => img.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">AgriLink</span>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Listing</h1>
            <p className="text-gray-600">Share your surplus produce with the community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Basic Information
                </CardTitle>
                <CardDescription>Tell us about your produce</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Listing Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Fresh Organic Tomatoes"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="herbs">Herbs</SelectItem>
                        <SelectItem value="grains">Grains</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="organic"
                      checked={formData.organic}
                      onCheckedChange={(checked) => setFormData({ ...formData, organic: checked })}
                    />
                    <Label htmlFor="organic">Organic</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your produce, growing conditions, quality, etc."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quantity & Pricing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Quantity & Pricing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="50"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select value={formData.unit} onValueChange={(value) => setFormData({ ...formData, unit: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lbs">Pounds (lbs)</SelectItem>
                        <SelectItem value="kg">Kilograms (kg)</SelectItem>
                        <SelectItem value="pieces">Pieces</SelectItem>
                        <SelectItem value="boxes">Boxes</SelectItem>
                        <SelectItem value="bags">Bags</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Pricing Type</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="fixed"
                        name="priceType"
                        value="fixed"
                        checked={formData.priceType === "fixed"}
                        onChange={(e) => setFormData({ ...formData, priceType: e.target.value })}
                      />
                      <Label htmlFor="fixed">Fixed Price</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="negotiable"
                        name="priceType"
                        value="negotiable"
                        checked={formData.priceType === "negotiable"}
                        onChange={(e) => setFormData({ ...formData, priceType: e.target.value })}
                      />
                      <Label htmlFor="negotiable">Negotiable</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="donation"
                        name="priceType"
                        value="donation"
                        checked={formData.priceType === "donation"}
                        onChange={(e) => setFormData({ ...formData, priceType: e.target.value })}
                      />
                      <Label htmlFor="donation">Free Donation</Label>
                    </div>
                  </div>
                </div>

                {formData.priceType !== "donation" && (
                  <div className="space-y-2">
                    <Label htmlFor="price">Price per Unit ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      placeholder="3.50"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required={formData.priceType !== "donation"}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Images */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Photos
                </CardTitle>
                <CardDescription>Add photos to showcase your produce (up to 5 images)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Upload Photos</p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB each</p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" className="mt-4 bg-transparent">
                        Choose Files
                      </Button>
                    </Label>
                  </div>

                  {uploadedImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {uploadedImages.map((image) => (
                        <div key={image.id} className="relative group">
                          <img
                            src={image.url || "/placeholder.svg"}
                            alt={image.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Dates & Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Dates & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="harvestDate">Harvest Date</Label>
                    <Input
                      id="harvestDate"
                      type="date"
                      value={formData.harvestDate}
                      onChange={(e) => setFormData({ ...formData, harvestDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Best Before Date</Label>
                    <Input
                      id="expiryDate"
                      type="date"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="availableFrom">Available From</Label>
                    <Input
                      id="availableFrom"
                      type="datetime-local"
                      value={formData.availableFrom}
                      onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availableTo">Available Until</Label>
                    <Input
                      id="availableTo"
                      type="datetime-local"
                      value={formData.availableTo}
                      onChange={(e) => setFormData({ ...formData, availableTo: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Pickup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location & Pickup Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Pickup Location</Label>
                  <Input
                    id="location"
                    placeholder="123 Farm Road, Green Valley, CA 94534"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Pickup Options (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "farm-pickup", label: "Farm Pickup", desc: "Buyers come to your location" },
                      { id: "delivery", label: "Local Delivery", desc: "You deliver within 10 miles" },
                      { id: "farmers-market", label: "Farmers Market", desc: "Meet at local farmers market" },
                      { id: "flexible", label: "Flexible", desc: "Discuss with buyer" },
                    ].map((option) => (
                      <div key={option.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id={option.id}
                          checked={formData.pickupOptions.includes(option.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                pickupOptions: [...formData.pickupOptions, option.id],
                              })
                            } else {
                              setFormData({
                                ...formData,
                                pickupOptions: formData.pickupOptions.filter((id) => id !== option.id),
                              })
                            }
                          }}
                        />
                        <div>
                          <Label htmlFor={option.id} className="font-medium">
                            {option.label}
                          </Label>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex space-x-4">
              <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Creating Listing..." : "Create Listing"}
              </Button>
              <Link href="/dashboard" className="flex-1">
                <Button type="button" variant="outline" className="w-full bg-transparent">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
