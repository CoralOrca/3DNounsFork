import { useGLTF } from "@react-three/drei";

const EthSign = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/EthSign.glb");
  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.EthSign.geometry}
            material={materials.EthSign_material}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default EthSign;
