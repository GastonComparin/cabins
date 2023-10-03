import icon from "../../assets/refugio_verde.webp";
const NavBar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg "
        style={{
          backgroundColor: "#D68162",
        }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src={icon}
              alt=""
              style={{ height: "150px" }}
              class="d-none d-sm-block"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-4 py-1"
              style={{
                backgroundColor: "#EFE9DB",
                borderRadius: "1.25rem",
                fontWeight: "500",
                fontSize: "1.1em",
              }}
            >
              <li class="nav-item mx-1">
                <div class="dropdown pe-5 d-none d-sm-block">
                  <button
                    class="btn "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ¿Donde Vamos?
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      Aca deberia poder mapear todas las ubicaciones que tenga
                      disponibles
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item mx-1">
                <div class="dropdown pe-5 d-none d-sm-block">
                  <button
                    class="btn "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Fechas
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      Calendario para elegir fecha de inicio y fecha de fin
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item mx-1 b">
                <div class="dropdown pe-5 d-none d-sm-block">
                  <button
                    class="btn "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ¿Cuántos?
                  </button>
                  <ul class="dropdown-menu">
                    <li>Contador para seleccionar la cantidad de personas</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="dropdown pe-5 d-none d-sm-block">
          <button
            class="btn "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="60"
              viewBox="0 0 100 60"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="99"
                height="59"
                rx="19.5"
                fill="#EFE9DB"
                stroke="#DBA686"
              />
              <line x1="14" y1="23.5" x2="44" y2="23.5" stroke="#4B553A" />
              <line x1="14" y1="36.5" x2="44" y2="36.5" stroke="#4B553A" />
              <line x1="14" y1="30.5" x2="44" y2="30.5" stroke="#4B553A" />
              <circle cx="75" cy="29" r="15" fill="#4B553A" />
              <path
                d="M74.485 27.3346C77.0626 27.3346 79.1522 25.2449 79.1522 22.6673C79.1522 20.0896 77.0626 18 74.485 18C71.9073 18 69.8177 20.0896 69.8177 22.6673C69.8177 25.2449 71.9073 27.3346 74.485 27.3346Z"
                fill="#292D32"
              />
              <path
                d="M74.4852 29.3346C69.8085 29.3346 66 32.471 66 36.3355C66 36.5969 66.2054 36.8022 66.4667 36.8022H82.5035C82.7649 36.8022 82.9703 36.5969 82.9703 36.3355C82.9703 32.471 79.1618 29.3346 74.4852 29.3346Z"
                fill="#292D32"
              />
            </svg>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/profile">
                Cuenta
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/favoritos">
                Favoritos
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/viajes">
                Viajes
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
