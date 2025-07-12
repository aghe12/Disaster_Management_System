"use client";
import { useEffect, useState } from "react";

export default function ViewVolunteers() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/volunteer/all");
        if (!response.ok) throw new Error("Failed to fetch volunteers");
        const data = await response.json();
        setVolunteers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchVolunteers();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading volunteers...</div>;
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Volunteers</h2>
      {volunteers.length === 0 ? (
        <p className="text-center">No volunteers found.</p>
      ) : (
        <ul className="space-y-4">
          {volunteers.map((vol) => (
            <li key={vol._id} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-2">{vol.username}</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Email:</strong> {vol.email}<br />
                <strong>User Type:</strong> {vol.userType}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 