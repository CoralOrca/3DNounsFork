import { Sky, Stars, useGLTF, useProgress } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import City from "./City";
import BlockPark from "./BlockPark";
import BlockTNS from "./BlockTNS";
import BlockPH from "./BlockPH";
import Pyramid from "./Pyramid";

import BlockSideLeft from "./BlockSideLeft";
import BlockSideRight from "./BlockSideRight";

import BlockUgly from "./BlockUgly";
import BlockUgly2 from "./BlockGenericLeft";

const NormalEnvironment = ({ environment }) => {
  const SPEED = isMobile ? 0.5 : 1;
  const ROTATE = isMobile ? 0.5 : 1;

  const truck = useGLTF("/world/cocatruck.glb");
  const taxi = useGLTF("/world/taxi.glb");
  const neppelin = useGLTF("/world/Neppelin.glb");
  const ETH = useGLTF("/world/EthSign.glb");
  const PHLight = useGLTF("/world/PHLight.glb");

  const truckRef = useRef();
  const taxiRef = useRef();
  const neppelinRef = useRef();
  const ETHRef = useRef();
  const PHLightRef = useRef();

  const [showTruck, setShowTruck] = useState(true);
  const [showTaxi, setShowTaxi] = useState(isMobile ? false : true);
  const [showNeppelin, setShowNeppelin] = useState(true);
  const [showETH, setShowETH] = useState(true);
  const [showPHLight, setShowPHLight] = useState(true);

  useFrame((state, delta) => {
    if (truckRef.current && showTruck) {
      truckRef.current.position.x += SPEED;
      if (truckRef.current.position.x > 2300) {
        setShowTruck(false);
        delayTruck();
      }
    }
    if (taxiRef.current && showTaxi) {
      taxiRef.current.position.x -= 0.7;
      if (taxiRef.current.position.x < -1050) {
        setShowTaxi(false);
        delayTaxi();
      }
    }
    if (neppelinRef.current && showNeppelin) {
      neppelinRef.current.position.x -= SPEED / 3;
      if (neppelinRef.current.position.x < -5000) {
        setShowNeppelin(false);
        delayNeppelin();
      }
    }
    if (ETHRef.current && showETH) {
      ETHRef.current.position.x = 1870;
      ETHRef.current.position.y = 1050;
      ETHRef.current.position.z = -350;
      ETHRef.current.rotation.y += ROTATE * 0.005; // Adjust this factor as needed for smooth rotation
    }

    if (PHLightRef.current && showPHLight) {
      // Use time or an accumulator to continuously change the position
      const time = state.clock.getElapsedTime();
      // Define the amplitude (range) of the movement and frequency (speed)
      const amplitude = 15; // This controls how high and low the mesh goes
      const frequency = 3; // This controls the speed of the up and down motion

      // Calculate the new Y position using a sine wave
      const newYPosition = Math.sin(time * frequency) * amplitude;

      // Apply the new Y position to the mesh, adjusting the base height as needed
      PHLightRef.current.position.z = -40;
      PHLightRef.current.position.x = -120;
      PHLightRef.current.position.y = 20 + newYPosition; // Adjust '50' based on the initial Y position of your mesh
    }
  });

  const delayTruck = () => {
    if (truckRef && truckRef.current) {
      setTimeout(() => {
        if (truckRef && truckRef.current) {
          truckRef.current.position.x = -1500;
          setShowTruck(true);
        }
      }, randomIntFromInterval(1000, 2500));
    }
  };

  const delayTaxi = () => {
    if (taxiRef && taxiRef.current) {
      setTimeout(() => {
        if (taxiRef && taxiRef.current) {
          taxiRef.current.position.x = 650;
          setShowTaxi(true);
        }
      }, randomIntFromInterval(1200, 2700));
    }
  };

  const delayNeppelin = () => {
    if (neppelinRef && neppelinRef.current) {
      setTimeout(() => {
        if (neppelinRef && neppelinRef.current) {
          neppelinRef.current.position.x = 650;
          setShowNeppelin(true);
        }
      }, randomIntFromInterval(1200, 2700));
    }
  };

  const Ground = () => {
    return (
      <mesh receiveShadow position={[32, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
        <meshStandardMaterial
          color={new THREE.Color(0x404040).convertSRGBToLinear()}
        />
      </mesh>
    );
  };

  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <>
      {environment === "Normal" || environment === "VoidDay" ? (
        <fog attach="fog" args={[new THREE.Color(0xe8fdff), 1, 2900]} />
      ) : null}
      {environment === "Matrix" ? (
        <fog attach="fog" args={[new THREE.Color(0x181818), 1, 2500]} />
      ) : null}
      {environment === "VoidNight" ? (
        <fog attach="fog" args={[new THREE.Color(0x181818), 1, 1000]} />
      ) : null}
      {loaded && (environment === "Matrix" || environment === "VoidNight") ? (
        <color attach="background" args={[0x181818]} />
      ) : null}
      {loaded && (environment === "Normal" || environment === "VoidDay") ? (
        <Sky
          azimuth={0.5}
          turbidity={7.5}
          rayleigh={0.4}
          inclination={0.6}
          distance={3000}
          sunPosition={[-100, 500, 1000]}
        />
      ) : null}
      <City environment={environment} />
      <BlockTNS environment={environment} />
      <BlockPH environment={environment} />
      <BlockSideLeft environment={environment} />
      <BlockSideRight environment={environment} />
      <BlockPark environment={environment} />
      <Pyramid environment={environment} />
      <BlockUgly environment={environment} />
      <BlockUgly2 environment={environment} />

      {environment === "Normal" || environment === "Matrix" ? (
        <>
          {truck && truck.nodes && truck.materials && (
            <group ref={truckRef} dispose={null} visible={showTruck}>
              <mesh
                castShadow
                receiveShadow
                geometry={truck.nodes.Oren_1117.geometry}
                material={truck.materials.truck_material}
                position={[-450, -4, -75]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}
          {taxi && taxi.nodes && taxi.materials && (
            <group ref={taxiRef} dispose={null} visible={showTaxi}>
              <mesh
                castShadow
                receiveShadow
                geometry={taxi.nodes.Oren_1113.geometry}
                material={taxi.materials.cab_material}
                position={[100, -4, -138]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}
          {neppelin && neppelin.nodes && neppelin.materials && (
            <group ref={neppelinRef} dispose={null} visible={showNeppelin}>
              <mesh
                castShadow
                receiveShadow
                geometry={neppelin.nodes.Neppelin.geometry}
                material={neppelin.materials.Neppelin_material}
                position={[1800, 50, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}

          {ETH && ETH.nodes && ETH.materials && (
            <group ref={ETHRef} dispose={null} visible={showETH}>
              <mesh
                castShadow
                receiveShadow
                geometry={ETH.nodes.EthSign.geometry}
                material={ETH.materials.EthSign_material}
                position={[0, 50, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}

          {PHLight && PHLight.nodes && PHLight.materials && (
            <group ref={PHLightRef} dispose={null} visible={showPHLight}>
              <mesh
                castShadow
                receiveShadow
                geometry={PHLight.nodes.PHLight.geometry}
                material={PHLight.materials.PHLight_material}
                position={[0, 50, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3, 3, 3]}
              />
            </group>
          )}
        </>
      ) : null}
      {environment === "VoidDay" || environment === "VoidNight" ? (
        <gridHelper
          receiveShadow
          // castShadow
          args={[
            5000,
            150,
            new THREE.Color(0x7d7d7d),
            new THREE.Color(0x7d7d7d),
          ]}
          position={[0, 0.1, 0]}
        />
      ) : null}
      {environment === "VoidDay" || environment === "VoidNight" ? (
        <mesh
          receiveShadow
          position={[32, -1, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <cylinderBufferGeometry args={[2000, 2000, 2, 32]} />
          <meshStandardMaterial
            color={new THREE.Color(0x404040).convertSRGBToLinear()}
          />
        </mesh>
      ) : null}
    </>
  );
};

export default NormalEnvironment;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
