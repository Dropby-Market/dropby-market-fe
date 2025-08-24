import OrderItem from '@/page/OrderHistory/components/OrderItem.tsx';
import { useEffect, useState } from 'react';
import { httpMethod } from '@/shared/config/httpMethod.ts';
import { END_POINT } from '@/shared/constant/apis.ts';
import type { Order } from '@/page/OrderHistory/types.ts';

export default function OrderHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const data = await httpMethod<Order[]>(END_POINT.GET_ORDER_HISTORY, 'GET');
        setHistory(data);
        console.log(data);
      } catch (error) {
        console.error('주문내역 조회 실패', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div className="flex-1 bg-gray-100 p-4">
      <ul className="space-y-2.5">
        {Array.from({ length: 10 }).map((_, idx) => (
          <OrderItem key={idx} />
        ))}
      </ul>
    </div>
  );
}
