import CheckboxGroup from '@/shared/ui/CheckboxGroup.tsx';
import Separator from '@/shared/ui/Separator.tsx';
import TestImg from '@/assets/home/TestImg.png';
import XIcon from '@/assets/ui/XIcon.svg?react';
import { Counter } from '@/shared/ui/Counter.tsx';

export default function CartItem() {
  return (
    <div className="space-y-3.5 rounded-xl bg-white px-2.5 py-3.5">
      <CheckboxGroup.Root options={['apple', 'banana', 'cherry']}>
        <CheckboxGroup.Item value="all" isSelectAll>
          <div className="flex items-center gap-1.5">
            <div className="h-[24px] w-[24px] shrink-0">
              <img
                src={TestImg}
                alt={'시장 이미지'}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <span className="text-sm font-semibold leading-5 text-gray-700">못난이 사과</span>
          </div>
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="apple">
          <div className="mb-3.5 flex items-start gap-2.5">
            <div className="h-[56px] w-[56px] shrink-0">
              <img
                src={TestImg}
                alt={'시장 이미지'}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <span className="flex-1 text-xs font-semibold leading-4">못난이 사과 1봉지</span>
            <button>
              <XIcon />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Counter />
            <span className="text-xs font-semibold leading-4">13,000원</span>
          </div>
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="banana">
          <div className="mb-3.5 flex items-start gap-2.5">
            <div className="h-[56px] w-[56px] shrink-0">
              <img
                src={TestImg}
                alt={'시장 이미지'}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <span className="flex-1 text-xs font-semibold leading-4">못난이 사과 1봉지</span>
            <button>
              <XIcon />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Counter />
            <span className="text-xs font-semibold leading-4">13,000원</span>
          </div>
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="cherry">
          <div className="mb-3.5 flex items-start gap-2.5">
            <div className="h-[56px] w-[56px] shrink-0">
              <img
                src={TestImg}
                alt={'시장 이미지'}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <span className="flex-1 text-xs font-semibold leading-4">못난이 사과 1봉지</span>
            <button>
              <XIcon />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Counter />
            <span className="text-xs font-semibold leading-4">13,000원</span>
          </div>
        </CheckboxGroup.Item>
      </CheckboxGroup.Root>
      <Separator />

      <div className="space-x-2.5 text-center text-xs leading-4">
        <span className="font-medium text-gray-400">총 상품 금액</span>
        <span className="font-semibold">13000원</span>
      </div>
    </div>
  );
}
