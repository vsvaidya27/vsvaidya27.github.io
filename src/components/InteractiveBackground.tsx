'use client';

import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, TorusKnot, Icosahedron, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[1, 16, 16]} position={[5, 3, -5]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.1} wireframe />
      </Sphere>

      <Torus args={[1.5, 0.3, 16, 32]} position={[-4, -2, 3]}>
        <meshStandardMaterial color="#10b981" transparent opacity={0.15} wireframe />
      </Torus>

      <Box args={[1, 1, 1]} position={[3, -4, 2]}>
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.2} wireframe />
      </Box>

      <Sphere args={[0.8, 12, 12]} position={[-3, 4, -3]}>
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.1} wireframe />
      </Sphere>

      <Torus args={[1, 0.2, 12, 24]} position={[2, 5, -2]}>
        <meshStandardMaterial color="#ef4444" transparent opacity={0.12} wireframe />
      </Torus>

      {/* New unique shapes */}
      <TorusKnot args={[0.8, 0.2, 128, 16]} position={[-5, -2, -2]}>
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.12} wireframe />
      </TorusKnot>

      <Icosahedron args={[1, 0]} position={[0, -5, 1]}>
        <meshStandardMaterial color="#a78bfa" transparent opacity={0.12} wireframe />
      </Icosahedron>

      <Dodecahedron args={[1.1, 0]} position={[6, 0, 1]}>
        <meshStandardMaterial color="#34d399" transparent opacity={0.12} wireframe />
      </Dodecahedron>

      <Box args={[0.7, 0.7, 0.7]} position={[1, -5, 3]}>
        <meshStandardMaterial color="#10b981" transparent opacity={0.15} wireframe />
      </Box>

      <Sphere args={[0.9, 14, 14]} position={[-5, 2, -1]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.1} wireframe />
      </Sphere>
    </group>
  );
};

const InteractiveBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#10b981" />
      <pointLight position={[0, 10, 0]} intensity={0.2} color="#8b5cf6" />
      
      <FloatingShapes />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default InteractiveBackground;
