import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Stars, OrbitControls } from "@react-three/drei";
import { Group } from 'three';
import styles from '@/styles/Stars.module.css';


const RotatingStars = () => {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    // Safely rotate the group only if it exists
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.00002;
      groupRef.current.rotation.y += 0.00002;
    }
  });

  return (
      <group ref={groupRef}>
        <Stars 
          radius={100} 
          depth={100} 
          count={15000} 
          factor={8} 
          saturation={600} 
          fade speed={.5} 
        />
      </group>
  );
};


export default function StarsBG() {

    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
      setIsDragging(true);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    return (
      <div 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`${styles.stars} ${isDragging ? styles.grabbing : styles.grab}`}
      >
          <Canvas 
            camera={{ position: [0, 0, 440] }}
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