import PropTypes from "prop-types";

function Card({ item }) {
  console.log("data:", item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div
          className="card card-compact w-92 bg-base-100 shadow-xl hover:scale-105
         duration-200 dark:bg-slate-900 dark:text-white dark:border"
        >
          <figure>
            <img src={item?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item?.name}{" "}
              <div className="badge badge-secondary">{item?.category}</div>
            </h2>
            <p>{item?.title}</p>
            <div>
              <div className="card-actions justify-between items-center">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-secondary cursor-pointer px-4 py-3 hover:bg-white hover:text-pink-500 duration-300">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
