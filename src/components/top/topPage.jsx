import { Calendar } from './calendar';
import { SelectDistance } from './selectDistance';
import { Subtitle } from './subtitle';
import { useTopPage } from '../hooks/useTopPage';
import { ArtistCardList } from './artistCardList';

const TopPage = () => {
  const { selectedDate, selectedDistance, data, handleDateChange, handleDistanceChange } = useTopPage();
  return (
    <div>
      {selectedDate && <Subtitle date={selectedDate} distance={selectedDistance} />}
      <Calendar onDateChange={handleDateChange} />
      <SelectDistance onSelectDistanceChange={handleDistanceChange} />
      <ArtistCardList data={data} />
    </div>
  );
};

export { TopPage };
