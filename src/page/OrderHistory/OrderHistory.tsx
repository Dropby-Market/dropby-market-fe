import OrderItem from '@/page/OrderHistory/components/OrderItem.tsx';

export default function OrderHistory() {
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
