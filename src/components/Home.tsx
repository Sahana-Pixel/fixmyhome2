import { FiArrowRight, FiClock, FiShield, FiTool, FiAward, FiAlertCircle, FiZap } from 'react-icons/fi';

const Home = () => (
    <section
        id="home"
        className="relative min-h-screen pt-24 px-4 sm:px-6 bg-gradient-to-b from-black via-black to-yellow-950"
    >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-yellow-900 filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-amber-950 filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            {/* Hero content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-12">
                {/* Text content */}
                <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-800/20 backdrop-blur-sm mx-auto lg:mx-0">
                        <FiZap className="mr-1.5 text-yellow-400" size={14} />
                        <span className="text-xs font-semibold tracking-wide text-yellow-200 uppercase">
                            Rated #1 in Your Area
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                        <span className="text-yellow-500">From Panic</span> to<br className="hidden sm:block" />
                        <span className="text-yellow-500">Problem Solved</span> in 60 Minutes
                    </h1>

                    <p className="text-gray-300/90 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                        We arrive faster than most pizza deliveries
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                        <a href="#book">
                            <button className="flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-yellow-800 hover:bg-yellow-900 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-700/30 text-sm sm:text-base">
                                Book Now <FiArrowRight className="ml-2" />
                            </button>
                        </a>
                        <a href="#sos">
                            <button className="flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg transition-all duration-300 text-sm sm:text-base">
                                Emergency SOS <FiAlertCircle className="ml-2" />
                            </button>
                        </a>
                    </div>
                </div>

                {/* Image */}
<div className="w-4/5 lg:w-2/5 relative group order-1 lg:order-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/50 backdrop-blur-sm aspect-video shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <img
                            src="/images/repair.jpg"
                            alt="Professional home repair technician working"
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MiIgdmlld0JveD0iMCAwIDEwMDAgNTYyIj48cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1NjIiIGZpbGw9IiMxZjIxM2IiLz48dGV4dCB4PSI1MDAiIHk9IjI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjZTRlNmU5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ib21lIFJlcGFpciBJbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4='
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-yellow-700/20 m-1 pointer-events-none transition-all duration-300 group-hover:border-yellow-600/40 group-hover:m-0.5"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                            <p className="text-xs sm:text-sm font-medium text-gray-300">24/7 Emergency Service</p>
                            <h3 className="text-lg sm:text-xl font-bold mt-1">Certified Home Repair Experts</h3>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 rounded-2xl shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        style={{
                            background: 'radial-gradient(at center center, rgba(146, 64, 14, 0.4) 0%, transparent 70%)',
                        }}
                    ></div>
                </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-16">
                {[
                    { icon: <FiClock size={24} className="sm:w-7" />, value: '24/7', label: 'Availability' },
                    { icon: <FiShield size={24} className="sm:w-7" />, value: '100%', label: 'Guaranteed' },
                    { icon: <FiTool size={24} className="sm:w-7" />, value: '500+', label: 'Repairs Done' },
                    { icon: <FiAward size={24} className="sm:w-7" />, value: '4.9/5', label: 'Rating' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-900/70 p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:border-yellow-700/30 transition-all duration-300 hover:duration-200 group overflow-hidden"
                    >
                        <div className="transition-transform duration-300 group-hover:-translate-y-1">
                            <div className="text-yellow-500 mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors">
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
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_8px_30px_-15px_rgba(146,64,14,0.3)]"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Home;
