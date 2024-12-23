import Image from "next/image";

export default function Home() {
  return (
    <div className="px-10 py-6">
      <h1 className="text-3xl font bold mb-8">Cakes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="text-center">
          <Image src="/cake/almond.jpg" alt="Almond Fruits Tops " width={300} height={300} className="rounded-lg"/>
          <h2 className="text-xl font-semibold mt-4">Almond Fruits Top</h2>
          <p className="text-gray-500">Black</p>
          <p className="text-lg font-bold">75$</p>
        </div>

        <div className="text-center">
          <Image src="/cake/coco.jpg" alt="Coco Exotic" width={300} height={300} className="rounded-lg" />
          <h2 className="text-xl font-semibold mt-4">Coco Exotic</h2>
          <p className="text-gray-500">Black</p>
          <p className="text-lg font-bold">45$</p>
    
        </div>

        <div className="text-center">
          <Image src="/cake/mango.jpg" alt="Mango Tropicana" width={300} height={300} className="rounded-lg" />
          <h2 className="text-xl font-semibold mt-4">Mango Tropicana</h2>
          <p className="text-gray-500">Black</p>
          <p className="text-lg font-bold">45$</p>
    
        </div>

      </div>
    </div>
  );
}