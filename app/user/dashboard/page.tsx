"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UserDashboard() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (!token) {
      router.push("/login");
    } else {
      setIsLoaded(true);
    }
  }, [router]);

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      router.push("/login");
    }
  };

  const dashboardOptions = [
    { label: "View Disasters", path: "/user/view-disasters" },
    { label: "View Shelters", path: "/user/view-shelters" },
    { label: "View Source", path: "/user/post-sos" },
    { label: "View Bank Details", path: "/user/view-sos" },
    { label: "Post Incident", path: "/user/post-incident" },
    { label: "Manage Incident", path: "/user/manage-incident" },
    { label: "Add Source", path: "/user/post-resource" },
    { label: "Add Emergency Contacts", path: "/user/emergency-contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-8 relative">
      <h1 className="text-4xl font-bold text-white text-center mb-10 mt-6 drop-shadow-lg uppercase tracking-wide">
        User Dashboard
      </h1>
      <div className="flex flex-wrap gap-6 justify-center w-full max-w-4xl mb-10">
        {dashboardOptions.map((opt, idx) => (
          <Link
            key={opt.label}
            href={opt.path}
            className={`block text-center px-8 py-6 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-all duration-200 w-60 text-lg ${isLoaded ? "opacity-100 animate-fadeIn" : "opacity-0"}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            {opt.label}
          </Link>
        ))}
      </div>
      <button
        onClick={logout}
        className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-red-700 transition mb-8"
      >
        Logout
      </button>
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 