import { FormatDate } from './formatDate';
import { Center } from '@chakra-ui/react';
import styles from '../../styles/subtitle.module.scss';

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
      <Center className={styles.mozi} mt="6">
        <FormatDate date={date} />
        <span>、{displayDistance(distance)}で聞ける演奏</span>
      </Center>
      <Center className={styles.haba}>
        <p>検索日時と時間を指定</p>
      </Center>
    </div>
  );
};

export { Subtitle };
