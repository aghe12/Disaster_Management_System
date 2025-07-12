"use client"
import { useEffect, useState } from "react";

export default function ViewShelters() {
  const [shelters, setShelters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/shelter/all");
        if (!response.ok) throw new Error("Failed to fetch shelters");
        const data = await response.json();
        setShelters(data);
      } catch (err: any) {
        setError("Failed to load shelters");
      } finally {
        setLoading(false);
      }
    };
    fetchShelters();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading shelters...</div>;
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Shelters</h2>
      {shelters.length === 0 ? (
        <p className="text-center">No shelters available.</p>
      ) : (
        <ul className="space-y-4">
          {shelters.map((shelter) => (
            <li key={shelter._id} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-2">{shelter.name}</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Location:</strong> {shelter.location}<br />
                <strong>Capacity:</strong> {shelter.capacity}<br />
                <strong>Available Space:</strong> {shelter.availableSpace}<br />
                <strong>Contact:</strong> {shelter.contact}<br />
                <strong>Latitude:</strong> {shelter.latitude}<br />
                <strong>Longitude:</strong> {shelter.longitude}
              </p>
              {shelter.image && (
                <img src={shelter.image} alt="Shelter" className="w-full rounded mt-2" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 