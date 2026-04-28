import React, { useState } from "react";
import { 
  FaCar, 
  FaMotorcycle, 
  FaTruck, 
  FaTractor, 
  FaBolt, 
  FaStickerMule, 
  FaRegListAlt,
  FaArrowRight,
  FaCheckCircle,
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaStar
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const navigate = useNavigate();

  // Enhanced color themes with gradients
  const getServiceTheme = (id) => {
    const themes = {
      highSecurity: {
        iconGradient: "from-red-500 to-pink-600",
        bgGradient: "from-red-50 to-pink-50",
        hoverGradient: "from-red-600 to-pink-700",
        lightGradient: "bg-gradient-to-br from-red-500/10 to-pink-500/10",
        badgeColor: "bg-gradient-to-r from-red-500 to-pink-600",
        textColor: "text-red-600",
        lightText: "text-red-500"
      },
      twoWheeler: {
        iconGradient: "from-green-500 to-emerald-600",
        bgGradient: "from-green-50 to-emerald-50",
        hoverGradient: "from-green-600 to-emerald-700",
        lightGradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        badgeColor: "bg-gradient-to-r from-green-500 to-emerald-600",
        textColor: "text-green-600",
        lightText: "text-green-500"
      },
      fourWheeler: {
        iconGradient: "from-blue-500 to-cyan-600",
        bgGradient: "from-blue-50 to-cyan-50",
        hoverGradient: "from-blue-600 to-cyan-700",
        lightGradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
        badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
        textColor: "text-blue-600",
        lightText: "text-blue-500"
      },
      colorStickers: {
        iconGradient: "from-purple-500 to-violet-600",
        bgGradient: "from-purple-50 to-violet-50",
        hoverGradient: "from-purple-600 to-violet-700",
        lightGradient: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
        badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600",
        textColor: "text-purple-600",
        lightText: "text-purple-500"
      },
      heavyWheeler: {
        iconGradient: "from-orange-500 to-amber-600",
        bgGradient: "from-orange-50 to-amber-50",
        hoverGradient: "from-orange-600 to-amber-700",
        lightGradient: "bg-gradient-to-br from-orange-500/10 to-amber-500/10",
        badgeColor: "bg-gradient-to-r from-orange-500 to-amber-600",
        textColor: "text-orange-600",
        lightText: "text-orange-500"
      },
      tractorTrailer: {
        iconGradient: "from-yellow-500 to-amber-500",
        bgGradient: "from-yellow-50 to-amber-50",
        hoverGradient: "from-yellow-600 to-amber-600",
        lightGradient: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10",
        badgeColor: "bg-gradient-to-r from-yellow-500 to-amber-600",
        textColor: "text-yellow-600",
        lightText: "text-yellow-500"
      },
      electricVehicle: {
        iconGradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-50 to-teal-50",
        hoverGradient: "from-emerald-600 to-teal-700",
        lightGradient: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
        badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
        textColor: "text-emerald-600",
        lightText: "text-emerald-500"
      },
      trackOrder: {
        iconGradient: "from-indigo-500 to-blue-600",
        bgGradient: "from-indigo-50 to-blue-50",
        hoverGradient: "from-indigo-600 to-blue-700",
        lightGradient: "bg-gradient-to-br from-indigo-500/10 to-blue-500/10",
        badgeColor: "bg-gradient-to-r from-indigo-500 to-blue-600",
        textColor: "text-indigo-600",
        lightText: "text-indigo-500"
      }
    };
    return themes[id] || themes.fourWheeler;
  };

  const services = [
    {
      id: "highSecurity",
      title: "High Security Registration Plate with Colour Sticker",
      description: "Get your high security registration plate with color sticker as per government standards",
      icon: <FaShieldAlt className="text-2xl" />,
      features: ["ISO Certified", "Hologram Sticker", "Laser Branded", "Govt Approved"],
      deliveryTime: "24 Hours",
      rating: 4.9,
      popular: true
    },
    {
      id: "twoWheeler",
      title: "Two Wheeler Plate",
      description: "Book number plates for two-wheelers - bikes, scooters, and motorcycles",
      icon: <FaMotorcycle className="text-2xl" />,
      features: ["Durable Material", "Weather Resistant", "Easy Installation", "Quick Fix"],
      deliveryTime: "24 Hours",
      rating: 4.8,
      popular: true
    },
    {
      id: "fourWheeler",
      title: "Four Wheeler Plate",
      description: "Book number plates for four-wheelers - cars, SUVs, and sedans",
      icon: <FaCar className="text-2xl" />,
      features: ["Standard Size", "Reflective Surface", "Quick Delivery", "Custom Fit"],
      deliveryTime: "24 Hours",
      rating: 4.9,
      popular: true
    },
    {
      id: "colorStickers",
      title: "Only Colour Stickers",
      description: "Get only color stickers for your vehicle with secure features",
      icon: <FaStickerMule className="text-2xl" />,
      features: ["Anti-Counterfeit", "Self-Destructive", "QR Code", "Scratch Proof"],
      deliveryTime: "4 Hours",
      rating: 4.7
    },
    {
      id: "heavyWheeler",
      title: "Heavy Wheeler Plate",
      description: "Book number plates for heavy vehicles - trucks, buses, and lorries",
      icon: <FaTruck className="text-2xl" />,
      features: ["Extra Durable", "Large Size", "Commercial Grade", "Rust Proof"],
      deliveryTime: "48 Hours",
      rating: 4.8
    },
    {
      id: "tractorTrailer",
      title: "Tractor & Trailer Number Plate",
      description: "Book number plates for tractors and trailers - agricultural and commercial",
      icon: <FaTractor className="text-2xl" />,
      features: ["Rust Proof", "Farm Ready", "Custom Sizes", "Heavy Duty"],
      deliveryTime: "48 Hours",
      rating: 4.6
    },
    {
      id: "electricVehicle",
      title: "Electric Vehicle Number Plate",
      description: "Book number plates for electric vehicles with special identification",
      icon: <FaBolt className="text-2xl" />,
      features: ["Green Border", "EV Specific", "Fast Track", "Eco-Friendly"],
      deliveryTime: "24 Hours",
      rating: 4.9,
      popular: true
    },
    {
      id: "trackOrder",
      title: "Track Your Order & Grievance Redressal",
      description: "Track your order status and submit grievances for quick resolution",
      icon: <FaHeadset className="text-2xl" />,
      features: ["Real-time Tracking", "24/7 Support", "Quick Resolution", "Live Chat"],
      deliveryTime: "Instant",
      rating: 4.8
    },
  ];

  const handleBook = (serviceId) => {
    setLoadingId(serviceId);
    setTimeout(() => {
      navigate('/booking');
      setLoadingId(null);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full shadow-sm">
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Premium Vehicle Services
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></span>
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Vehicle Number Plate
            <span className="block mt-2">
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                  Services
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-30"></span>
              </span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Premium, government-approved number plates with doorstep installation.
            Fast, secure, and completely hassle-free process.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <FaClock className="text-blue-500 text-sm" />
              <span className="text-sm font-medium text-gray-700">24H Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <FaMapMarkerAlt className="text-green-500 text-sm" />
              <span className="text-sm font-medium text-gray-700">Doorstep Installation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <FaStar className="text-yellow-500 text-sm" />
              <span className="text-sm font-medium text-gray-700">4.8/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Enhanced Service Cards Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const theme = getServiceTheme(service.id);
            const isHovered = hoveredService === service.id;
            
            return (
              <div
                key={service.id}
                className="relative group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Popular
                    </div>
                  </div>
                )}

                <div className={`relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 overflow-hidden
                  ${isHovered ? 'transform -translate-y-2' : ''}`}>
                  
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 ${theme.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Top Border Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${theme.badgeColor}`}></div>
                  
                  <div className="relative flex flex-col h-full">
                    
                    {/* Icon Section */}
                    <div className="mb-6 flex justify-center">
                      <div className={`relative p-4 rounded-xl ${theme.bgGradient} group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${theme.iconGradient} rounded-xl opacity-20`}></div>
                        <span className={`relative ${theme.textColor} group-hover:text-white transition-colors duration-300`}>
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-50 transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <FaClock className={`text-sm ${theme.lightText}`} />
                          <span className="text-xs font-medium text-gray-600">{service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500 text-sm" />
                          <span className="text-xs font-bold text-gray-700">{service.rating}</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <button
                        onClick={() => handleBook(service.id)}
                        disabled={loadingId === service.id}
                        className={`w-full bg-gradient-to-r ${theme.iconGradient} ${theme.hoverGradient} text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 
                          transform group-hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed 
                          disabled:transform-none flex items-center justify-center gap-2 overflow-hidden group/btn`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {loadingId === service.id ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <span>Book Now</span>
                              <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts are available 24/7 to help you select the perfect number plate service for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Support
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl border border-gray-300 transition-all duration-300 shadow-sm hover:shadow">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Services;