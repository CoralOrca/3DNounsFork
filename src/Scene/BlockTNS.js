import { useGLTF } from "@react-three/drei";

const Block_TNS = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Block_TNS.glb");

  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TNS_Block.geometry}
            material={materials.TNS_Block_material}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default Block_TNS;
