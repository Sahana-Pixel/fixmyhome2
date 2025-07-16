import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiUser } from 'react-icons/fi';
import Header from "../UI/Header";

const ContactPage = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Header
            icon={<FiMail />}
            label="Get In Touch"
            title="Contact"
            highlight="Our Team"
            description="We're here to help with all your home service needs. Reach out anytime."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-teal-500/10 p-3 rounded-lg text-teal-400">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">24/7 Emergency Service</p>
                  <a href="tel:+18005551234" className="text-teal-400 hover:text-teal-300 transition-colors block mt-1">
                    +91 9876543210
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-teal-500/10 p-3 rounded-lg text-teal-400">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-400">General inquiries</p>
                  <a href="mailto:help@fixmyhome.com" className="text-teal-400 hover:text-teal-300 transition-colors block mt-1">
                    help@fixmyhome.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-teal-500/10 p-3 rounded-lg text-teal-400">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Office</h4>
                  <p className="text-gray-400">Visit us during business hours</p>
                  <address className="text-gray-300 not-italic mt-1">
             

                    123 Home Service Nagar<br />  
2nd Floor, Suite 200 <br /> 
Bengaluru, Karnataka 560001  
India
                  </address>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-teal-500/10 p-3 rounded-lg text-teal-400">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Hours</h4>
                  <ul className="text-gray-300 space-y-1 mt-1">
                    <li className="flex justify-between">
                      <span>Monday-Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency Only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <FiPhone />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <select
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Service Type</option>
                  <option value="general">General Repairs</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="hvac">HVAC</option>
                  <option value="smart-home">Smart Home</option>
                  <option value="appliance">Appliance Repair</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538442689271!2d-122.4199066846821!3d37.77492997975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="filter grayscale-50 contrast-125"
          ></iframe>
        </div> */}

        {/* Emergency CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need Emergency Service?
          </h3>
          <p className="text-red-100 max-w-2xl mx-auto mb-6">
            For urgent plumbing, electrical, or HVAC issues, call our 24/7 emergency hotline.
          </p>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300"
          >
            <FiPhone className="mr-2" />
            Call Now: +1 (800) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;