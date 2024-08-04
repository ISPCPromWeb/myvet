// import { productsApi } from "@/api/products";

import styles from "./Column.module.css";

interface ColumnProps {
  size: number;
  children: React.ReactNode;
}

export const Column = async (props: ColumnProps) => {
  const { size, children } = props;
  return <div className={`d-flex col-lg-${size} icono-wrap`}>{children}</div>;
};
