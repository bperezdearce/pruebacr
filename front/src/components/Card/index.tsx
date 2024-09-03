import Image from 'next/image';
import Link from 'next/link';
import { IProductCardProps } from '@/interfaces/interfaces';
import AddToCart from '../AddToCart';

function ProductCard({product}: IProductCardProps) {
    return (
        <div className="bg-background-color rounded-lg shadow-lg overflow-hidden w-full max-w-[400px] h-[450px]">
                <Link href={`/detail/${product.id}`}>
                    <Image 
                        alt={product.name} 
                        src={product.image}
                        width={400}
                        height={400}
                        className= "w-full h-[300px] object-contain transition-transform duration-300 ease-in-out hover:scale-90"
                        style={{ aspectRatio: "400/400", objectFit: "contain"}}
                    />
                </Link>
                <div className="p-4">
                    <h3 className="text-2xl font-garamondbold mb-2 text-text-color">
                        {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                        <div className="font-garamondregular text-text-color text-xl">
                            ${product.price}    
                        </div>  
                        <AddToCart id={product.id}/>
                    </div>    
                </div>
        </div>
    );
};

export default ProductCard;