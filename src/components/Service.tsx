import React from 'react';
import { BsFillPlugFill } from 'react-icons/bs';
import { FiCheckCircle, FiSettings, FiDroplet, FiHome, FiTool, FiWifi, FiArrowRight } from 'react-icons/fi';
import Header from "../UI/Header";
interface Service {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    emergency: boolean;
}

const ServicesPage: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            icon: <FiTool className="text-3xl text-teal-400" />,
            title: "General Repairs",
            description: "Comprehensive solutions for all your home maintenance needs",
            features: [
                "Drywall repair",
                "Door/window fixes",
                "Carpentry work",
                "Furniture assembly"
            ],
            emergency: true
        },
        {
            id: 2,
            icon: <FiDroplet className="text-3xl text-blue-400" />,
            title: "Plumbing",
            description: "24/7 emergency plumbing services you can count on",
            features: [
                "Leak detection & repair",
                "Pipe installation",
                "Drain cleaning",
                "Water heater service"
            ],
            emergency: true
        },
        {
            id: 3,
            icon: <BsFillPlugFill className="text-3xl text-yellow-400" />,
            title: "Electrical",
            description: "Certified electricians for safe and reliable solutions",
            features: [
                "Wiring & rewiring",
                "Outlet installation",
                "Circuit breaker repair",
                "Lighting installation"
            ],
            emergency: true
        },
        {
            id: 4,
            icon: <FiHome className="text-3xl text-purple-400" />,
            title: "HVAC",
            description: "Heating and cooling system services",
            features: [
                "AC repair",
                "Heater maintenance",
                "Vent cleaning",
                "Thermostat installation"
            ],
            emergency: false
        },
        {
            id: 5,
            icon: <FiWifi className="text-3xl text-indigo-400" />,
            title: "Smart Home",
            description: "Modern home automation solutions",
            features: [
                "Smart lock installation",
                "Security cameras",
                "Home theater setup",
                "Network wiring"
            ],
            emergency: false
        },
        {
            id: 6,
            icon: <FiSettings className="text-3xl text-red-400" />,
            title: "Appliance Repair",
            description: "Professional appliance diagnosis and repair",
            features: [
                "Refrigerator repair",
                "Oven/stove service",
                "Washer/dryer fix",
                "Dishwasher maintenance"
            ],
            emergency: false
        }
    ];

    return (
         <section id="services" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
    <div className="max-w-7xl mx-auto">
                {/* Header */}

                <div>
                    <Header
                        icon={<FiCheckCircle />}
                        label="Our Services"
                        title="Comprehensive"
                        highlight="Home Solutions"
                        description="Professional repairs and maintenance services for every corner of your home"
                    />

                </div>

                {/* Services Grid */}
 <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400/30 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Emergency badge */}
                            {/* {service.emergency && (
                                <div className="absolute top-4 right-4 bg-red-500/20 text-red-100 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
                                    Emergency
                                </div>
                            )} */}

                            <div className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                        <p className="text-gray-400 mt-1 text-sm">{service.description}</p>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-300 text-sm">
                                            <FiCheckCircle className="mr-2 text-teal-400 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-6 border-t border-gray-700/50">
                                 <a href="#book">
                                    <button className="w-full py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300 text-sm flex items-center justify-center">
                                        Book Service
                                        <FiArrowRight className="ml-2" />
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
 <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center">                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Don't See What You Need?
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        We handle hundreds of specialized home services. Contact us to discuss your specific requirements.
                    </p>
                    <a href="#contact">
                    <button className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/20">
                        Contact Our Team
                        <FiArrowRight className="ml-2" />
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;