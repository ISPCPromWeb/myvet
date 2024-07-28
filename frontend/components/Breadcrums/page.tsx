import styles from "./page.module.css";

const Breadcrumbs = (props) => {
  const { name } = props;
  return (
    <nav className="breadcrumb align-top justify-content-end pt-3 pe-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a className={`${styles.vinculos} `} href="/" title="My Vet">
            Inicio
          </a>
        </li>
        <li className="breadcrumb-item">
          <a className={`${styles.vinculos} `} href="/store" title="Tienda">
            Tienda
          </a>
        </li>
        <li className="breadcrumb-item active">
          <span className={`${styles.vinculosActive}`}>{name}</span>{" "}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
// puedo elegir name, price o q quiera del objeto, siempre y cuando se lo pase en la instancia (lo q pongas en la pdp). Data binding, one way binding, entre componentes del front. Los vinculos podrían ser un componente en sí mismo.
