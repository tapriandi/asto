"use client";

import { useEffect, useState } from "react";

/** Local time in Jakarta, ticking every second. */
export default function SplashClock({ timeZone = "Asia/Jakarta" }: { timeZone?: string }) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="label tabular-nums text-bone">{now || "--:--:--"}</span>
  );
}
