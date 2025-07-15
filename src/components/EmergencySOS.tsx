import React from 'react';
import { FiAlertTriangle, FiClock, FiPhoneCall } from 'react-icons/fi';
import Header from "../UI/Header";

const EmergencySOS: React.FC = () => {
  return (
    <section id="emergency" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header
          icon={<FiAlertTriangle />}
          label="Emergency Assistance"
          title="24/7 Emergency"
          highlight="SOS Service"
          description="Immediate response for urgent home repair situations"
        />

        {/* Emergency Status Card */}
        <div className="mt-12 bg-gradient-to-br from-red-900/50 to-red-800/30 backdrop-blur-sm rounded-xl border-2 border-red-500/30 p-8 text-center relative overflow-hidden">
          {/* Pulsing emergency indicator */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute inset-0 bg-red-500 rounded-full filter blur-xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiAlertTriangle className="text-4xl text-red-400 animate-pulse" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">Emergency Request Received!</h2>
            <p className="text-red-100 mb-6">Your situation has been prioritized in our system</p>
            
            <div className="bg-gray-800/50 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center space-x-4 text-red-100">
                <FiClock className="text-xl" />
                <span className="font-medium">Estimated response time: <span className="text-white">15-30 minutes</span></span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                <div className="text-red-400 mb-2">Step 1</div>
                <h3 className="text-white font-medium">Request Received</h3>
                <p className="text-gray-300 text-sm mt-1">We've got your emergency details</p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                <div className="text-yellow-400 mb-2">Step 2</div>
                <h3 className="text-white font-medium">Technician Assigned</h3>
                <p className="text-gray-300 text-sm mt-1">Matching you with a specialist</p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                <div className="text-green-400 mb-2">Step 3</div>
                <h3 className="text-white font-medium">On The Way</h3>
                <p className="text-gray-300 text-sm mt-1">Help is coming to your location</p>
              </div>
            </div>

            <div className="bg-black/30 border border-red-900 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">What to Do Now</h3>
              <ul className="space-y-3 text-left text-gray-200">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Stay in a safe location if there's immediate danger</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Shut off water/gas/electricity if applicable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Keep your phone nearby for our technician's call</span>
                </li>
              </ul>
            </div>

            <button className="w-full max-w-xs mx-auto py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/30">
              <FiPhoneCall className="mr-3 text-xl" />
              Call Emergency Support
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default EmergencySOS;