import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Clock from "../Clock/Clock";
import { MdLogout } from "react-icons/md";
import useLogout from "../../utils/customHooks/useLogout";

function Header() {
  const logout = useLogout();

  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>
        <Link to="/dashboard">Dashboard</Link>
      </h1>
      <div className={styles.rightDiv}>
        <Clock />
        <button className={styles.button} onClick={logout}>
          <MdLogout />
        </button>
      </div>
    </header>
  );
}

export default Header;
