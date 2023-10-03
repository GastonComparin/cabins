import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCabinDetail } from "../../redux/actions";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cabin = useSelector((state) => state.cabinDetail);

  useEffect(() => {
    dispatch(getCabinDetail(id));
  }, [dispatch, id]);
  return (
    <div class="col-8 mx-auto mt-5">
      <div class="card mb-3 bg-transparent border-0">
        <div class="card-body">
          <h2 class="card-title">{cabin.name}</h2>
          <div class="d-flex justify-content-between">
            <div>
              <span>puntuacion </span>
              <span>{cabin.direction}</span>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 27 28"
                  fill="none"
                >
                  <path
                    d="M7.02774 5.50826L18.9777 1.52496C24.3403 -0.262599 27.2539 2.66506 25.4804 8.02774L21.4971 19.9776C18.8228 28.0146 14.4313 28.0146 11.757 19.9776L10.5747 16.4306L7.02774 15.2483C-1.00924 12.574 -1.00924 8.19664 7.02774 5.50826Z"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8422 15.8255L15.8811 10.7725"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                >
                  <path
                    d="M14.275 23.1375C13.85 23.2875 13.15 23.2875 12.725 23.1375C9.1 21.9 1 16.7375 1 7.9875C1 4.125 4.1125 1 7.95 1C10.225 1 12.2375 2.1 13.5 3.8C14.7625 2.1 16.7875 1 19.05 1C22.8875 1 26 4.125 26 7.9875C26 16.7375 17.9 21.9 14.275 23.1375Z"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <img src={cabin.image} class="card-img-top" alt="..." />
          <div class="d-flex justify-content-between my-5">
            <div class="col-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                quod similique. Nesciunt molestiae alias delectus. Earum
                nesciunt quasi inventore quia, placeat molestias animi corrupti
                doloremque qui omnis illo rem corporis nulla error nihil
                temporibus! Placeat esse sint nihil accusantium illo recusandae
                soluta optio assumenda facilis. Suscipit provident consequatur
                perspiciatis autem!
              </p>
            </div>
            <div class="container">
              <div class="row">
                <div class="card col-12 bg-transparent">
                  <div class="card-body">
                    <h5 class="card-title">${cabin.price} USD noche</h5>

                    {/* !esto es un boton */}
                    <div class="d-flex">
                      <div class="col">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle border-bottom-0 bg-transparent"
                            style={{
                              width: "100%",
                              borderRadius: "1.25rem 0rem 0rem 0rem",
                              borderTop: "1px solid rgba(214, 129, 98, 0.80)",
                              borderRight: "1px solid rgba(214, 129, 98, 0.80)",
                              borderLeft: "1px solid rgba(214, 129, 98, 0.80)",
                            }}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            CheckIn
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="#">
                                calendario
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* !esto es otro boton */}

                      <div class="col">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle border-bottom-0 border-start-0 bg-transparent"
                            style={{
                              width: "100%",
                              borderRadius: "0rem 1.25rem 0rem 0rem",
                              borderTop: "1px solid rgba(214, 129, 98, 0.80)",
                              borderRight: "1px solid rgba(214, 129, 98, 0.80)",
                            }}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            CheckOut
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <p class="dropdown-item">Calendario</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="dropdown">
                        <button
                          class="dropdown-toggle bg-transparent"
                          style={{
                            width: "100%",
                            borderRadius: "0rem 0rem 1.25rem 1.25rem",
                            border: "1px solid rgba(214, 129, 98, 0.80)",
                          }}
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Viajeros
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <p class="dropdown-item">contador</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <a href="#" class="btn btn-primary mb-3">
                    Reservar
                  </a>
                  <p>precio total por las x noches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
