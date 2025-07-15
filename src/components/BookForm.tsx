import { useState } from 'react';
import { 
  FiUser, FiTool, 
  FiCheckCircle, FiArrowRight, FiCalendar, 
  FiClock, FiMapPin, FiDollarSign 
} from 'react-icons/fi';
import { BsFillLightningFill, BsShieldCheck } from 'react-icons/bs';
import { IoMdPricetag } from 'react-icons/io';
import Header from '../UI/Header';

const BookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Electrical Repair',
    urgency: 'Within 24 hours',
    date: '',
    time: '',
    address: '',
    description: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'Electrical Repair',
    'Plumbing Service',
    'HVAC Maintenance',
    'Appliance Repair',
    'Smart Home Setup',
    'Emergency Service',
    'General Handyman',
    'Carpentry Work'
  ];

  const urgencyOptions = [
    'Emergency (within 2 hours)',
    'Urgent (today)',
    'Within 24 hours',
    'Flexible schedule'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ 
        name: '', 
        phone: '', 
        email: '',
        service: 'Electrical Repair', 
        urgency: 'Within 24 hours',
        date: '',
        time: '',
        address: '',
        description: '' 
      });
      setCurrentStep(1);
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <section id="booking" className="relative py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div>
        <Header
  icon={<BsFillLightningFill />}
  label="Priority Booking"
  title="Schedule Your"
  highlight="Service"
  description="Complete our quick booking form and enjoy priority service from our certified technicians"
/></div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-10">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${currentStep >= step ? 'border-teal-500 bg-teal-500/20 text-teal-400' : 'border-gray-600 text-gray-400'}`}
              >
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 ${currentStep > step ? 'bg-teal-500' : 'bg-gray-600'}`}></div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-400/30 transition-all duration-300 overflow-hidden p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                    <FiUser className="mr-2 text-teal-400" />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-gray-300 block mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium text-gray-300 block mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="(123) 456-7890"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 block mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="your@email.com"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="text-sm font-medium text-gray-300 block mb-1">
                        Service Needed*
                      </label>
                      <select
                        id="service"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none transition-all"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                      >
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.name || !formData.phone}
                      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                        !formData.name || !formData.phone 
                          ? 'bg-gray-600 cursor-not-allowed text-gray-400' 
                          : 'bg-teal-500 hover:bg-teal-600 text-white'
                      }`}
                    >
                      Next: Service Details
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                    <FiTool className="mr-2 text-teal-400" />
                    Service Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="urgency" className="text-sm font-medium text-gray-300 block mb-1">
                        Urgency Level*
                      </label>
                      <select
                        id="urgency"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none transition-all"
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        required
                      >
                        {urgencyOptions.map((option) => (
                          <option key={option} value={option} className="bg-gray-800">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {formData.urgency !== 'Emergency (within 2 hours)' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="text-sm font-medium text-gray-300 block mb-1">
                            Preferred Date
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              id="date"
                              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                            <FiCalendar className="absolute right-3 top-3.5 text-gray-400" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="time" className="text-sm font-medium text-gray-300 block mb-1">
                            Preferred Time
                          </label>
                          <div className="relative">
                            <input
                              type="time"
                              id="time"
                              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            />
                            <FiClock className="absolute right-3 top-3.5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="address" className="text-sm font-medium text-gray-300 block mb-1">
                        Service Address*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="address"
                          placeholder="123 Main St, City, State"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          required
                        />
                        <FiMapPin className="absolute right-3 top-3.5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="text-sm font-medium text-gray-300 block mb-1">
                        Service Description
                      </label>
                      <textarea
                        id="description"
                        placeholder="Please describe your service needs in detail..."
                        rows={4}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center bg-gray-700 hover:bg-gray-600 text-white"
                    >
                      <FiArrowRight className="mr-2 transform rotate-180" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.address}
                      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                        !formData.address 
                          ? 'bg-gray-600 cursor-not-allowed text-gray-400' 
                          : 'bg-teal-500 hover:bg-teal-600 text-white'
                      }`}
                    >
                      Next: Review & Submit
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                    <BsShieldCheck className="mr-2 text-teal-400" />
                    Review & Confirm
                  </h3>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between border-b border-gray-600 pb-2">
                      <span className="text-gray-400">Service:</span>
                      <span className="text-white font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-600 pb-2">
                      <span className="text-gray-400">Urgency:</span>
                      <span className="text-white font-medium">{formData.urgency}</span>
                    </div>
                    {formData.date && (
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-400">Date:</span>
                        <span className="text-white font-medium">
                          {new Date(formData.date).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    )}
                    {formData.time && (
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-400">Time:</span>
                        <span className="text-white font-medium">
                          {new Date(`2000-01-01T${formData.time}`).toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            hour12: true 
                          })}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-gray-600 pb-2">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white font-medium">{formData.address || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Estimated Price:</span>
                      <span className="text-teal-400 font-bold">$99 - $249</span>
                    </div>
                  </div>

                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4 flex items-start">
                    <IoMdPricetag className="text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Price Estimate</h4>
                      <p className="text-gray-300 text-sm">
                        Final pricing will be confirmed after technician assessment. This estimate includes our standard service fee.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-4 h-4 rounded bg-gray-700 border-gray-600 focus:ring-teal-500 mr-2"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the <a href="#" className="text-teal-400 hover:underline">Terms of Service</a> and <a href="#" className="text-teal-400 hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center bg-gray-700 hover:bg-gray-600 text-white"
                    >
                      <FiArrowRight className="mr-2 transform rotate-180" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                        isSubmitting 
                          ? 'bg-teal-600 cursor-not-allowed' 
                          : 'bg-teal-500 hover:bg-teal-600 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm Booking
                          <FiArrowRight className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Success Message */}
            {isSuccess && (
              <div className="mt-6 p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg text-teal-300 animate-fade-in flex items-start">
                <FiCheckCircle className="mr-3 mt-0.5 flex-shrink-0 text-xl" />
                <div>
                  <h4 className="font-bold text-white mb-1">Booking Confirmed!</h4>
                  <p className="text-sm">
                    Your service request has been submitted. Our team will contact you within 15 minutes to confirm details.
                    A confirmation has been sent to {formData.email || 'your phone'}.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-teal-400/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  <BsFillLightningFill className="text-2xl text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Priority Dispatch</h3>
                  <p className="text-gray-400 text-sm">
                    Emergency requests receive immediate attention with average response times under 45 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-teal-400/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  <FiDollarSign className="text-2xl text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
                  <p className="text-gray-400 text-sm">
                    Upfront estimates with no hidden fees. Price match guarantee on all services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-teal-400/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  <BsShieldCheck className="text-2xl text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Full Protection</h3>
                  <p className="text-gray-400 text-sm">
                    All work comes with a 2-year warranty and $1M liability coverage for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-teal-400/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg">
                  <FiCheckCircle className="text-2xl text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-gray-400 text-sm">
                    If you're not 100% satisfied, we'll make it right or your money back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-teal-400 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-indigo-500 filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default BookForm;