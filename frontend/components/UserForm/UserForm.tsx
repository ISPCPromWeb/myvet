import styles from "./UserForm.module.css";
import { API_URL } from "@/api/constants";
import { useUserContext } from "@/context";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonSmall } from "../ButtonSmall";

export const UserForm = () => {
  const { user } = useUserContext();

  /* const user = JSON.parse(cookies().get("user")?.value || ""); */

  const handleUserUpdate = (form: FormData) => {
    /* "use server";

    form.set("id", user?.id);
    form.set("password", user?.password);
    form.set("pub_date", user?.pub_date);

    const res = await fetch(`${API_URL}/client/${user.id}`, {
      method: "PUT",
      body: form,
      credentials: "include",
    });

    redirect("/dashboard"); */
  };

  return (
    user !== null && (
      <>
        <h2>Bienvenide, {user.name}</h2>
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-6">Tus datos</h3>
          </div>
        </div>
        <form className="row g-3 pt-4 mt-4 mx-2" action={handleUserUpdate}>
          <div className="col-md-4">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
              defaultValue={user.name}
            />
          </div>
          <div className="col-md-4 ">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              name="surname"
              id="surname"
              required
              defaultValue={user.surname}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="dni" className="form-label">
              DNI (sin puntos)
            </label>
            <input
              type="text"
              className="form-control"
              name="dni"
              id="dni"
              placeholder="12345678"
              pattern="[0-9]{8}"
              required
              defaultValue={user.dni}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="0123456789"
              pattern="[0-9]{10}"
              defaultValue={user.phone}
              required
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="direccion" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              required
              defaultValue={user.address}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="ejemplo@gmail.com"
              id="email"
              required
              defaultValue={user.email}
            />
          </div>

          <div className="col-12 pt-4 my-4">
            <ButtonSmall name="Guardar cambios" type="submit" />
          </div>
        </form>
      </>
    )
  );
};
