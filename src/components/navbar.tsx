import React from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

function NavbarComponent({ searchQuery, setSearchQuery }: NavbarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.brand}>
        Navbar
      </a>
      <div className={styles.navLinks}></div>
      <form className={styles.searchForm}>
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          className={styles.searchInput}
          aria-label="Search"
        />
      </form>
    </nav>
  );
}

export default NavbarComponent;
