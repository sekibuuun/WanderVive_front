import sampleBandImg from '../images/sampleband.png';
import styles from '../styles/artistCard.module.scss';

const ArtistCard = () => {
  return (
    <div className={styles.artistCard}>
      <img src={sampleBandImg} alt="band" />
      <div className={styles.strContainer}>
        <div className={styles.bandInfo}>
          <p>ジャンル、何m</p>
        </div>
        <div className={styles.bandName}>
          <p>バンド名</p>
        </div>
      </div>
    </div>
  );
};

export { ArtistCard };
