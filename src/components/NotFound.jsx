import { useNavigate } from "react-router-dom";

const NotFound = ({ logged }) => {
  const navigate = useNavigate();

  const loggedClick = () => {
    if (logged) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="not-found">
      <div className="left">
        <h1>So Sorry!</h1>
        <h3>
          The page you are looking for <br /> cannot be found
        </h3>

        <button onClick={loggedClick} style={{color :  "white"}}>
            Home
        </button>
      </div>
      <div className="right">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/404-illustration-download-in-svg-png-gif-file-formats--error-bug-not-found-page-ecommerce-pack-e-commerce-shopping-illustrations-4781255.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
