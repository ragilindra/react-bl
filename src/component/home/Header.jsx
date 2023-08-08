/* eslint-disable react/prop-types */

const Header = ({ children }) => {
  return (
    <>
      <h1 className=" text-8xl text-slate-500 font-bold">{children}</h1>
    </>
  );
};

export default Header;
