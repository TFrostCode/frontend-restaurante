import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Asegúrate de tener esto instalado

const Login = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center ">
      <div
        className="row rounded-4 overflow-hidden shadow-lg"
        
      >
        {/* Formulario */}
        <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
          <div className="text-center mb-4">
            <i className="bi bi-person-circle" style={{ fontSize: '3rem', color: '#007bff' }}></i>
            <h2 className="mt-2 fw-bold" style={{ color: '#007bff' }}>¡Inicia Sesión!</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Nombre de usuario</label>
              <input type="text" className="form-control rounded-3" id="email" placeholder="chelita123" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">Contraseña</label>
              <input type="password" className="form-control rounded-3" id="password" placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-3 py-2 fw-semibold">
              Ingresar
            </button>
          </form>
        </div>

        {/* Imagen */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="src/assets/Chelita.jpg"
            alt="Imagen de login"
            className="img-fluid h-100 w-100 p-4"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
