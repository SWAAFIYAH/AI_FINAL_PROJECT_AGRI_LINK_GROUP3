"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, User, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

const testCredentials = [
  {
    role: "farmer",
    name: "John Smith",
    email: "farmer@freshconnect.com",
    password: "farmer123",
    description: "Green Valley Farm owner with organic produce",
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    role: "buyer",
    name: "Sarah Johnson",
    email: "buyer@freshconnect.com",
    password: "buyer123",
    description: "Local restaurant owner looking for fresh ingredients",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    role: "foodbank",
    name: "Community Food Bank",
    email: "foodbank@freshconnect.com",
    password: "foodbank123",
    description: "Non-profit organization helping feed the community",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
]

export default function LoginCredentialsPage() {
  const [copiedField, setCopiedField] = useState("")

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(""), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">AgriLink</span>
          </Link>
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Login Credentials</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use these test accounts to explore AgriLink from different user perspectives. Each account has
              pre-populated data to showcase the platform's features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testCredentials.map((credential, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl capitalize">{credential.role} Account</CardTitle>
                  <CardDescription>{credential.description}</CardDescription>
                  <Badge className={`${credential.color} capitalize w-fit mx-auto`}>{credential.role}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <div className="flex items-center justify-between mt-1 p-2 bg-gray-50 rounded border">
                      <span className="text-sm">{credential.name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <div className="flex items-center justify-between mt-1 p-2 bg-gray-50 rounded border">
                      <span className="text-sm font-mono">{credential.email}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => copyToClipboard(credential.email, `email-${index}`)}
                      >
                        {copiedField === `email-${index}` ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="flex items-center justify-between mt-1 p-2 bg-gray-50 rounded border">
                      <span className="text-sm font-mono">{credential.password}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => copyToClipboard(credential.password, `password-${index}`)}
                      >
                        {copiedField === `password-${index}` ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Link href="/login" className="block">
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Login as {credential.role}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Start Guide</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p>
                  <strong>1.</strong> Click "Copy" next to any email/password above to copy credentials to your
                  clipboard
                </p>
                <p>
                  <strong>2.</strong> Click "Login as [role]" or navigate to the login page manually
                </p>
                <p>
                  <strong>3.</strong> Paste the credentials and sign in to explore the platform
                </p>
                <p>
                  <strong>4.</strong> Each account has different permissions and pre-loaded data to test various
                  features
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Want to create your own account instead?</p>
            <Link href="/register">
              <Button variant="outline" className="bg-transparent">
                Create New Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
