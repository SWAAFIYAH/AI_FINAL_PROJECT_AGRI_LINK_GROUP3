"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Bell,
  MessageCircle,
  Heart,
  Package,
  Star,
  CheckCircle,
  BookMarkedIcon as MarkAsUnread,
  Trash2,
} from "lucide-react"

const mockNotifications = [
  {
    id: 1,
    type: "match",
    title: "New Match Found!",
    message: "Local Restaurant is interested in your Organic Tomatoes",
    time: "2 hours ago",
    read: false,
    avatar: "/placeholder.svg?height=40&width=40",
    actionUrl: "/dashboard?tab=matches",
  },
  {
    id: 2,
    type: "message",
    title: "New Message",
    message: "Green Valley Market sent you a message about Fresh Carrots",
    time: "4 hours ago",
    read: false,
    avatar: "/placeholder.svg?height=40&width=40",
    actionUrl: "/dashboard?tab=messages",
  },
  {
    id: 3,
    type: "listing",
    title: "Listing Viewed",
    message: "Your Seasonal Apples listing has been viewed 15 times today",
    time: "6 hours ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    actionUrl: "/dashboard?tab=listings",
  },
  {
    id: 4,
    type: "review",
    title: "New Review",
    message: "Community Food Bank left you a 5-star review",
    time: "1 day ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    actionUrl: "/profile?tab=stats",
  },
  {
    id: 5,
    type: "system",
    title: "Profile Verification",
    message: "Your farmer profile has been successfully verified",
    time: "2 days ago",
    read: true,
    avatar: "/placeholder.svg?height=40&width=40",
    actionUrl: "/profile",
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [filter, setFilter] = useState("all")

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAsUnread = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: false } : n)))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "match":
        return <Heart className="h-5 w-5 text-purple-600" />
      case "message":
        return <MessageCircle className="h-5 w-5 text-blue-600" />
      case "listing":
        return <Package className="h-5 w-5 text-green-600" />
      case "review":
        return <Star className="h-5 w-5 text-yellow-500" />
      case "system":
        return <CheckCircle className="h-5 w-5 text-gray-600" />
      default:
        return <Bell className="h-5 w-5 text-gray-600" />
    }
  }

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read
    if (filter === "read") return n.read
    return true
  })

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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Notifications</h1>
              <p className="text-gray-600">
                {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : "All caught up!"}
              </p>
            </div>
            {unreadCount > 0 && (
              <Button onClick={markAllAsRead} variant="outline" className="bg-transparent">
                Mark All as Read
              </Button>
            )}
          </div>

          <Tabs value={filter} onValueChange={setFilter} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
              <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              <TabsTrigger value="read">Read ({notifications.length - unreadCount})</TabsTrigger>
            </TabsList>

            <TabsContent value={filter}>
              {filteredNotifications.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                    <p className="text-gray-600">
                      {filter === "unread"
                        ? "All notifications have been read"
                        : "You don't have any notifications yet"}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <Card
                      key={notification.id}
                      className={`transition-all hover:shadow-md ${!notification.read ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">{getIcon(notification.type)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3
                                  className={`text-sm font-medium ${!notification.read ? "text-gray-900" : "text-gray-700"}`}
                                >
                                  {notification.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                              </div>
                              <div className="flex items-center space-x-2 ml-4">
                                {!notification.read ? <div className="w-2 h-2 bg-blue-500 rounded-full"></div> : null}
                                <div className="flex space-x-1">
                                  {notification.read ? (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8"
                                      onClick={() => markAsUnread(notification.id)}
                                      title="Mark as unread"
                                    >
                                      <MarkAsUnread className="h-4 w-4" />
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8"
                                      onClick={() => markAsRead(notification.id)}
                                      title="Mark as read"
                                    >
                                      <CheckCircle className="h-4 w-4" />
                                    </Button>
                                  )}
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-red-600 hover:text-red-700"
                                    onClick={() => deleteNotification(notification.id)}
                                    title="Delete notification"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            {notification.actionUrl && (
                              <Link href={notification.actionUrl}>
                                <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                                  View Details
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
