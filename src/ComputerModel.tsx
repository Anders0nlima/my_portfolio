import { Canvas } from '@react-three/fiber';
import { useGLTF, PresentationControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import styles from './components/Hero/Hero.module.css';

function Model() {
  const { scene } = useGLTF('/macbook_laptop.glb');

  return (
    <primitive
      object={scene}
      scale={1.35}              // ⬅ tamanho final correto
      position={[0, -0.25, 0]}  // ⬅ desce um pouco para enquadrar
      rotation={[-0.10, -0.20, 0]}   // ⬅ leve inclinação estética (fixa)
    />
  );
}

export default function ComputerCanvas() {
  return (
    <div className={styles.canvasWrapper}>
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 42, position: [0, 1.3, 4.2] }} // ⬅ câmera mais próxima
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <PresentationControls
            global
            speed={1}          // ⬅ só responde ao mouse
            zoom={0.8}
            polar={[-0.25, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Stage
              environment="city"
              intensity={0.6}
              shadows={false}
              adjustCamera      // ⬅ ajuda no enquadramento
            >
              <Model />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}