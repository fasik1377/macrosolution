"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  end: number;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          end={end}
          duration={2.5}
          suffix={suffix}
        />
      )}
    </div>
  );
}