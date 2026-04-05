"use client";

import { motion } from "framer-motion";

function Cube() {
  return (
    <motion.div
      className="model-cube"
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      <span className="face front" />
      <span className="face back" />
      <span className="face right" />
      <span className="face left" />
      <span className="face top" />
      <span className="face bottom" />
    </motion.div>
  );
}

function Pyramid() {
  return (
    <motion.div
      className="model-pyramid"
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
    >
      <span className="tri tri-front" />
      <span className="tri tri-right" />
      <span className="tri tri-back" />
      <span className="tri tri-left" />
      <span className="base" />
    </motion.div>
  );
}

export default function ThreeModels() {
  return (
    <div className="model-stage">
      <motion.div
        className="model-sphere"
        animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <Cube />
      <Pyramid />
    </div>
  );
}
