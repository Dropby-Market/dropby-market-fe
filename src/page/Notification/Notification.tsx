import NotificationItem from '@/page/Notification/components/notificationItem.tsx';
import Separator from '@/shared/ui/Separator.tsx';

const Notification = () => {
  return (
    <div className="px-4 py-5">
      <ul>
        {Array.from({ length: 10 }).map((_, idx, arr) => (
          <li key={idx}>
            <NotificationItem />
            {idx < arr.length - 1 && <Separator className="my-5" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
