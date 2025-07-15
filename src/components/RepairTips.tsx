import React from 'react';
import { FiZap, FiDroplet, FiFilter } from 'react-icons/fi';
import Header from "../UI/Header";

const RepairTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FiZap className="text-2xl text-yellow-400" />,
      title: "Power Trip",
      description: "Check the MCB box first",
      details: "Locate your circuit breaker panel and check if any switches have tripped to the OFF position."
    },
    {
      id: 2,
      icon: <FiDroplet className="text-2xl text-blue-400" />,
      title: "Leaky Tap",
      description: "Tighten gently or close the valve",
      details: "Use an adjustable wrench to tighten the faucet nut. If persistent, shut off the water supply valve."
    },
    {
      id: 3,
      icon: <FiFilter className="text-2xl text-teal-400" />,
      title: "Low Water Pressure",
      description: "Clean the faucet filter",
      details: "Unscrew the aerator at the tip of your faucet and remove any sediment or debris."
    }
  ];

  return (
    <section id="repair-tips" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header
          icon={<FiZap />}
          label="DIY Solutions"
          title="Quick"
          highlight="Repair Tips"
          description="Handy solutions for common household problems"
        />

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400/30 transition-all duration-300 p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                  <p className="text-teal-400 font-medium">{tip.description}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-sm">{tip.details}</p>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        
      </div>
    </section>
  );
};

export default RepairTips;