"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Leaf,
  MessageCircle,
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  ArrowLeft,
} from "lucide-react"

const mockConversations = [
  {
    id: 1,
    name: "Green Valley Market",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Great! I'll pick them up tomorrow morning.",
    time: "2 hours ago",
    unread: 2,
    online: true,
    type: "buyer",
  },
  {
    id: 2,
    name: "Community Food Bank",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thank you for the donation! The carrots were perfect.",
    time: "1 day ago",
    unread: 0,
    online: false,
    type: "foodbank",
  },
  {
    id: 3,
    name: "Local Restaurant",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Are the tomatoes still available?",
    time: "2 days ago",
    unread: 1,
    online: true,
    type: "buyer",
  },
  {
    id: 4,
    name: "Sunny Farm Co-op",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Let's coordinate the delivery schedule.",
    time: "3 days ago",
    unread: 0,
    online: false,
    type: "farmer",
  },
]

const mockMessages = [
  {
    id: 1,
    senderId: 1,
    senderName: "Green Valley Market",
    message: "Hi! I'm interested in your organic tomatoes. Are they still available?",
    time: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    senderId: "me",
    senderName: "You",
    message: "Yes, they are! I have 50 lbs available. When would you like to pick them up?",
    time: "10:35 AM",
    isOwn: true,
  },
  {
    id: 3,
    senderId: 1,
    senderName: "Green Valley Market",
    message: "Perfect! How about tomorrow morning around 9 AM? Also, what's your best price for the whole batch?",
    time: "10:40 AM",
    isOwn: false,
  },
  {
    id: 4,
    senderId: "me",
    senderName: "You",
    message:
      "Tomorrow at 9 AM works great! For the full 50 lbs, I can do $3.25/lb instead of $3.50. That's $162.50 total.",
    time: "10:45 AM",
    isOwn: true,
  },
  {
    id: 5,
    senderId: 1,
    senderName: "Green Valley Market",
    message: "Great! I'll pick them up tomorrow morning. Should I come to the farm address listed?",
    time: "2 hours ago",
    isOwn: false,
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobileView, setIsMobileView] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In real app, send message via API
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
            {/* Conversations List */}
            <div className={`lg:col-span-1 ${isMobileView ? "hidden lg:block" : ""}`}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Messages
                  </CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-0">
                  <div className="space-y-1">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`p-4 cursor-pointer hover:bg-gray-50 border-b transition-colors ${
                          selectedConversation.id === conversation.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                        }`}
                        onClick={() => {
                          setSelectedConversation(conversation)
                          setIsMobileView(true)
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar>
                              <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {conversation.online && (
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-500">{conversation.time}</span>
                                {conversation.unread > 0 && (
                                  <Badge className="bg-blue-500 text-xs px-2 py-1">{conversation.unread}</Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                            <Badge variant="secondary" className="text-xs mt-1 capitalize">
                              {conversation.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className={`lg:col-span-2 ${!isMobileView ? "hidden lg:block" : ""}`}>
              <Card className="h-full flex flex-col">
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileView(false)}>
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={selectedConversation.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {selectedConversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.name}</h3>
                        <p className="text-sm text-gray-600">
                          {selectedConversation.online ? "Online" : "Last seen 2 hours ago"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {mockMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn ? "bg-green-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${message.isOwn ? "text-green-100" : "text-gray-500"}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-end space-x-2">
                    <Button variant="ghost" size="icon" className="mb-2">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                        rows={1}
                        className="resize-none"
                      />
                    </div>
                    <Button variant="ghost" size="icon" className="mb-2">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="mb-2 bg-green-600 hover:bg-green-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
