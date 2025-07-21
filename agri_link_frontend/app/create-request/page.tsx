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
import { Leaf, MapPin, Calendar, DollarSign, Search } from "lucide-react"

export default function CreateRequestPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    quantity: "",
    unit: "",
    maxPrice: "",
    priceType: "fixed", // fixed, negotiable, donation
    description: "",
    neededBy: "",
    location: "",
    deliveryOptions: [],
    organic: false,
    urgency: "normal", // low, normal, high
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      alert("Request created successfully!")
      window.location.href = "/dashboard"
    }, 1500)
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Request</h1>
            <p className="text-gray-600">Let farmers know what produce you're looking for</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Request Details
                </CardTitle>
                <CardDescription>Tell us what you're looking for</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Request Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Looking for Fresh Organic Tomatoes"
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

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Flexible timing</SelectItem>
                        <SelectItem value="normal">Normal - Within a week</SelectItem>
                        <SelectItem value="high">High - Needed ASAP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="organic"
                    checked={formData.organic}
                    onCheckedChange={(checked) => setFormData({ ...formData, organic: checked })}
                  />
                  <Label htmlFor="organic">Organic preferred</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what you're looking for, intended use, quality requirements, etc."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quantity & Budget */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Quantity & Budget
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Needed</Label>
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
                  <Label>Budget Type</Label>
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
                      <Label htmlFor="fixed">Fixed Budget</Label>
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
                      <Label htmlFor="donation">Seeking Donation</Label>
                    </div>
                  </div>
                </div>

                {formData.priceType !== "donation" && (
                  <div className="space-y-2">
                    <Label htmlFor="maxPrice">Maximum Price per Unit ($)</Label>
                    <Input
                      id="maxPrice"
                      type="number"
                      step="0.01"
                      placeholder="3.50"
                      value={formData.maxPrice}
                      onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                      required={formData.priceType !== "donation"}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="neededBy">Needed By Date</Label>
                  <Input
                    id="neededBy"
                    type="date"
                    value={formData.neededBy}
                    onChange={(e) => setFormData({ ...formData, neededBy: e.target.value })}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Location & Delivery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location & Delivery Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location</Label>
                  <Input
                    id="location"
                    placeholder="123 Main Street, City, State, ZIP"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Delivery/Pickup Options (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "pickup", label: "I can pick up", desc: "Travel to farmer's location" },
                      { id: "delivery", label: "Need delivery", desc: "Farmer delivers to my location" },
                      { id: "meetup", label: "Meet halfway", desc: "Meet at a convenient location" },
                      { id: "flexible", label: "Flexible", desc: "Open to discussion" },
                    ].map((option) => (
                      <div key={option.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id={option.id}
                          checked={formData.deliveryOptions.includes(option.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                deliveryOptions: [...formData.deliveryOptions, option.id],
                              })
                            } else {
                              setFormData({
                                ...formData,
                                deliveryOptions: formData.deliveryOptions.filter((id) => id !== option.id),
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
                {isLoading ? "Creating Request..." : "Create Request"}
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
