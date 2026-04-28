import React from "react";

const Instruct = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wide">COMPLETE GUIDE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HSRP Number Plates
              <span className="block text-blue-200 text-2xl md:text-3xl mt-3 font-light">
                Complete Installation Guide & Process
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Everything you need to know about High Security Registration Plates - from requirements to installation
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-1.5 bg-blue-400 rounded-full"></div>
              <div className="w-12 h-1.5 bg-green-400 rounded-full"></div>
              <div className="w-12 h-1.5 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Quick Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <span className="text-2xl text-blue-600">📋</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">Document Checklist</h3>
            </div>
            <p className="text-gray-600 text-sm">RC, ID proof, address proof, and vehicle details required</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <span className="text-2xl text-green-600">⚡</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">Fast Processing</h3>
            </div>
            <p className="text-gray-600 text-sm">Typically installed within 5-7 working days after application</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <span className="text-2xl text-purple-600">📍</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">Home Installation</h3>
            </div>
            <p className="text-gray-600 text-sm">Available in select cities for your convenience</p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-16">
          {/* Section 1: What is HSRP? */}
          <section className="scroll-mt-20" id="what-is-hsrp">
            <div className="flex items-center mb-8">
              <div className="bg-blue-600 w-1 h-8 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">What are HSRP Plates?</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 p-8 md:p-10">
                  <p className="text-gray-700 text-lg mb-6">
                    High Security Registration Plates (HSRP) are government-mandated vehicle number plates with advanced security features to prevent tampering, forgery, and theft. These plates are standardized across India for better vehicle identification and tracking.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-blue-600 font-bold text-2xl mb-2">2019</div>
                      <div className="text-sm font-medium text-gray-700">Mandated by MoRTH</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="text-green-600 font-bold text-2xl mb-2">All</div>
                      <div className="text-sm font-medium text-gray-700">Vehicle Types</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-purple-600 font-bold text-2xl mb-2">₹</div>
                      <div className="text-sm font-medium text-gray-700">Standard Pricing</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 text-white">
                  <h3 className="font-bold text-xl mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Chromium-based hologram</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>10-digit PIN laser etched</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Reflective surface</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Snap-lock mechanism</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Step-by-Step Process */}
          <section className="scroll-mt-20" id="process">
            <div className="flex items-center mb-8">
              <div className="bg-green-600 w-1 h-8 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Application Process</h2>
            </div>
            
            <div className="relative">
              {/* Timeline connector */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500 ml-6"></div>
              
              <div className="space-y-10">
                {/* Step 1 */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 md:flex items-center">
                  <div className="absolute -left-4 md:left-6 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="md:ml-20">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Online Application</h3>
                    <p className="text-gray-700 mb-4">
                      Fill our simple form with vehicle details - registration number, chassis number, engine number, and owner information.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl inline-block">
                      <span className="text-sm font-medium text-blue-700">Time: 5-10 minutes</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 md:flex items-center">
                  <div className="absolute -left-4 md:left-6 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="md:ml-20">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Document Verification</h3>
                    <p className="text-gray-700 mb-4">
                      Upload required documents for verification. Our system validates your details against government databases.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">RC Copy</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">ID Proof</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Address Proof</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 md:flex items-center">
                  <div className="absolute -left-4 md:left-6 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="md:ml-20">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Payment & Scheduling</h3>
                    <p className="text-gray-700 mb-4">
                      Make secure payment and choose your preferred installation date. Receive confirmation with appointment details.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-xl inline-block">
                      <span className="text-sm font-medium text-purple-700">Multiple payment options available</span>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 md:flex items-center">
                  <div className="absolute -left-4 md:left-6 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      4
                    </div>
                  </div>
                  <div className="md:ml-20">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
                    <p className="text-gray-700 mb-4">
                      Certified technician installs your HSRP plates at chosen location. Installation takes approximately 30-45 minutes.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-xl inline-block">
                      <span className="text-sm font-medium text-orange-700">Home/service center options</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Benefits */}
          <section className="scroll-mt-20" id="benefits">
            <div className="flex items-center mb-8">
              <div className="bg-purple-600 w-1 h-8 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Benefits of HSRP</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-xl mr-4 ${benefit.color}`}>
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: FAQ */}
          <section className="scroll-mt-20" id="faq">
            <div className="flex items-center mb-8">
              <div className="bg-red-600 w-1 h-8 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <details key={index} className="group p-6 hover:bg-gray-50 transition-colors">
                    <summary className="flex justify-between items-center cursor-pointer">
                      <h3 className="font-semibold text-gray-900 text-lg">{faq.question}</h3>
                      <span className="text-gray-400 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          
        </div>
      </div>
    </div>
  );
};

// Benefits data
const benefits = [
  {
    icon: "🛡️",
    title: "Enhanced Security",
    description: "Tamper-proof design with unique identification prevents theft and misuse of your vehicle registration.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: "⚖️",
    title: "Legal Compliance",
    description: "Fulfill government mandate and avoid penalties. Required for all vehicles in India.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: "🚗",
    title: "Nationwide Recognition",
    description: "Standardized format recognized across all states, facilitating seamless interstate travel.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: "🔍",
    title: "Easy Tracking",
    description: "Unique identification helps authorities track vehicles, aiding in recovery if stolen.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: "⏱️",
    title: "Quick Processing",
    description: "Streamlined application and installation process completed within days, not weeks.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: "🏠",
    title: "Home Installation",
    description: "Convenient at-your-doorstep service available in major cities across India.",
    color: "bg-indigo-100 text-indigo-600"
  }
];

// FAQ data
const faqs = [
  {
    question: "Which vehicles require HSRP?",
    answer: "All vehicles registered in India - including two-wheelers, cars, and commercial vehicles - must have HSRP plates as per government mandate."
  },
  {
    question: "What documents are required?",
    answer: "You need your vehicle's RC, owner's ID proof, address proof, and basic vehicle details like chassis and engine number."
  },
  {
    question: "How long does installation take?",
    answer: "The online application takes 5-10 minutes. After approval, installation is typically scheduled within 5-7 working days and takes about 30-45 minutes."
  },
  {
    question: "Can I install HSRP myself?",
    answer: "No, HSRP plates must be installed by authorized technicians to ensure proper fitting and registration in the government database."
  },
  {
    question: "What if I move to another state?",
    answer: "HSRP plates are valid across India. When moving states, you need to re-register your vehicle but the HSRP plates remain valid."
  }
];

export default Instruct;