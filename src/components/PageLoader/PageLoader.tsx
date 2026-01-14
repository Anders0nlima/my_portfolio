import Lottie from 'lottie-react';
import animation from '../../assets/animations/Loading_Dots_Blue.json';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.lottieContainer}>
        <Lottie
          animationData={animation}
          loop={true}
          autoplay={true} /* <--- CORRIGIDO AQUI (era autoPlay) */
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}