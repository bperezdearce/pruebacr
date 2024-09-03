import { IProductCardProps } from "@/interfaces/interfaces";
import Image from "next/image";

function CartItem({ product, remove }: IProductCardProps) {
    return (
        <div className="flex w-full border-b border-gray-300 py-4 font-garamondbold">
            <div className="w-1/3 flex items-center">
                <div className="w-32 h-32 relative mr-6">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                    />
                </div>
                <span>{product.name}</span>
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <span>${product.price}</span>
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <button onClick={remove} className="text-red-500 hover:text-red-700">
                    X
                </button>
            </div>
        </div>
    );
}

export default CartItem;
