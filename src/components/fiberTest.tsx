import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Stars, OrbitControls } from "@react-three/drei";
import { Group } from 'three';

const RotatingStars = () => {
    const groupRef = useRef<Group>(null);
  
    useFrame(() => {
      // Safely rotate the group only if it exists
      if (groupRef.current) {
        groupRef.current.rotation.x -= 0.0001;
        groupRef.current.rotation.y += 0.0001;
      }
    });
  
    return (
        <group ref={groupRef}>
          <Stars radius={100} depth={100} count={50000} factor={8} saturation={600} fade speed={1.5} />
        </group>
    );
  };

export default function R3fDemo() {
    return (
        <Canvas 
          style={{ background: 'black' }}
          camera={{ position: [0, 0, 450] }}
        >
            <OrbitControls 
              maxDistance={450} 
              enableDamping 
              enableRotate 
            />
            <ambientLight 
              intensity={0.5} 
            />
            <spotLight 
              intensity={0.8} 
              position={[30, 30, 50]} 
              angle={0.2} 
              penumbra={1} 
            />
            <RotatingStars />
        </Canvas>
    )
}