import { Link } from "react-router-dom";

const BrandCard = ({ brandName, photo }) => {
    return (
        <Link to={`/products/byBrand/${brandName}`}>
        <div className="p-4">
            <div className="card shadow-xl relative overflow-hidden h-96 w-full transform transition-all duration-300 hover:scale-105 hover:brightness-125">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src={photo} alt={brandName} />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-4 bg-opacity-50 bg-black">
                    <h2 className="card-title text-white text-center">Brand: {brandName}</h2>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default BrandCard;