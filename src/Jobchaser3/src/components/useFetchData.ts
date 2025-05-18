// filepath: c:\Users\Imgen\Documents\GitHub\Jobchaser3\src\components\useFetchData.ts
import { useState, useEffect } from "react";
import fetchData from "./fetchData";
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
    fetchData()
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