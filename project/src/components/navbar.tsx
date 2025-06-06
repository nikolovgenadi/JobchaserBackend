import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" className={styles.brand}>
        Job Listings
      </Link>
      <div className={styles.navLinks}>
        <Link to="/login" className={styles.navLink}>
          Login
        </Link>
        <Link to="/signup" className={styles.navLink}>
          Signup
        </Link>
        <Link to="/watchlist" className={styles.navLink}>
          Watchlist
        </Link>
      </div>
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
