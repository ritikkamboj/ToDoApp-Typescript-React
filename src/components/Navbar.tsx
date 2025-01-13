import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/?todo=all">All</Link>
      <Link to="/?todo=pending">Pending</Link>
      <Link to="/?todo=completed">Active</Link>
    </nav>
  );
}

export default Navbar;
