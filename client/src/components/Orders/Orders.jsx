import { lazy, Suspense } from 'react';

const Order = lazy(() => import("./Order"));

const Orders = () => {
    return (
        <div className="orders_wrapper">
            <div className="container">
                <div className="title">
                    <h1>place orders</h1>
                </div>       
                <div className="orders">
                    <Suspense fallback={<div>Loading.......</div>}>
                        <Order />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Orders;