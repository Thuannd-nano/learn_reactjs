import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul  className=" bg-gray md:w-1/2 mx-auto text-gray-700 body-font">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">products</Link>
          </li>
          <li>
            <Link to="/detail">Product detail</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;