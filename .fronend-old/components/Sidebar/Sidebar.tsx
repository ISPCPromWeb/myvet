import Link from "next/link";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <nav
      className={`${styles.navbar} navbar-expand-lg navbar-toggler h-100 d-flex flex-column flex-shrink-0 p-3`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`${styles.vincnavH4} navbar-toggler-icon`}></span>
        </button>
        <h4 className={`${styles.vincnavH4} navbar-brand`}>Menú</h4>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav flex-column mb-auto">
            <li className="nav-item">
              <Link
                href={`/dashboard`}
                className={`${styles.vincnav} nav-link  `}
              >
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/dashboard/clients`}
                className={`${styles.vincnav} nav-link`}
              >
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/dashboard/pets`}
                className={`${styles.vincnav} nav-link`}
              >
                Mascotas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/dashboard/vaccines`}
                className={`${styles.vincnav} nav-link`}
              >
                Vacunas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/dashboard/products`}
                className={`${styles.vincnav} nav-link`}
              >
                Productos
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <form action={`/dashboard/api`} method="post">
                <button
                  className={`${styles.btn} btn vincnav nav-link`}
                  type="submit"
                >
                  Cerrar Sesión
                </button>
              </form>
            </li>
          </ul>
          <hr />

          <ul className=" navbar-nav dropdown-menu-dark text-small"></ul>
        </div>
      </div>
    </nav>
  );
};