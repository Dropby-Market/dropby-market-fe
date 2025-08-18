import TestImg from '@/assets/home/TestImg.png';
import Tag from '@/shared/ui/Tag.tsx';

export default function NotificationItem() {
  return (
    <div className="flex gap-3">
      <div className="h-[56px] w-[56px] shrink-0">
        <img
          src={TestImg}
          alt={'알림 이미지'}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>

      <div className="space-y-2 overflow-hidden">
        <div className="flex flex-1 items-center gap-2">
          {/*<Tag variant="green">New</Tag>*/}
          <h5 className="truncate text-sm font-semibold leading-5">집에 가고싶다 </h5>
        </div>
        <p className="text-xs font-medium leading-4 text-gray-700">
          주문이 접수되었습니다. 픽업이 준비되면, 알림을 보내드릴게요. (예상 소요시간:
          <span className="text-green-500"> 10분</span>)
        </p>
        <span className="text-xs font-medium leading-4 text-gray-400">08월 06일 20:13</span>
      </div>
    </div>
  );
}
