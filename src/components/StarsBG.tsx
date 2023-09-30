import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, MutableRefObject } from "react";
import { Stars, OrbitControls } from "@react-three/drei";
import { Group } from 'three';
import styles from '@/styles/Stars.module.css';


const RotatingStars = () => {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    // Safely rotate the group only if it exists
    if (groupRef.current) {
      groupRef.current.rotation.x -= 0.000025;
      groupRef.current.rotation.y += 0.000025;
    }
  });

  return (
      <group ref={groupRef}>
        <Stars 
          radius={100} 
          depth={100} 
          count={10000} 
          factor={10} 
          saturation={100} 
          fade speed={.4} 
        />
      </group>
  );
};


export default function StarsBG() {

  const isDragging = useRef() as MutableRefObject<HTMLInputElement>;

  const handleMouseDown = () => {
    isDragging.current.classList.remove(`${styles.grab}`);
    isDragging.current.classList.add(`${styles.grabbing}`);
  };

  const handleMouseUp = () => {
    isDragging.current.classList.remove(`${styles.grabbing}`);
    isDragging.current.classList.add(`${styles.grab}`);
  };

    return (
      <div 
      ref={isDragging}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`${styles.stars} ${styles.grab}`}
      >
          <Canvas 
            camera={{ position: [0, 0, 500] }}
            >
            <OrbitControls 
              maxDistance={440} 
              enableDamping 
              enableRotate 
              rotateSpeed={0.05}
              zoomSpeed={.25}
            />
            <RotatingStars />
          </Canvas>
        </div>
    )
}