import axios from "axios";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const auto =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dmV3aXNkbm1oYXd3ZnZqcWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NjU5NDcsImV4cCI6MjA0OTE0MTk0N30.yeR4GJtNtkQN_M6TVv-ZAw-wzgXT7MjiooEjMjKtexo";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dmV3aXNkbm1oYXd3ZnZqcWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NjU5NDcsImV4cCI6MjA0OTE0MTk0N30.yeR4GJtNtkQN_M6TVv-ZAw-wzgXT7MjiooEjMjKtexo";

const Register = ({
  showPass,
  data,
  setData,
  showPassword,
  error,
  setError,
}) => {
  const navigate = useNavigate()
  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!data.firstName || !data.email || !data.password) {
      setError("All fields must be filled.");
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

    axios
      .post(
        "https://utvewisdnmhawwfvjqgg.supabase.co/auth/v1/signup",
        {
          email: data.email,
          password: data.password,
          user_medata: {
            full_name: data.firstName,
          },
        },
        {
          headers: {
            apiKey: apiKey,
            Authorization: `Bearer ${auto}`,
          },
        }
      )
      .then(() => {
        alert("Check your verification email");
        navigate("/")
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred during registration.");
      });
  };

  return (
    <div className="login-form d-flex justify-content-center align-items-center">
      <div className="content-login text-center">
        <div className="row my-5 ">
          <div className="col-12">
            <div className="first">
              <div className="body px-5 py-3">
                <h3 className="py-4">Register</h3>
                <p className="py-2">
                  Have an account?
                  <Link className="reg" to={"/"}>
                    Login
                  </Link>
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-group text-center py-3">
                    <span className="input-group-text" id="addon-wrapping">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      value={data?.firstName}
                      onChange={handleChange}
                      name="firstName"
                    />
                  </div>
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
                      value={data?.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div className="input-group flex-nowrap py-3">
                    <span
                      className="input-group-text lock-pass"
                      id="addon-wrapping"
                      onClick={showPassword}
                    >
                      {showPass ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    <input
                      type={showPass ? "text" : "password"}
                      className="form-control py-2"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="addon-wrapping"
                      value={data?.password}
                      onChange={handleChange}
                      name="password"
                    />
                  </div>
                  <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                  <div className="foot d-flex flex-column py-3">
                    <button type="submit" className="mx-5 py-2">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
