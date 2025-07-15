import React from 'react';
import { FiStar, FiUser, FiZap, FiDroplet, FiWind, FiArrowRight, FiPhone, FiClock, FiSettings, FiTool, FiWifi } from 'react-icons/fi';
import Header from "../UI/Header";

interface Technician {
  name: string;
  skill: string;
  rating: number;
  phone: string;
  experience: string;
  availability: string;
  jobsCompleted: number;
}

const TechniciansPage: React.FC = () => {
  const technicians: Technician[] = [
    { name: 'Ravi Kumar', skill: 'Electrician', rating: 4.7, phone: '+91 98765 43210', experience: '8 years', availability: 'Available now', jobsCompleted: 420 },
    { name: 'Anjali Verma', skill: 'Plumber', rating: 4.9, phone: '+91 87654 32109', experience: '10 years', availability: 'Available in 1 hour', jobsCompleted: 580 },
    { name: 'Sameer Khan', skill: 'AC Technician', rating: 4.5, phone: '+91 78901 23456', experience: '6 years', availability: 'Available tomorrow', jobsCompleted: 320 },
    { name: 'Priya Sharma', skill: 'Carpenter', rating: 4.8, phone: '+91 98989 76767', experience: '7 years', availability: 'Available now', jobsCompleted: 390 },
    { name: 'Vikram Singh', skill: 'Appliance Repair', rating: 4.6, phone: '+91 87878 65656', experience: '5 years', availability: 'Available in 2 hours', jobsCompleted: 270 },
    { name: 'Neha Patel', skill: 'Painter', rating: 4.4, phone: '+91 76767 54545', experience: '4 years', availability: 'Available now', jobsCompleted: 210 },
    { name: 'Arun Joshi', skill: 'Electrician', rating: 4.9, phone: '+91 65656 43434', experience: '12 years', availability: 'Available tomorrow', jobsCompleted: 650 },
    { name: 'Sunil Mehta', skill: 'Plumber', rating: 4.7, phone: '+91 94949 32323', experience: '9 years', availability: 'Available now', jobsCompleted: 480 },
    { name: 'Deepika Reddy', skill: 'Smart Home', rating: 4.8, phone: '+91 83838 21212', experience: '5 years', availability: 'Available in 3 hours', jobsCompleted: 190 },
  ];

  const getSkillIcon = (skill: string) => {
    switch(skill) {
      case 'Electrician': return <FiZap className="text-yellow-400" />;
      case 'Plumber': return <FiDroplet className="text-blue-400" />;
      case 'AC Technician': return <FiWind className="text-teal-400" />;
      case 'Carpenter': return <FiTool className="text-amber-400" />;
      case 'Appliance Repair': return <FiSettings className="text-red-400" />;
      case 'Painter': return <FiDroplet className="text-purple-400" />;
      case 'Smart Home': return <FiWifi className="text-indigo-400" />;
      default: return <FiUser className="text-purple-400" />;
    }
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\D/g, '')}`;
  };

  return (
    <section id="technicians" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div>
          <Header
            icon={<FiUser />}
            label="Our Team"
            title="Certified"
            highlight="Technicians"
            description="Skilled professionals ready to handle all your home service needs"
          />
        </div>

        {/* Technicians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {technicians.map((tech, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400/30 transition-all duration-300 overflow-hidden group"
            >
              {/* Availability Badge */}
              {tech.availability.includes('now') && (
                <div className="absolute top-4 right-4 bg-green-500/20 text-green-100 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
                  {tech.availability}
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                    {getSkillIcon(tech.skill)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white truncate">{tech.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400 mt-1 text-sm">{tech.skill}</p>
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                        {tech.jobsCompleted}+ jobs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-400 mr-4">
                      <FiStar className="fill-current" />
                      <span className="ml-1 text-white">{tech.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FiClock className="mr-1" />
                      {tech.experience}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <FiPhone className="mr-2 text-teal-400 flex-shrink-0" />
                    <a 
                      href={`tel:${tech.phone.replace(/\D/g, '')}`} 
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {tech.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300">
                    <FiClock className="mr-2 text-teal-400 flex-shrink-0" />
                    <span className={tech.availability.includes('now') ? 'text-green-400' : 'text-amber-400'}>
                      {tech.availability}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Certified Professional</span>
                    <span>Background Verified</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700/50 flex space-x-3">
                
                  <button className="flex-1 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300 text-sm flex items-center justify-center">
                     <a href="#book">
                    Book Now
                    </a>
                    <FiArrowRight className="ml-2" />
                  </button>
                  <button 
                    onClick={() => handleCall(tech.phone)}
                    className="flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 text-sm flex items-center justify-center"
                  >
                    <FiPhone className="mr-2" />
                    Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniciansPage;