/* eslint-disable react/prop-types */

const Button = (props) => {
  const { onClick, title } = props;

  return <button onClick={onClick}>{title}</button>;
};

export default Button;
