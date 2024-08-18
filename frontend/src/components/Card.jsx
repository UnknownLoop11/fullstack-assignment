/* eslint-disable react/prop-types */
const Card = ({ title, description, link }) => {
  return (
    <a href={link}>
      <div className="bg-gray-200 p-3 flex flex-col items-start rounded-lg shadow-sm gap-2 justify-center h-auto hover:scale-105 hover:bg-gray-300  transition duration-150 ease-in">
        <div className="capitalize text-lg font-bold">{title}</div>
        <span className=" w-full border-b border-gray-400"></span>
        <div className="text-lg font-normal ">
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
