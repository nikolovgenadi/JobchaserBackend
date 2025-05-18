import React from "react";
import { Job } from "../interfaces";
import styles from "./ListItem.module.css";

interface ListItemProps {
  item: Job;
  searchQuery: string;
  isOpen: boolean; // Whether this job is open
  onToggle: () => void; // Function to toggle this job
}

function ListItem({
  item,
  // searchQuery,
  isOpen,
  onToggle,
}: ListItemProps): JSX.Element {
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
            <p>Tools: {item.tools}</p>
            {item.languages.map((lang, index) => (
              <p key={`${lang.name}-${index}`}>{lang.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
