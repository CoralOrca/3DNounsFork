import { useGLTF } from "@react-three/drei";

const Block_SideRight = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_Right.glb");
  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Block_Right.geometry}
            material={materials.Block_Right_material}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default Block_SideRight;
