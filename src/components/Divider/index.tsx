import "./index.css";

const Divider = ({
  noBottomPadding = false,
}: {
  noBottomPadding?: boolean;
}) => {
  return (
    <div className={`divider ${noBottomPadding ? "no-bottom-padding" : ""}`} />
  );
};

export default Divider;
