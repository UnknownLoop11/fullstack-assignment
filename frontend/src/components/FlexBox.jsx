/* eslint-disable react/prop-types */
const FlexBox = ({ title, children }) => {
  return (
    <div className="text-white flex flex-col items-start gap-y-8">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-sm font-normal">{children}</div>
    </div>
  );
};

export default FlexBox;
