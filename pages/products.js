import ProductCard from "@/components/ProuductCard";

export default function Products() {
    const products =[
        { image: "/cake/cinnamonroll1.jpg", name: "Cinnamonroll", price: "10"},
        { image: "/cake/croissant1.jpg", name: "Croissant" , price: "20"},
        { image: "/cake/Donuts1.jpg", name: "Donuts" , price: "15"},

    ];

    return(
        <div className="container mx-auto px-4 p-10">
            <h1 className="text-3xl font-bold mb-4">Our  Products</h1>
            <p className="mb-6">Explore our delicious range of Cakes, Cinnamonroll, Donuts and many more!</p>
            <h2 className="text-2xl font-bold mb-4">Other Varities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                    key={index}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}