import Mainheader from "./main-header";

const Layout = ({ children }) => {
  return (
    <>
      <Mainheader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
