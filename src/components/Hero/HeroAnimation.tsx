import Lottie from 'lottie-react';
import animationData from '../../assets/animations/work_from_home.json';
import styles from './Hero.module.css';

export default function HeroAnimation() {
  return (
    <div className={styles.canvasWrapper}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}