// src/components/DashboardLayout/Navbar.tsx
import React from 'react';
import styles from './dashboard.module.css';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className={`${styles['dashboard-navbar']} navbar navbar-light`}>
      <button className={styles['hamburger-menu']} onClick={toggleSidebar} aria-label="Toggle sidebar">
        <i className="bi bi-list"></i>
      </button>
      {/* Aquí puedes agregar más elementos al navbar, como un buscador, notificaciones, perfil de usuario, etc. */}
      <div className="ms-auto">
        {/* ej. <span className="navbar-text">Bienvenido, Usuario</span> */}
      </div>
    </nav>
  );
};

export default Navbar;