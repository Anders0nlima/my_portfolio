import Lottie from 'lottie-react';
import animation from '../../assets/animations/error_page_with_cat.json';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <Lottie
          animationData={animation}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <h1 className={styles.title}>Página não encontrada</h1>
      <button className={styles.button} onClick={() => navigate('/')}>
        Voltar para o início
      </button>
    </div>
  );
}