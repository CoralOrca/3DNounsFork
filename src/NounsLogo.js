/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const NounsLogo = ({ environment }) => {
  const group = useRef();
  const materialRef = useRef();
  const { nodes, materials } = useGLTF('/nouns-logo-model.gltf');

  //   const testMaterial = new THREE.MeshStandardMaterial('#d63c5e');
  const testMaterial = new THREE.MeshPhongMaterial({
    color: 0xd63c5e,
    shininess: 0.1,
    opacity: 1,
    transparent: false,
  });

  useFrame((state, delta) => {
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 5 + 2.5;
    // group.current.rotation.x =
    //   group.current.rotation.y =
    //   group.current.rotation.z +=
    //     delta;
    // materialRef.current.material.wireframe = true;
  });

  testMaterial.color.setHex(0xd63c5e).convertSRGBToLinear();
  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={testMaterial}
        rotation={[1.57, 0, 0]}
        scale={[1000, 1000, 1000]}
        position={getPosition(environment)}
        ref={materialRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          material={testMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005.geometry}
          material={testMaterial}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/nouns-logo-model.gltf');

export default NounsLogo;

const getPosition = (environment) => {
  switch (environment) {
    case 'Normal':
      return new THREE.Vector3(0, 100, -100);

    case 'Ocean':
      return new THREE.Vector3(-50, 100, -100);

    default:
      return new THREE.Vector3(0, 100, -100);
  }
};
