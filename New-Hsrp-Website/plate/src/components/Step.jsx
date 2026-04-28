import React from "react";

const Step = () => {
  const steps = [
    {
      step: "01",
      title: "Visit Our Website",
      description: "Go to our official website to begin the process",
      text: "Visit our official website to start your HSRP application. Our website makes applying for a HSRP plate simple by organizing all the necessary information in one place.",
      icon: "🌐",
      color: "blue"
    },
    {
      step: "02",
      title: "Enter Vehicle Information",
      description: "Provide your vehicle details accurately",
      text: "After visiting our website, you must enter your automobile information. This includes your car's chassis, engine, registration, and fuel type. Accurate information is needed to produce and register your HSRP number plate.",
      icon: "📝",
      color: "green"
    },
    {
      step: "03",
      title: "Choose Installation Place",
      description: "Select your preferred installation location",
      text: "Choose a location to install. Choose our simple home installation service or one of our licensed installation centers in India. Select the option that meets your needs.",
      icon: "📍",
      color: "purple"
    },
    {
      step: "04",
      title: "Pay Securely",
      description: "Complete payment through secure gateway",
      text: "After selecting your installation place, you'll complete the payment. Our 100% secure payment gateway gives you peace of mind when you make your purchase. After your payment is processed, you will receive an email with instructions and your receipt.",
      icon: "💳",
      color: "orange"
    },
    {
      step: "05",
      title: "Schedule Installation",
      description: "Book your installation appointment",
      text: "After payment, schedule your installation appointment. Choose your preferred day and time, and we'll handle the rest. Our professionals will securely and professionally install your HSRP plate at your home or at an installation facility.",
      icon: "📅",
      color: "red"
    }
  ];

  const colorSchemes = {
    blue: {
      gradient: "from-blue-400 via-cyan-400 to-blue-500",
      glow: "shadow-blue-200",
      bg: "bg-gradient-to-br from-blue-100/60 to-cyan-100/60",
      border: "border-blue-200/60",
      text: "text-blue-600",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      dot: "bg-cyan-400",
      light: "from-blue-50 to-blue-100",
      badge: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    green: {
      gradient: "from-emerald-400 via-green-400 to-emerald-500",
      glow: "shadow-emerald-200",
      bg: "bg-gradient-to-br from-emerald-100/60 to-green-100/60",
      border: "border-emerald-200/60",
      text: "text-emerald-600",
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-500",
      dot: "bg-emerald-400",
      light: "from-emerald-50 to-emerald-100",
      badge: "bg-gradient-to-r from-emerald-500 to-green-500"
    },
    purple: {
      gradient: "from-purple-400 via-violet-400 to-purple-500",
      glow: "shadow-purple-200",
      bg: "bg-gradient-to-br from-purple-100/60 to-violet-100/60",
      border: "border-purple-200/60",
      text: "text-purple-600",
      iconBg: "bg-gradient-to-br from-purple-400 to-violet-500",
      dot: "bg-violet-400",
      light: "from-purple-50 to-purple-100",
      badge: "bg-gradient-to-r from-purple-500 to-violet-500"
    },
    orange: {
      gradient: "from-amber-400 via-orange-400 to-amber-500",
      glow: "shadow-amber-200",
      bg: "bg-gradient-to-br from-amber-100/60 to-orange-100/60",
      border: "border-amber-200/60",
      text: "text-amber-600",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      dot: "bg-amber-400",
      light: "from-amber-50 to-amber-100",
      badge: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    red: {
      gradient: "from-rose-400 via-red-400 to-rose-500",
      glow: "shadow-rose-200",
      bg: "bg-gradient-to-br from-rose-100/60 to-red-100/60",
      border: "border-rose-200/60",
      text: "text-rose-600",
      iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
      dot: "bg-rose-400",
      light: "from-rose-50 to-rose-100",
      badge: "bg-gradient-to-r from-rose-500 to-red-500"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern - Very Subtle */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Glassmorphism Header Card */}
            <div className="backdrop-blur-lg bg-white/70 rounded-3xl border border-white/80 p-8 lg:p-12 mb-16 shadow-xl shadow-blue-100/50">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-emerald-500/10 px-4 py-2 rounded-full mb-6 border border-white/60">
                    <span className="text-gray-700 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                      📋 STEP-BY-STEP GUIDE
                    </span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                    Get Your <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">HSRP Plate</span>
                    <br />
                    In 5 Simple Steps
                  </h1>
                  
                  <p className="text-xl text-gray-600 font-light mb-8 max-w-2xl">
                    Our streamlined process makes getting your HSRP plate fast, secure, and hassle-free.
                    Follow the steps below to complete your application in minutes.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">100% Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">24/7 Customer Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Nationwide Service</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats Glass Card */}
                <div className="backdrop-blur-lg bg-white/60 rounded-2xl border border-white/60 p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">5</div>
                      <div className="text-gray-600 text-sm font-medium">Simple Steps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">24/7</div>
                      <div className="text-gray-600 text-sm font-medium">Online</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">100%</div>
                      <div className="text-gray-600 text-sm font-medium">Secure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">50K+</div>
                      <div className="text-gray-600 text-sm font-medium">Customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Section - Desktop */}
            <div className="hidden lg:block relative">
              {/* Center Glass Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1.5 backdrop-blur-sm bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-rose-400/30 rounded-full border border-white/60 shadow-inner"></div>
              
              {/* Top Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-2">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              
              {/* Steps */}
              <div className="space-y-32">
                {steps.map((step, index) => {
                  const colors = colorSchemes[step.color];
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Glass Card */}
                      <div className={`flex items-center justify-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                        {/* Card Content */}
                        <div className={`flex-1 ${isEven ? 'pr-8' : 'pl-8'}`}>
                          <div className={`backdrop-blur-md bg-white/60 rounded-3xl border ${colors.border} p-8 shadow-xl ${colors.glow} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-100/50 group`}>
                            {/* Step Indicator */}
                            <div className={`absolute -top-4 ${isEven ? '-right-4' : '-left-4'} w-20 h-20 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg border-4 border-white backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-white font-black text-2xl">{step.step}</span>
                            </div>
                            
                            <div className="flex items-start gap-6">
                              {/* Icon */}
                              <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center text-3xl shadow-md backdrop-blur-sm`}>
                                <span className="text-white">{step.icon}</span>
                              </div>
                              
                              {/* Content */}
                              <div className="flex-1">
                                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-emerald-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                  {step.title}
                                </h3>
                                <p className={`${colors.text} font-bold mb-4 text-lg`}>
                                  {step.description}
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                  {step.text}
                                </p>
                              </div>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-100/30 to-transparent blur-sm"></div>
                          </div>
                        </div>
                        
                        {/* Timeline Node */}
                        <div className="relative flex-shrink-0 z-10">
                          <div className={`relative w-24 h-24 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg border-8 border-white transform hover:scale-110 transition-all duration-300 group-hover:shadow-xl`}>
                            <span className="text-4xl text-white">{step.icon}</span>
                            {/* Subtle Glow */}
                            <div className={`absolute inset-0 rounded-2xl ${colors.glow} blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                          </div>
                          
                          {/* Connecting Line Dots */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 flex flex-col items-center">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className={`w-2 h-2 ${colors.dot} rounded-full mb-2 opacity-${50 - i*15}`}></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Empty space */}
                        <div className="flex-1"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="space-y-8">
                {steps.map((step, index) => {
                  const colors = colorSchemes[step.color];
                  
                  return (
                    <div key={index} className="relative group">
                      {/* Glass Card */}
                      <div className={`backdrop-blur-md bg-white/60 rounded-3xl border ${colors.border} p-6 shadow-lg ${colors.glow} transition-all duration-300 hover:shadow-xl`}>
                        {/* Step Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`relative w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center text-3xl shadow-md`}>
                            <span className="text-white">{step.icon}</span>
                            <div className={`absolute -inset-1 rounded-2xl ${colors.glow} blur-sm opacity-20`}></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className={`inline-flex items-center backdrop-blur-sm bg-gradient-to-r ${colors.light} px-3 py-1 rounded-full mb-2 border ${colors.border}`}>
                              <span className={`${colors.text} text-sm font-bold`}>STEP {step.step}</span>
                            </div>
                            <h3 className="text-xl font-black text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <p className={`${colors.text} font-bold mb-4`}>
                          {step.description}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {step.text}
                        </p>
                        
                        {/* Progress Indicator */}
                        {index < steps.length - 1 && (
                          <div className="flex justify-center mt-6 pt-6 border-t border-gray-200/60">
                            <div className="flex items-center gap-2">
                              {[...Array(3)].map((_, i) => (
                                <div key={i} className={`w-1.5 h-1.5 ${colors.dot} rounded-full opacity-${70 - i*20}`}></div>
                              ))}
                              <div className="text-sm text-gray-500 ml-2 font-medium">
                                Next: <span className="font-bold">{steps[index + 1].title}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            
          </div>
        </div>

        {/* Footer Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Step;