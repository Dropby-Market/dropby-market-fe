import CartItem from '@/page/Cart/components/CartItem.tsx';
import Separator from '@/shared/ui/Separator.tsx';
import BottomButton from '@/layout/Bottom/BottomButton.tsx';
import Button from '@/shared/ui/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/shared/constant/routes.ts';
import { useEffect, useState } from 'react';
import type { Cart } from '@/page/Cart/types.ts';
import axios from 'axios';

export default function Cart() {
  const navigate = useNavigate();

  const [carts, setCarts] = useState<Cart | undefined>();

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const url = new URL('./mock.json', import.meta.url).href;
        const { data } = await axios.get<Cart>(url);
        console.log(data)
        setCarts(data);
      } catch (error) {
        console.error('마켓 조회 실패', error);
      }
    };

    fetchCarts();
  }, []);

  if (!carts) {
    return (
      <div className="flex flex-1 flex-col bg-gray-100">
        <div className="flex-1 flex items-center justify-center">
          <div>로딩 중...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col bg-gray-100">
      <section className="pb-6.5 flex-1 space-y-2.5 p-4">
        <CartItem cartItems={carts.cartItems} />
      </section>

      <div className="space-y-2.5 bg-white px-4 py-5 text-xs leading-4">
        <div className="flex justify-between">
          <div>구매 가게</div>
          <div className="font-semibold">3곳</div>
        </div>
        <div className="flex justify-between">
          <div>선택 상품</div>
          <div className="font-semibold">4개</div>
        </div>
        <div className="flex justify-between">
          <div>상품 금액</div>
          <div className="font-semibold">{carts.totalCartPrice}</div>
        </div>
        <Separator />
        <div className="flex justify-between">
          <div>총 결제 예정 금액</div>
          <div className="text-lg font-semibold leading-7 text-red-500">{carts.totalCartPrice}</div>
        </div>
      </div>

      <BottomButton>
        <Button
          className="w-full"
          onClick={() => {
            navigate(`/${ROUTE_PATHS.PAYMENT}`);
          }}
        >
          {carts.totalCartPrice} 주문하기
        </Button>
      </BottomButton>
    </div>
  );
}
