import { useState } from "react";
import bedImg from "@/assets/black-bed.png";

/**
 * The hero bed. Floats gently by default; on click it drifts across
 * the screen with a subtle rocking motion.
 */
export function AnimatedBed() {
  const [moving, setMoving] = useState(false);

  return (
    <button
      type="button"
      aria-label="Set the bed in motion"
      onClick={() => {
        setMoving(true);
        // restart animation if clicked again
        setTimeout(() => setMoving(false), 7200);
      }}
      className="absolute left-1/2 bottom-0 w-[110%] max-w-[1400px] focus:outline-none cursor-pointer"
      style={{ transform: "translate(-50%, 0)" }}
    >
      <div className={moving ? "bed-moving" : "bed-still"}>
        <img
          src={bedImg}
          alt="Black four-poster bed"
          width={1536}
          height={1024}
          className="w-full h-auto select-none pointer-events-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)]"
          draggable={false}
        />
      </div>
    </button>
  );
}
