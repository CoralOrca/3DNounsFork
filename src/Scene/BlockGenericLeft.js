import { useGLTF } from "@react-three/drei";

const BlockUgly2 = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_Ugly.glb");

  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_Ugly.geometry}
            material={materials.Block_Ugly_material}
            position={[4700, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default BlockUgly2;
