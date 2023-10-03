const Profile = () => {
  return (
    <div>
      <div class="row d-flex justify-content-around mt-5 pt-5">
        <div class="col-sm-3 mb-3 mb-sm-0">
          <a href="/profile/info" style={{ textDecoration: "none" }}>
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Información Personal</h5>
                <p class="card-text">
                  Datos personales e información para poder contactarnos con
                  vos.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-sm-3">
          <a href="/profile/payment" style={{ textDecoration: "none" }}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Pagos realizados</h5>
                <p class="card-text">
                  Revisá pagos, cupones de descuento y tarjetas de regalo.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profile;
