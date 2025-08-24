import Tag from '@/shared/ui/Tag.tsx';
import BottomSheet from '@/shared/ui/BottomSheet.tsx';
import Tabs from '@/shared/ui/Tabs.tsx';
import Button from '@/shared/ui/Button.tsx';
import MarketInformation from '@/page/Market/components/MarketInformation.tsx';
import MarketStoreItem from '@/page/Market/components/MarketStoreItem.tsx';
import TestImg from '@/assets/home/TestImg.png';
import StarIcon from '@/assets/ui/StarIcon.svg?react';
import ArrowIcon from '@/assets/layout/ArrowIcon.svg?react';
import MarketLocationIcon from '@/assets/ui/MarketLocationIcon.svg?react';
import type { Market } from '@/page/Market/types.ts';

interface MarketDetailProps {
  market: Market;
}

export default function MarketDetail({ market }: MarketDetailProps) {

  return (
    <>
      <BottomSheet.Root>
        <BottomSheet.Trigger asChild>
          <li className="flex">
            <div className="h-[76px] w-[76px] shrink-0">
              <img
                src={TestImg}
                alt={'시장 이미지'}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>

            <div className="mx-3 flex-1 space-y-1.5 overflow-hidden">
              <h5 className="truncate text-base font-semibold leading-6">{market.name}</h5>

              <div className="flex items-center text-xs font-medium leading-4">
                <StarIcon />
                <span className="text-gray-500">4.8</span>
                <span className="text-gray-400">(999+)</span>
                <span className="text-gray-500">· 도보 1분</span>
              </div>

              <div className="space-x-0.5">
                <Tag variant="green">영업중</Tag>
                <span className="text-xs font-medium leading-4 text-gray-500">07:00 ~ 18:00</span>
              </div>
            </div>
          </li>
        </BottomSheet.Trigger>

        <BottomSheet.Content>
          <BottomSheet.Body>
            <div className="mb-5 h-[76px] w-full">
              <img
                src={TestImg}
                alt={'시장 이미지'}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>

            <div className="mb-5 flex gap-2.5">
              <div className="flex-1">
                <div className="sticky top-0 flex justify-between bg-white">
                  <div>
                    <div className="mb-1 flex items-center gap-0.5">
                      <MarketLocationIcon />
                      <div className="text-xs font-semibold leading-4 text-green-600">
                        내가 선택한 시장
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold leading-7">천안역전시장</h2>
                  </div>

                  <div className="shrink-0">
                    <Button variant="default" size="sm">
                      시장 선택
                    </Button>
                  </div>
                </div>

                <div className="mt-1 flex items-center text-sm font-medium leading-5">
                  <StarIcon />
                  <span className="text-gray-500">4.2</span>
                  <span className="text-gray-400">(48)</span>
                  <span className="text-gray-500">· 전화 {market.phoneNumber}</span>
                </div>

                <div className="flex items-center text-xs font-medium leading-4 text-gray-500">
                  <span>도보 15분</span>
                  <span>· 충남 천안시 동남구 사직동</span>
                  <ArrowIcon />
                </div>

                <div className="space-x-0.5">
                  <Tag variant="green">영업중</Tag>
                  <span className="text-xs font-medium leading-4 text-gray-500">07:00 ~ 18:00</span>
                </div>
              </div>
            </div>

            <Tabs.Root defaultValue="store">
              <Tabs.List>
                <Tabs.Trigger value="store">가게</Tabs.Trigger>
                <Tabs.Trigger value="review">리뷰</Tabs.Trigger>
                <Tabs.Trigger value="information">정보</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="store">
                <ul className="space-y-5">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <MarketStoreItem key={idx} />
                  ))}
                </ul>
              </Tabs.Content>
              <Tabs.Content value="review">
                <p>리뷰</p>
              </Tabs.Content>
              <Tabs.Content value="information">
                <MarketInformation />
              </Tabs.Content>
            </Tabs.Root>
          </BottomSheet.Body>
        </BottomSheet.Content>
      </BottomSheet.Root>
    </>
  );
}
