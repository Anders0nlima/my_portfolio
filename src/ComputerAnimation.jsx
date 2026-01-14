import Lottie from 'lottie-react';
import animationData from '../assets/animations/work_from_home.json';
import styles from './components/Hero/Hero.module.css';

export default function ComputerAnimation() {
  return (
    <div className={styles.canvasWrapper}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}