import React from "react";

const HSRPOlderVehicles = () => {
  const steps = [
    {
      step: "1. Prepare Police Report",
      desc: "Report stolen/lost plates to police for official documentation required for replacement.",
      icon: "📝",
      color: "blue"
    },
    {
      step: "2. Online Application",
      desc: "Fill our streamlined digital form with vehicle details and upload documents.",
      icon: "🌐",
      color: "green"
    },
    {
      step: "3. Installation Plan",
      desc: "Choose between home installation or visit our authorized centers.",
      icon: "📍",
      color: "purple"
    },
    {
      step: "4. Pay & Install",
      desc: "Secure payment and professional installation with verification.",
      icon: "✅",
      color: "orange"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      desc: "Advanced security features against theft and fraud",
      icon: "🔒"
    },
    {
      title: "Legal Compliance",
      desc: "Fully compliant with government regulations",
      icon: "⚖️"
    },
    {
      title: "Nationwide Traceability",
      desc: "Easy tracking and identification across India",
      icon: "📍"
    },
    {
      title: "Future-Proof",
      desc: "Stay updated with evolving vehicle regulations",
      icon: "🚀"
    }
  ];

  const features = [
    {
      title: "24-Hour Service",
      desc: "Round-the-clock support and quick processing",
      icon: "⏱️",
      stat: "24/7"
    },
    {
      title: "Success Rate",
      desc: "Verified installations across India",
      icon: "📈",
      stat: "99.8%"
    },
    {
      title: "Cities Covered",
      desc: "Nationwide network of service centers",
      icon: "🏙️",
      stat: "200+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with Glass Effect */}
        <div className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-blue-100 shadow-sm">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-700">🚗 OLDER VEHICLES & REPLACEMENTS</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
                  HSRP UPGRADE
                </span>
                <br />
                <span className="text-gray-900">FOR OLDER VEHICLES</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your vehicle with state-of-the-art high-security plates. 
                Mandatory for pre-2019 vehicles. Secure, legal, and future-proof.
              </p>
              
              {/* Hero Stats Glass Cards */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all duration-300 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                      {feature.icon}
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{feature.title}</div>
                  </div>
                ))}
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
          {/* Process Steps - Glass Cards */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Simple 4-Step
                </span>
                <br />
                Upgrade Process
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our streamlined process ensures quick and hassle-free HSRP installation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Glass Card */}
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all duration-500 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg text-white">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-center group-hover:text-cyan-600 transition-colors duration-300 text-gray-900">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.desc}
                    </p>
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-100/0 to-blue-100/0 group-hover:from-cyan-100/50 group-hover:to-blue-100/50 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section - Split Layout */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-200 to-blue-200 rounded-3xl p-1 backdrop-blur-sm">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center border border-blue-100">
                    <div className="text-center">
                      <div className="text-8xl mb-6">🚗</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        PRE-2019 VEHICLES
                      </div>
                      <div className="text-gray-600 mt-2">Mandatory Upgrade Required</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-lg">
                <div className="text-3xl font-bold text-cyan-600">48H</div>
                <div className="text-sm text-gray-600">Average Processing</div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Why Upgrade
                </span>
                <br />
                Your Vehicle Now?
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-orange-100">
                        <span className="text-2xl text-orange-600">{benefit.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300 text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
             
            </div>
          </section>

          {/* Features Grid with Glass Morphism */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Premium <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Experience the best-in-class HSRP upgrade service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Verification",
                  desc: "Instant online verification with government databases",
                  icon: "🔐",
                  gradient: "from-purple-500 to-pink-500",
                  bg: "from-purple-50 to-pink-50"
                },
                {
                  title: "Home Installation",
                  desc: "Professional installation at your preferred location",
                  icon: "🏠",
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "from-blue-50 to-cyan-50"
                },
                {
                  title: "24/7 Support",
                  desc: "Round-the-clock customer support and assistance",
                  icon: "📞",
                  gradient: "from-green-500 to-emerald-500",
                  bg: "from-green-50 to-emerald-50"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Glass Card with Gradient Border */}
                  <div className="relative rounded-3xl p-1 bg-gradient-to-r from-white to-gray-50 shadow-sm">
                    {/* Glass Content */}
                    <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-blue-100 h-full overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 text-white`}>
                          <span className="text-3xl">{feature.icon}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-gray-900 transition-colors duration-300 text-gray-900">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 text-center leading-relaxed relative z-10">
                          {feature.desc}
                        </p>
                        
                        {/* Animated Line */}
                        <div className={`mt-8 w-16 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto group-hover:w-24 transition-all duration-300`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          
        </div>

      </div>
    </div>
  );
};

export default HSRPOlderVehicles;