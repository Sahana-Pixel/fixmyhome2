{/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/20 backdrop-blur-sm mb-2">
    <FiAlertCircle className="mr-1.5 text-teal-400" size={14} />
    <span className="text-xs font-semibold tracking-wide text-teal-100 uppercase">
      24/7 Emergency Service
    </span>
  </div> */}

import { FiArrowRight, FiClock, FiShield, FiTool, FiAward, FiAlertCircle, FiZap } from 'react-icons/fi';

const Home = () => (
    <section id="home" className="relative min-h-screen pt-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-teal-400 filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-indigo-500 filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            {/* Hero content - Reversed order for mobile */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-12">
                {/* Image first on mobile */}
                <div className="w-full lg:w-1/2 relative group mt-6 lg:mt-0">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-800/50 backdrop-blur-sm aspect-video shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <img
                            src="/images/repair.jpg"
                            alt="Professional home repair technician working"
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaD0iNTYyIiB2aWV3Qm94PSIwIDAgMTAwMCA1NjIiPjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MiIgZmlsbD0iIzFmMjEzYiIvPjx0ZXh0IHg9IjUwMCIgeT0iMjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNlNGU2ZTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhvbWUgUmVwYWlyIEltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg=='
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-teal-400/20 m-1 pointer-events-none transition-all duration-300 group-hover:border-teal-400/40 group-hover:m-0.5"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                            <p className="text-xs sm:text-sm font-medium text-gray-300">24/7 Emergency Service</p>
                            <h3 className="text-lg sm:text-xl font-bold mt-1">Certified Home Repair Experts</h3>
                        </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{
                        background: 'radial-gradient(at center center, rgba(16, 185, 129, 0.4) 0%, transparent 70%)'
                    }}></div>
                </div>

                {/* Text content - comes after image in DOM for mobile */}
                <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm mx-auto lg:mx-0">
                        <FiZap className="mr-1.5 text-blue-300" size={14} />
                        <span className="text-xs font-semibold tracking-wide text-blue-100 uppercase">
                            Rated #1 in Your Area
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                        <span className="text-teal-400">From Panic</span> to<br className="hidden sm:block" />
                        <span className="text-teal-400">Problem Solved</span> in 60 Minutes
                    </h1>

                    <p className="text-gray-300/90 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                        We arrive faster than most pizza deliveries
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                        <a href="#book">
                            <button className="flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 text-sm sm:text-base">
                                Book Now <FiArrowRight className="ml-2" />
                            </button>
                        </a>
                        <a href="#sos">
                            <button className="flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 text-gray-100 font-medium rounded-lg transition-all duration-300 text-sm sm:text-base">
                                Emergency SOS <FiAlertCircle className="ml-2" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Trust indicators - adjusted for mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-16">
                {[
                    { icon: <FiClock size={24} className="sm:w-7" />, value: "24/7", label: "Availability" },
                    { icon: <FiShield size={24} className="sm:w-7" />, value: "100%", label: "Guaranteed" },
                    { icon: <FiTool size={24} className="sm:w-7" />, value: "500+", label: "Repairs Done" },
                    { icon: <FiAward size={24} className="sm:w-7" />, value: "4.9/5", label: "Rating" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-800/80 p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:border-teal-400/30 transition-all duration-300 hover:duration-200 group overflow-hidden"
                    >
                        <div className="transition-transform duration-300 group-hover:-translate-y-1">
                            <div className="text-teal-400 mb-2 sm:mb-3 group-hover:text-teal-300 transition-colors">
                                {item.icon}
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-100 group-hover:text-white">
                                {item.value}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1 group-hover:text-gray-300">
                                {item.label}
                            </p>
                        </div>
                        <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)]"></div>
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_8px_30px_-15px_rgba(16,185,129,0.3)]"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Home;