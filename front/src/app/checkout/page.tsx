import Cart from "@/components/Cart";

function Checkout() {
    return (
        <div className="bg-white text-black min-h-screen p-8">
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="font-semibold flex items-center">
                    <span>PRODUCTO</span>
                </div>
                <div className="font-semibold flex items-center justify-center">
                    <span>PRECIO</span>
                </div>
                <div className="font-semibold flex items-center justify-end">
                    <span>ELIMINAR DEL CARRITO</span>
                </div>
            </div>

            <Cart />

        </div>
    );
}

export default Checkout;