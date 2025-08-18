import type { ReactNode } from 'react';
import Separator from '@/shared/ui/Separator.tsx';
import Tag from '@/shared/ui/Tag.tsx';

interface InfoSectionProps {
  title: string;
  children: ReactNode;
}

function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <>
      <h6 className="mb-3 text-sm font-semibold leading-5">{title}</h6>
      {children}
    </>
  );
}

export default function MarketInformation() {
  return (
    <>
      <InfoSection title="시장 정보">
        <div className="space-y-3">
          <div className="text-xs font-medium leading-4">
            <div className="inline-block w-[60px]">운영시간</div>
            <span>09:00~18:00</span>
          </div>
          <div className="text-xs font-medium leading-4">
            <div className="inline-block w-[60px]">장서는 날</div>
            <span>매월 1일, 6일, 11일, 16일, 21일, 26일</span>
          </div>
        </div>
      </InfoSection>
      <Separator className="my-3.5" />

      <InfoSection title="시장 소개">
        <p className="text-xs font-medium leading-4">
          천안 남산중앙시장은 천안의 중심지에 위치한 전통시장
        </p>
      </InfoSection>
      <Separator className="my-3.5" />

      <InfoSection title="편의 시설">
        <div className="space-x-1">
          <Tag>주차가능</Tag>
          <Tag>화장실</Tag>
          <Tag>반려견동반</Tag>
        </div>
      </InfoSection>
      <Separator className="my-3.5" />

      <InfoSection title="결제 수단">
        <div className="space-x-1">
          <Tag variant="blue">제로페이</Tag>
          <Tag variant="blue">민생회복 소비쿠폰</Tag>
        </div>
      </InfoSection>
    </>
  );
}
