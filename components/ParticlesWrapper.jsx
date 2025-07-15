
"use client";

import dynamic from "next/dynamic";

const ParticlesBgComponent = dynamic(() => import("@/components/ParticlesBg"), { ssr: false });


const ParticlesWrapper = () => {
  return <ParticlesBgComponent />;
};

export default ParticlesWrapper;
