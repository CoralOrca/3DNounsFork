import { useGLTF } from "@react-three/drei";

const PHLight = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/PHLight.glb");
  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PHLight.geometry}
            material={materials.PHLight_material}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default PHLight;
