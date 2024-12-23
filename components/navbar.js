import Link from "next/link";

const Navbar = () =>(
    <nav className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4">
            <h1 className="text-xl font-bold">Bakery</h1>
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/promotions">Promotions</Link>
                <Link href="/about">About Us</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;