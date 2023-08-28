import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { get_order } from "../../actions";

const Order = () => {
    const dispatch = useDispatch();
    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () => dispatch(get_order()),
        staleTime: 1000000
    });

    if (error) return <div>error: {error}</div>

    if (isLoading) return <div>Loading...</div>

    if (data.length === 0) return <div>No order placed yet...........</div>

    return (
        <div className="order">
            <h4>placed on: <span>{data[0].placed_on}</span></h4>
            <h4>name: <span>{data[0].name}</span></h4>
            <h4>number: <span>{data[0].number}</span></h4>
            <h4>email: <span>{data[0].email}</span></h4>
            <h4>address: <span>{data[0].address}</span></h4>
            <h4>payment method: <span>{data[0].payment_method}</span></h4>
            <h4>your orders: <span>{data[0].your_orders.map(item => item).join(', ')}</span></h4>
            <h4>total price: <span>{data[0].total_price}</span></h4>
            <h4>payment status: <span>{data[0].payment_status}</span></h4>
        </div>
    )
}

export default Order;