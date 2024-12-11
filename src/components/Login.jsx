import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const auto =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dmV3aXNkbm1oYXd3ZnZqcWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NjU5NDcsImV4cCI6MjA0OTE0MTk0N30.yeR4GJtNtkQN_M6TVv-ZAw-wzgXT7MjiooEjMjKtexo";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dmV3aXNkbm1oYXd3ZnZqcWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NjU5NDcsImV4cCI6MjA0OTE0MTk0N30.yeR4GJtNtkQN_M6TVv-ZAw-wzgXT7MjiooEjMjKtexo";

const Login = ({
  setToken,
  showPass,
  data,
  setData,
  showPassword,
  error,
  setError,
}) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!data.email || !data.password) {
      setError("All fields must be filled!");
      return;
    }

    if (!emailRegex.test(data.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(data.password)) {
      setError(
        "Password must be at least 8 characters long and contain both letters and numbers."
      );
      return;
    }

    setError("");

    axios
      .post(
        "https://utvewisdnmhawwfvjqgg.supabase.co/auth/v1/token?grant_type=password",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            apiKey: apiKey,
            Authorization: `Bearer ${auto}`,
          },
        }
      )
      .then((res) => {
        setToken(res?.data);
        navigate("/home");
      })
      .catch((err) => {
        alert(err?.response?.data?.msg);
      });
  };

  return (
    <div>
      <div className="login-form d-flex justify-content-center align-items-center">
        <div className="content-login text-center">
          <div className="row my-5">
            <div className="col-12">
              <div className="first">
                <div className="body px-5 py-3">
                  <h3 className="py-4">Login</h3>
                  <p className="py-2">
                    Don't have an account?
                    <Link className="reg" to={"/register"}>
                      Register
                    </Link>
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="input-group text-center py-3">
                      <span className="input-group-text" id="addon-wrapping">
                        @
                      </span>
                      <input
                        type="email"
                        className="form-control py-2"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="addon-wrapping"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group flex-nowrap py-3">
                      <span
                        className="input-group-text"
                        id="addon-wrapping"
                        onClick={showPassword}
                        style={{ cursor: "pointer" }}
                      >
                        {showPass ? <FaEye /> : <FaEyeSlash />}
                      </span>
                      <input
                        type={showPass ? "text" : "password"}
                        className="form-control py-2 input-first"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="addon-wrapping"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                    <div className="foot d-flex flex-column py-3">
                      <button className="mx-5 py-2" type="submit">
                        Log In
                      </button>
                      <a href="/" className="py-3">
                        Forgot Your Password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
