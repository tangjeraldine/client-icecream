import { Outlet, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Welcome to the Ice Cream Museum</h3>
      <button
        onClick={() => {
          navigate("/list");
        }}>
        See All Ice Creams
      </button>
      <Outlet />
    </div>
  );
}
export default Main;
