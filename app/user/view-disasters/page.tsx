"use client"
import { useEffect, useState } from "react";

export default function ViewDisasters() {
  const [disasters, setDisasters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/disaster/all");
        if (!response.ok) throw new Error("Failed to fetch disasters");
        const data = await response.json();
        setDisasters(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDisasters();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading disasters...</div>;
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Disasters</h2>
      {disasters.length === 0 ? (
        <p className="text-center">No disasters reported yet.</p>
      ) : (
        disasters.map((disaster) => (
          <div key={disaster._id} className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{disaster.name}</h3>
            <p><strong>Location:</strong> {disaster.location}</p>
            <p><strong>Severity:</strong> {disaster.severity}</p>
            <p>{disaster.description}</p>
            {disaster.image && (
              <img src={`http://localhost:5000/${disaster.image}`} alt="Disaster" className="mt-2 rounded w-full max-h-60 object-cover" />
            )}
          </div>
        ))
      )}
    </div>
  );
} 