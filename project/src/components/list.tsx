import React, { useState } from "react";
import useFetchData from "./useFetchData";
import ListItem from "./ListItem";
import styles from "./list.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface ListProps {
  searchQuery: string;
}

function List({ searchQuery }: ListProps): JSX.Element {
  const { jobs, isLoading, error } = useFetchData();
  const [openJobId, setOpenJobId] = useState<number | null>(null);

  const { levels, roles } = useSelector((state: RootState) => state.filters);

  const filteredJobs = jobs.filter((i) => {
    const matchesSearch = i.position
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLevel = levels.length === 0 || levels.includes(i.level);
    const matchesRole = roles.length === 0 || roles.includes(i.role);
    return matchesSearch && matchesLevel && matchesRole;
  });

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
    </div>
  );
}

export default List;
