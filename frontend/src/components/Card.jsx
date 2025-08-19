import { motion } from "framer-motion";

export default function Card({ color, title,  image, zIndex }) {
  return (
    <motion.div
      style={{
        background: color,
        zIndex,
      }}
      className="card"
      layout
    >
      <div className="card-content">
        <div className="card-text">
          <h2>{title}</h2>
        </div>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </motion.div>
  );
}
