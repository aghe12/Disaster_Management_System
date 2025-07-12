"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
  ArrowRightIcon,
  HeartIcon,
  GlobeAltIcon,
  ClockIcon,
} from "@heroicons/react/24/outline"

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const backgroundImages = [
    "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbCUyMGRpc2FzdGVyfGVufDB8fDB8fHww",
    "https://cdn.pixabay.com/photo/2024/03/15/15/23/ai-generated-8635240_640.jpg",
    "https://media.istockphoto.com/id/1327617934/photo/aerial-view-of-flooded-houses-with-dirty-water-of-dnister-river-in-halych-town-western-ukraine.jpg?s=612x612&w=0&k=20&c=ffFK1c1lx15S3PlX-tee1py2wkLiKYLad67VvFwTG2I=",
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const userTypes = [
    {
      title: "Admin Portal",
      description: "Manage disasters, coordinate resources, and oversee relief operations",
      icon: ShieldCheckIcon,
      href: "/signup/admin",
      color: "from-blue-600 to-blue-700",
      features: ["Disaster Management", "Resource Coordination", "Volunteer Oversight"],
    },
    {
      title: "Volunteer Hub",
      description: "Join relief efforts, update task status, and support communities",
      icon: UserGroupIcon,
      href: "/signup/volunteer",
      color: "from-emerald-600 to-emerald-700",
      features: ["Task Management", "Report Submission", "Community Support"],
    },
    {
      title: "Citizen Portal",
      description: "Report incidents, request help, and access emergency resources",
      icon: UserIcon,
      href: "/signup/user",
      color: "from-purple-600 to-purple-700",
      features: ["Incident Reporting", "Emergency Contacts", "Resource Access"],
    },
  ]

  const stats = [
    { label: "Lives Saved", value: "10,000+", icon: HeartIcon },
    { label: "Communities Served", value: "500+", icon: GlobeAltIcon },
    { label: "Response Time", value: "< 2hrs", icon: ClockIcon },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-6">
          <div className="container flex justify-between items-center">
            <div className="text-white text-2xl font-bold">DisasterRelief</div>
            <Link href="/login" className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
              Sign In
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container text-center text-white z-10">
          <div className={`fade-in ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Disaster Relief
              <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
              Connecting communities, coordinating resources, and saving lives through technology-driven disaster
              response and relief operations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRightIcon className="h-6 w-6 text-white rotate-90" />
        </div>
      </div>

      {/* User Type Selection */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Choose Your Role</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our platform and make a difference in disaster relief efforts. Select the role that best describes
              how you want to contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {userTypes.map((type, index) => (
              <div
                key={index}
                className={`card card-hover scale-in group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${type.color} mb-6`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{type.title}</h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={type.href}
                    className={`inline-block w-full px-6 py-2 mt-6 font-semibold text-white bg-gradient-to-r ${type.color} rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-200 group-hover:shadow-xl`}
                  >
                    Get Started
                    <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Existing User Login */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Already have an account?</p>
            <Link href="/login" className="btn btn-outline inline-flex items-center">
              Sign In to Your Account
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Comprehensive Disaster Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides end-to-end solutions for disaster preparedness, response, and recovery operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Real-time Monitoring", desc: "Track disasters and coordinate response efforts in real-time" },
              { title: "Resource Management", desc: "Efficiently allocate and track relief resources and supplies" },
              { title: "Volunteer Coordination", desc: "Organize and manage volunteer activities and assignments" },
              { title: "Emergency Communication", desc: "Facilitate communication between all stakeholders" },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="h-16 w-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Disaster Relief Platform</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Empowering communities to respond effectively to disasters through technology, coordination, and
              collective action.
            </p>
            <div className="text-gray-500">© 2024 Disaster Relief Platform. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
