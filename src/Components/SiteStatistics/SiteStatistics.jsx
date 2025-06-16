import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SiteStatistics = () => {
  const [stats, setStats] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // একবার visible হলে আর পুনরায় ট্রিগার হবে না
    threshold: 0.3,    // ৩০% দেখা গেলেই শুরু হবে
  });

  useEffect(() => {
    fetch("https://back-to-you-server.vercel.app/siteStats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) {
    return (
      <div className="flex justify-center items-center my-20">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div ref={ref} className="max-w-7xl mx-auto my-20 p-4 text-center">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary">
        Community Statistics
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        See how active and successful our Lost & Found platform has been.
      </p>

      <div className="grid grid-cols-1 sm: md:grid-cols-3 gap-8">
        <div className="bg-white p-8 border border-secondary rounded-2xl shadow hover:shadow-lg transition-all">
          <div className="text-5xl font-bold text-primary mb-2">
            {inView && (
              <CountUp start={50} end={stats.lostCount} duration={2} />
            )}
          </div>
          <p className="text-lg font-medium text-accent">Lost Items</p>
        </div>

        <div className="bg-white p-8 border border-secondary rounded-2xl shadow hover:shadow-lg transition-all">
          <div className="text-5xl font-bold text-primary mb-2">
            {inView && (
              <CountUp start={50} end={stats.foundCount} duration={2} />
            )}
          </div>
          <p className="text-lg font-medium text-accent">Found Items</p>
        </div>

        <div className="bg-white p-8 border border-secondary rounded-2xl shadow hover:shadow-lg transition-all">
          <div className="text-5xl font-bold text-primary mb-2">
            {inView && (
              <CountUp start={50} end={stats.recoveredCount} duration={2} />
            )}
          </div>
          <p className="text-lg font-medium text-accent">Recovered Items</p>
        </div>
      </div>
    </div>
  );
};

export default SiteStatistics;
