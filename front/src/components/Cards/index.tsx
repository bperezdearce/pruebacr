import ProductCard from "../Card";
import { IProductGridProps } from "@/interfaces/interfaces";
import { IProduct } from "@/interfaces/interfaces";

function ProductsGrid({products}:IProductGridProps) {
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-28 mb-6">
        {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product}/>
    ))}
       </div> 
    );
}

export default ProductsGrid;