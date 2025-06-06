import React from "react";
import { useState, useEffect } from "react";
import { Job } from "../interfaces";

const useFetchData = (): {
  jobs: Job[];
  isLoading: boolean;
  error: string | null;
} => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setJobs(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return { jobs, isLoading, error };
};

export default useFetchData;
