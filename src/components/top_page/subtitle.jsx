import { FormatDate } from './formatDate';

const Subtitle = ({ date, distance }) => {
  const displayDistance = (distance) => {
    if (distance >= 1000) {
      return `${distance / 1000}km`;
    } else {
      return `${distance}m`;
    }
  };
  return (
    <div>
      <FormatDate date={date} />
      <span>、{displayDistance(distance)}で聞ける演奏</span>
      <p>検索日時と時間を指定</p>
    </div>
  );
};

export { Subtitle };
