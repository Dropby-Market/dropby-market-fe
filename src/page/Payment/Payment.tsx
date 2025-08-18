import { useNavigate } from 'react-router-dom';
import Button from '@/shared/ui/Button.tsx';
import BottomButton from '@/layout/Bottom/BottomButton.tsx';
import BottomSheet from '@/shared/ui/BottomSheet.tsx';
import Separator from '@/shared/ui/Separator.tsx';
import ArrowIcon from '@/assets/layout/ArrowIcon.svg?react';
import OrderCompleteImg from '@/assets/ui/OrderCompleteImg.png';
import { ROUTE_PATHS } from '@/shared/constant/routes.ts';

const options = ['신용/체크카드', '계좌이체', '현장결제'];

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-gray-100">
      <section className="space-y-1.5">
        <div className="py-4.5 flex justify-between bg-white px-4">
          <h4 className="text-sm font-semibold leading-5">주문 상품</h4>
          <div className="flex items-center gap-1">
            <div className="text-xs font-semibold leading-4">못난이 사과 1봉지 외 3건</div>
            <ArrowIcon className="text-gray-400" />
          </div>
        </div>

        <div className="py-4.5 flex justify-between bg-white px-4">
          <h4 className="text-sm font-semibold leading-5">주문자 정보</h4>
          <div className="flex items-center gap-1">
            <div className="text-xs font-semibold leading-4">홍길동</div>
            <div className="text-xs font-semibold leading-4">010-1010-4040</div>
            <ArrowIcon className="text-gray-400" />
          </div>
        </div>

        <div className="py-4.5 space-y-3 bg-white px-4">
          <h4 className="text-sm font-semibold leading-5">결제 수단</h4>
          {options.map((label, idx) => (
            <label className="flex cursor-pointer gap-1 text-sm font-medium leading-5" key={idx}>
              <input
                type="radio"
                name="payment"
                value={label}
                className="h-6 w-6 appearance-none rounded-full border-2 border-gray-300 bg-white checked:border-8 checked:border-gray-800"
                defaultChecked={label === '신용/체크카드'}
              />
              {label}
            </label>
          ))}
        </div>

        <div className="py-4.5 space-y-3 bg-white px-4">
          <h4 className="text-sm font-semibold leading-5">결제 금액</h4>
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium leading-4">총 결제 금액</div>
            <div className="text-lg font-semibold leading-7 text-red-500">63,000원</div>
          </div>
        </div>
      </section>

      <BottomSheet.Root>
        <BottomButton>
          <BottomSheet.Trigger asChild>
            <Button className="w-full">63,000원 결제하기</Button>
          </BottomSheet.Trigger>
        </BottomButton>
        <BottomSheet.Content>
          <BottomSheet.Header>
            <img src={OrderCompleteImg} alt="completeImage" className="mx-auto" />
            <h2 className="mb-2.5 mt-5 text-center text-xl font-bold leading-7">
              주문이 시장에 전해졌어요
            </h2>
            <p className="text-center text-sm font-medium leading-5 text-gray-500">
              픽업 준비되면 알림 보내드릴게요! <br />곧 들르러 오세요 :)
            </p>
          </BottomSheet.Header>
          <BottomSheet.Body>
            <div className="py-6.5 mt-10 rounded-xl bg-gray-100 px-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold leading-5">주문 내역</h3>
                <div className="space-x-4 text-xs font-medium leading-4">
                  <span>오후 12:35</span>
                  <span>No.A001</span>
                </div>
              </div>
              <Separator className="my-3.5 bg-gray-200" />
              <h4 className="mb-1.5 text-xs font-semibold leading-4">못난이 사과</h4>
              <div className="flex justify-between text-xs font-medium leading-4">
                <div className="text-gray-500">못난이 사과 1봉지</div>
                <div className="space-x-6">
                  <span className="text-gray-400">1</span>
                  <span className="text-gray-500">13,000원</span>
                </div>
              </div>
              <Separator className="my-3.5 bg-gray-200" />
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold leading-5">결제 금액</h3>
                <div className="text-sm font-semibold leading-5 text-red-500">63,000원</div>
              </div>
            </div>

            <BottomButton>
              <Button
                variant="soft"
                className="flex-1"
                onClick={() => navigate(`/${ROUTE_PATHS.ORDER_HISTORY}`)}
              >
                닫기
              </Button>
              <Button className="flex-1" onClick={() => navigate(`/${ROUTE_PATHS.PICKUP}`)}>
                픽업동선 보러가기
              </Button>
            </BottomButton>
          </BottomSheet.Body>
        </BottomSheet.Content>
      </BottomSheet.Root>
    </div>
  );
}
