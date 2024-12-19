'use client'; // Ensures client-side only
import dynamic from 'next/dynamic';

const BasicThree = dynamic(() => import('./components/ThreeScene'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Three.js Scene</h1>
      <BasicThree />
    </div>
  );
}
