import Separator from '@/shared/ui/Separator.tsx';
import Button from '@/shared/ui/Button.tsx';
import ExampleImage from '@/assets/storeDetail/Example.png';
import type { Order } from '@/page/OrderHistory/types.ts';

interface OrderItemProps {
  orderHistory: Order;
}

export default function OrderItem({ orderHistory }: OrderItemProps) {
  return (
    <li className="space-y-3.5 rounded-xl bg-white px-5 py-3.5">
      <div className="flex gap-1.5">
        <div className="h-[24px] w-[24px] shrink-0">
          <img
            src={ExampleImage}
            alt={'가게 이미지'}
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </div>
        <h3 className="text-sm font-semibold leading-5 text-gray-700">{orderHistory.storeName}</h3>
      </div>

      <h2 className="text-lg font-bold leading-7">픽업이 완료되었습니다</h2>

      <div className="space-x-2 text-xs font-medium leading-4 text-gray-400">
        <span>오후 12:55</span>
        <span>No.{orderHistory.orderId}</span>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex justify-between">
          <h4 className="text-sm font-semibold leading-5 text-gray-700">주문 내역</h4>
          <div className="text-xs font-medium leading-4 text-gray-400">
            2025년 8월 6일 오후 12:35
          </div>
        </div>
        {orderHistory.orderItems.map(item => (
          <div className="flex justify-between text-xs font-medium leading-4">
            <div>{item.productName}</div>
            <div className="space-x-6">
              <span className="text-gray-400">{item.quantity}</span>
              <span>{item.price}원</span>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      <div className="flex justify-between text-xs font-semibold leading-4">
        <h4>총 결제 금액</h4>
        <div>{orderHistory.totalPrice}원</div>
      </div>

      <div className="flex gap-2.5">
        <Button size="sm" className="flex-1">
          같은 메뉴 주문
        </Button>
        <Button variant="soft" size="sm" className="flex-1">
          리뷰 작성
        </Button>
      </div>
    </li>
  );
}
