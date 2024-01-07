const ArrowIconSmall = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="12"
      height="12"
      className={props.className}
      onClick={props.onClick}
    >
      <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
    </svg>
  );
};

export default ArrowIconSmall;
