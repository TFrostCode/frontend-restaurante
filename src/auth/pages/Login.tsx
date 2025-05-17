import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div
        className="row rounded-5 overflow-hidden shadow-lg w-100"
        style={{ maxWidth: "1150px" }}
      >
        {/* Formulario */}
        <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
          <div className="mb-4 d-flex align-items-center gap-1">
            <img
              src="/src/assets/img/logo.jpg"
              alt="Logo del restaurante Chelita"
              className="img-fluid rounded-circle"
              style={{ width: "90px", height: "90px", objectFit: "cover" }}
            />
            <div>
              <p className="mb-0 h3">RESTAURANTE CEVICHERIA</p>
              <p className="fw-bold text-danger d-md h3">CHELITA</p>
            </div>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                Nombre de usuario
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                id="username"
                placeholder="chelita123"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control rounded-3"
                id="password"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger w-100 rounded-3 py-2 fw-semibold"
            >
              Ingresar
            </button>
          </form>
        </div>

        {/* Imagen lateral */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/src/assets/img/Chelita.jpg"
            alt="Cevichería Chelita"
            className="img-fluid h-100 w-100 p-3"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
