import Link from 'next/link';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
            <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Not Found</h2>
            <p className="text-lg text-gray-700 mb-6">¡No hay nada aquí!.</p>
            <Link href="/home" className="text-blue-500 hover:underline">
                Return Home
            </Link>
        </div>
    );
}

export default NotFound;