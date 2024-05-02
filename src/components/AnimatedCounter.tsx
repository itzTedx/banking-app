"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return <CountUp end={amount} decimal="." prefix="$" decimals={2} />;
};

export default AnimatedCounter;
