import Image from "next/image";
import styles from "./page.module.css";


const Contact = () => {
  return (
    <>
    <script>
      function hizoClick(): {`
              var nombre = document.getElementById("name").value;
        var correo = document.getElementById("email").value;
        if (nombre == "" || correo == "") {
          alert("Debes compeltar al menos tu nombre y tu correo")
        } else {
          alert("Tu mensaje Ha sido enviado!!!")
        }
      `}
    </script>
    
    <main>
      <section>
        <div className={`${styles.jumbotron} text-center`}>
          <div className="container-fluid bg-grey text-center">
            <h2 className={`${styles.h2} text-center`}>CONTACTÁ CON NOSOTROS</h2>
            <div className={`${styles.row}`}>
              <div className={`${styles.colSm5} `}>
                <p className="col-md-6 align-self-center">
                  MyPet es un sistema de Gestión Integral desarrollado pensando
                  exclusivamente en las necesidades de las veterinarias. Con
                  este sistema podrás gestionar clientes, historias clínicas,
                  calendarios de vacunación, turnos, de manera más ordenada y
                  eficiente. Por dudas, consultas, o simplemente para solicitar
                  más información contactanos!!! Te responderemos en un plazo de
                  24 horas.
                </p>
              </div>
{/* <!--<<<<<<< HEAD
              <textarea className="form-control" id="comments" name="comments" placeholder="Mensaje..."
                rows="5"></textarea><br>
              <div className="row">
                <div className="col-sm-12 form-group">
                  <a className="vincnav btn" href="#">Enviar</a>
                </div>
                <form action="/layout">
                  <button                  
                    type="button"
                    onclick="location.href = '/layout';"
                    className="btn vincnav w-100">                  >
                    Iniciar Sesión
                  </button>
=======--> */}
              <div className={`${styles.colSm7} text-center`}>
                <form action="/cotactoConsulta" method="POST" encType="multipart/form-data">
                  <div className={`${styles.row}`}>
                    <div className="col-sm-4 form-group">
                      <input
                        className="form-control"
                        id="txtNombre"
                        name="txtNombre"
                        placeholder="Nombre"
                        type="text"
                        aria-label="Ingresa tu nombre"
                        required
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <input
                        className="form-control"
                        id="txtEmail"
                        name="txtEmail"
                        placeholder="Email"
                        type="email"
                        aria-label="Ingresa tu correo electronico"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    className="form-control col-sm-3 mt-3"
                    id="txtMensaje"
                    name="txtMensaje"
                    aria-label="Ingresa tu mensaje"
                    placeholder="Mensaje..."
                    rows={5}
                  ></textarea><br />
                  <div className={`${styles.row}`}>
                    <div className="col-sm-12 form-group">
                      <button
                        className={`${styles.btn}
                         btn-primary`}
                        type="submit"
                        // onClick="hizoClick()"
                      >
                        Enviar
                      </button>
                      <div className={`${styles.consulta} mt-3`}>
                        {`{% block envio %}
                        {% if consultaEnviada == "True" %}
                          <h4>Su consulta fue enviada con exito.</h4>
                        {% else %} 
                          
                        {% endif %}
                        {% endblock envio %}`}
                      </div>
                    </div>
                  </div>
{/* <!-- main--> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto">
        <div className="container w-50 m-auto text-center" id="equipo">
          <h2 className="my-5 fs-2">
            Equipo pequeño con
            <span className="fw-bold"> resultados Grandes</span>.
          </h2>
          <p className="fs-4">Te presentamos al equipo detrás de My Pet</p>
        </div>

        <div className="mt-5 text-center pb-4">
          <img id="img-equipo" src="#" alt="" />
          <div className="container text-center">
            <div className={`${styles.row}`}>
              <div className="col-sm-6 text-center ">
                <h3 className={`${styles.h3}`}>GUADA PADIN ROJAS</h3>
                <h4>Desarrolladora</h4>
                <p>Contacto:</p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/guadalupepadinrojas/"
                    aria-label="LinkedIn de Guada Padin Rojas"
                    ><img
                      src="../static/Img/LogoLinkedInP1.png"
                      alt=""
                      height="50"
                      width="50"
                  /></a>
                </p>
                <p>
                  <a
                    href="https://github.com/GPRNomade"
                    aria-label="GitHub de Guada Padin Rojas"
                    ><img
                      src="../static/Img/LogoGithubP1.png"
                      alt=""
                      height="50"
                      width="50"
                  /></a>
                </p>
                <p className="fw-bold">GPRNomade</p>
              </div>
              <div className="col-sm-6 text-center ">
                <h3 className={`${styles.h3}`}>PATRICIA CASTILLO</h3>
                <h4>Desarrolladora</h4>
                <p>Contacto:</p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/xxxx"
                    aria-label="LinkedIn de Patricia Castillo"
                    ><img
                      src="../static/Img/LogoLinkedInP1.png"
                      alt=""
                      height="50"
                      width="50"
                  /></a>
                </p>
                <p>
                  <a
                    href="https://github.com/xxxx"
                    aria-label="GitHub de Patricia Castillo"
                    ><img
                      src="../static/Img/LogoGithubP1.png"
                      alt=""
                      height="50"
                      width="50"
                  /></a>
                </p>
                <p className="fw-bold">Carofgit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Contact;