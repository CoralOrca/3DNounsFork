import { useGLTF } from "@react-three/drei";

const Pyramid = ({ environment }) => {
  const { nodes, materials } = useGLTF("/world/Pyramid.glb");

  return (
    <>
      {environment === "Normal" || environment === "Matrix" ? (
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pyramid.geometry}
            material={materials.pyramid_material}
            position={[80, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.5}
          />
        </group>
      ) : null}
    </>
  );
};

export default Pyramid;
