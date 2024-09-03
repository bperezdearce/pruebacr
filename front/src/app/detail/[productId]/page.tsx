import Image from "next/image";
import fetchProductById from "@/lib/server/fetchProductById";
import AddToCart from "@/components/AddToCart";

async function ProductDetail({ params }: { params: { productId: string } }) {
    const product = await fetchProductById(params.productId);

    return (
        <div className="bg-background-color text-text-color min-h-fit p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="mb-6 rounded-lg shadow-md"
            />
            <p className="text-lg mb-4 text-center max-w-xl">{product?.description}</p>
            <p className="text-2xl font-semibold mb-6">$ {product?.price}</p>
            <AddToCart id={product.id} />
        </div>
    );
}

export default ProductDetail;