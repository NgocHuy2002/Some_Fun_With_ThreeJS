// eslint-disable-next-line
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scifi_girl_v.01/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={5} />
    </>
  );
};

const Tree = () => {
  const gltf = useLoader(GLTFLoader, "./voxel_tutorial_-_scene_2/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Tree />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
