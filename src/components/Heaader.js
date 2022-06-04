import { Link } from "react-router-dom";


function Heaader() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <div>
        <Link to="/playland">Playland</Link>
      </div>
      <div />
    </div>
  );
}

export default Heaader;
