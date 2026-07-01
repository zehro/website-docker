import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import WorldTransitionVeil from "./WorldTransitionVeil";
import "./WorldTransition.css";

/** The top-level "world" a path belongs to — used as the AnimatePresence key. */
function worldKey(pathname: string): string {
  const segment = pathname.split("/")[1] || "hub";
  return segment;
}

const wipeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

/**
 * Drop this where you'd normally render <Outlet /> at the root of your router.
 * It plays a brief fade-through-black whenever the top-level world changes,
 * and is a no-op for navigation within the same world.
 */
export default function WorldTransition() {
  const location = useLocation();
  const outlet = useOutlet();
  const key = worldKey(location.pathname);

  return (
    <>
      <WorldTransitionVeil />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={key}
          variants={wipeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="world-transition"
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
