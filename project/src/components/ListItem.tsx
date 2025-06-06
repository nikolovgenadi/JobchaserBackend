import React from "react";
import { Job } from "../interfaces";
import styles from "./ListItem.module.css";

interface ListItemProps {
  item: Job;
  searchQuery: string;
  isOpen: boolean;
  onToggle: () => void;
}

function ListItem({ item, isOpen, onToggle }: ListItemProps): JSX.Element {
  const handleSave = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      alert("You must be logged in to save jobs.");
      return;
    }
    const res = await fetch("http://localhost:5000/api/jobs/watchlist", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (res.status === 409) {
      alert("This job is already in your watchlist!");
    } else if (res.ok) {
      alert("Job saved to your watchlist!");
    } else {
      alert("Failed to save job.");
    }
  };
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <h2 className={styles.accordionHeader}>
          <button
            className={styles.accordionButton}
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`collapse${item.id}`}
          >
            {item.position}
          </button>
        </h2>
        <div
          id={`collapse${item.id}`}
          className={`${styles.accordionCollapse} ${isOpen ? styles.open : ""}`}
        >
          <div key={item.id} className={styles.accordionBody}>
            <h3>Role: {item.role}</h3>
            <p>Company: {item.company}</p>
            <p>Location: {item.location}</p>
            <p>Posted: {item.postedAt}</p>
            <p>Tools: {item.tools.join(", ")}</p>
            {item.languages.map((lang, index) => (
              <p key={`${lang.name}-${index}`}>{lang.name}</p>
            ))}
            <button onClick={handleSave} className={styles.saveButton}>
              Save to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
