import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Float } from '@react-three/drei';
import { Mesh } from 'three';

function FloatingShape({ 
  position, 
  color, 
  type = 'sphere' 
}: { 
  position: [number, number, number]; 
  color: string; 
  type?: 'sphere' | 'box' | 'octahedron' 
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {type === 'sphere' && (
        <Sphere ref={meshRef} position={position} args={[0.8]}>
          <meshStandardMaterial 
            color={color} 
            transparent
            opacity={0.6}
          />
        </Sphere>
      )}
      {type === 'box' && (
        <Box ref={meshRef} position={position} args={[1.2, 1.2, 1.2]}>
          <meshStandardMaterial 
            color={color} 
            transparent
            opacity={0.6}
          />
        </Box>
      )}
      {type === 'octahedron' && (
        <Octahedron ref={meshRef} position={position} args={[1.0]}>
          <meshStandardMaterial 
            color={color} 
            transparent
            opacity={0.6}
          />
        </Octahedron>
      )}
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <FloatingShape 
            position={[-4, 2, -2]} 
            color="#8B5CF6" 
            type="sphere" 
          />
          <FloatingShape 
            position={[4, -1, -3]} 
            color="#3B82F6" 
            type="octahedron" 
          />
          <FloatingShape 
            position={[-2, -3, -4]} 
            color="#06B6D4" 
            type="box" 
          />
          <FloatingShape 
            position={[3, 3, -5]} 
            color="#8B5CF6" 
            type="sphere" 
          />
          <FloatingShape 
            position={[0, -2, -6]} 
            color="#A855F7" 
            type="octahedron" 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}