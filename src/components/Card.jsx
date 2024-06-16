import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="w-72 border border-gray-400 rounded-xl p-5">
      <div className="w-full h-60">
        <img
          className="w-full h-full overflow-hidden rounded-xl object-cover"
          src={data?.url}
          alt=""
        />
      </div>
      <div className="text-center font-medium mt-2 text-gray-700">
        {data?.author}
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Card;
