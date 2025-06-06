import React, { useEffect, useState } from "react";
import { Job } from "../interfaces";

function Watchlist() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const token = localStorage.getItem("jwt");
      if (!token) {
        setError("You must be logged in to view your watchlist. :|");
        setLoading(false);
        return;
      }
      try {
        const res = await fetch("http://localhost:5000/api/jobs/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch watchlist :(");
        const data = await res.json();
        setJobs(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchWatchlist();
  }, []);

  if (loading) return <div>Loading your watchlist...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h2>Your Watchlist</h2>
      {jobs.length === 0 ? (
        <p>No jobs saved yet.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.position}</strong> at {job.company} ({job.location})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Watchlist;