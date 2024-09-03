import Orders from "@/components/OrderList";

async function Dashboard() {

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Mi cuenta</h1>
            <Orders />
        </div>
    )
};

export default Dashboard;