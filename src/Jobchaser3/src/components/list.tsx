// filepath: c:\Users\Imgen\Documents\GitHub\Jobchaser3\src\components\list.tsx
import React, { useState } from "react";
import useFetchData from "./useFetchData";
import ListItem from "./ListItem";
import styles from "./list.module.css";
import { Link } from "react-router-dom";

interface ListProps {
  searchQuery: string;
}

function List({ searchQuery }: ListProps): JSX.Element {
  const { jobs, isLoading, error } = useFetchData();
  const [openJobId, setOpenJobId] = useState<number | null>(null);

  const filteredJobs = jobs.filter((i) =>
    i.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (jobId: number) => {
    setOpenJobId(openJobId === jobId ? null : jobId); 
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        {isLoading ? (
          <p className={styles.loading}>Loading...</p>
        ) : error ? (
          <p className={styles.error}>Error: {error}</p>
        ) : (
          <>
            {filteredJobs.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                searchQuery={searchQuery}
                isOpen={openJobId === Number(item.id)}
                onToggle={() => handleToggle(Number(item.id))}
              />
            ))}
          </>
        )}
      </div>
      <div className={styles.navigation}>
        <Link to="/login" className={styles.navLink}>Login</Link>
        <Link to="/signup" className={styles.navLink}>Signup</Link>
      </div>
    </div>
  );
}

export default List;