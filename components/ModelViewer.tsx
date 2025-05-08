// ModelViewer.tsx

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';

const ModelViewer: React.FC = () => {
  const modelPath = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

  const Model = () => {
    const { scene } = useLoader(GLTFLoader, modelPath);
    return <primitive object={scene} />;
  };

  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<span>Loading...</span>}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
