'use client'

import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '@/context/userContext';

const Orders = () => {
    const { getOrders, orders } = useContext(UserContext);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                await getOrders();
            } catch (error) {
                console.error("Error al obtener las órdenes", error);
            }
        };
    
        fetchOrders();
    }, [getOrders]);

    return (
        <div>
            <h2>Tus compras</h2>
            {orders.length > 0 ? (
                <ul>
                    {orders.map(order => (
                        <ul key={order.id}>
                            <p><strong>Estado de la Compra:</strong> {order.status}</p>
                            <p><strong>Fecha de la Compra:</strong> {new Date(order.date).toLocaleDateString()}</p>
                            <p><strong>Información de Usuario: </strong> {}</p>
                            <p><strong>Productos:</strong> 
                                    {order.products.map(product => (
                                        <li key={product.id}>{product.name} - {product.price}</li>
                                    ))}
                            </p>
                        </ul>
                    ))}
                </ul>
            ) : (
                <p>No existen órdenes para este usuario.</p>
            )}
        </div>
    );
};

export default Orders;
