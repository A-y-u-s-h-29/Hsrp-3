import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-10 leading-relaxed">
          Your privacy is very important to us. This Privacy Policy explains how
          we handle your personal information when you use our services.
        </p>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We only collect the information that you voluntarily provide to us
          (such as name, contact details, and order-related details). We do not
          collect unnecessary data.
        </p>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Your details are used only for processing your order, providing
          support, and improving our services. We never sell, rent, or misuse
          your personal information.
        </p>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Data Protection
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We use secure methods to protect your data against unauthorized
          access, alteration, or disclosure. Your information is handled with
          care and responsibility.
        </p>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page.
        </p>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          through the Contact page.
        </p>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
