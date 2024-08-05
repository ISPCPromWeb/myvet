import styles from "./StoreFilter.module.css";
// import { productsApi } from "@/api/products";
import { products as mockedProducts } from "@/constants";

export const StoreFilter = () => {
  return (
    <>
      <div className={` col-3 p-3`}>
        <button
          className={` d-block d-md-none btn btn-toggle align-items-center rounded border-0`}
          data-bs-toggle="collapse"
          data-bs-target="#filtros-collapse"
          aria-expanded="true"
        >
          <svg className="bi pe-none me-2" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <h4>Filtros</h4>
        </button>
        <ul className="list-unstyled ps-0" id="filtros-collapse">
          <li className={`mb-1`}>
            <button
              className={`${styles.lista} btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed`}
              data-bs-toggle="collapse"
              data-bs-target="#mascota-collapse"
              aria-expanded="false"
            >
              Tipo de Mascota
            </button>
            <div className="collapse" id="mascota-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Gato
                  </a>
                </li>
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Perro
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className={`${styles.lista} btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed`}
              data-bs-toggle="collapse"
              data-bs-target="#producto-collapse"
              aria-expanded="false"
            >
              Tipo de Producto
            </button>
            <div className="collapse" id="producto-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className={` link-body-emphasis d-inline-flex text-decoration-none rounded`}
                  >
                    Alimento
                  </a>
                </li>
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Accesorios
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};