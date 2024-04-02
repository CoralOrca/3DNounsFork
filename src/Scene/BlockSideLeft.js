import { useGLTF } from "@react-three/drei";

const Block_SideLeft = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_SideLeft.glb");
  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_SideLeft.geometry}
            material={materials.Block_SideLeft_material}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default Block_SideLeft;
