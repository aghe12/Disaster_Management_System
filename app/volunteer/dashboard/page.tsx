"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function VolunteerDashboard() {
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
    { label: "Contact Admin", path: "/volunteer/contact-admin" },
    { label: "View Disaster", path: "/volunteer/view-disasters" },
    { label: "Submit Report", path: "/volunteer/submit-report" },
    { label: "Update Task Status", path: "/volunteer/update-task-status" },
    { label: "Post Shelter", path: "/volunteer/post-shelters" },
    { label: "View Shelters", path: "/volunteer/view-shelters" },
    { label: "Volunteer Profile", path: "/volunteer/profile" },
    { label: "Update Resources", path: "/volunteer/updateresources" },
    { label: "Update Shelter", path: "/admin/updateshelter" },
    { label: "View Incident", path: "/volunteer/viewincidents" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-8 relative">
      <h1 className="text-4xl font-bold text-white text-center mb-10 mt-6 drop-shadow-lg uppercase tracking-wide">
        Volunteer Dashboard
      </h1>
      <div className="flex flex-col gap-6 items-center w-full max-w-xl mb-10">
        {dashboardOptions.map((opt, idx) => (
          <Link
            key={opt.label}
            href={opt.path}
            className={`block text-center px-8 py-6 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-all duration-200 w-full text-lg ${isLoaded ? "opacity-100 animate-slideInRight" : "opacity-0"}`}
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
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 