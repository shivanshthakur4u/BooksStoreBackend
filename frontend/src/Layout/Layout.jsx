import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
function Layout({ children }) {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
