const ProductCard = ({ image, nama, price }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={nama} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font semibold">{nama}</h3>
            <p className="text-gray-600">${price}</p>
        </div>
    </div>
);

export default ProductCard;