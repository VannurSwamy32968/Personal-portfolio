import React from 'react';
import { FaReact, FaBootstrap, FaJsSquare } from 'react-icons/fa';

export default function FloatingIcons() {
  return (
    <>
      <FaReact className="floating-icon" style={{ top:'20%', left:'10%' }}/>
      <FaBootstrap className="floating-icon" style={{ top:'50%', left:'80%' }}/>
      <FaJsSquare className="floating-icon" style={{ top:'70%', left:'30%' }}/>
    </>
  );
}
