import React from "react";

const TermsConditions = () => {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-10 leading-relaxed">
          By accessing and using this website, you agree to the following terms
          and conditions. Please read them carefully before using our services.
        </p>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Use of Our Services
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Our services are intended for personal and lawful use only.</li>
          <li>
            You agree not to misuse the platform or attempt unauthorized access.
          </li>
          <li>
            Any false or incorrect details provided are the responsibility of
            the user.
          </li>
        </ul>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Orders & Payments
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>
            Payments must be made through approved and secure channels only.
          </li>
          <li>
            Proof of payment may be required for verification purposes.
          </li>
          <li>
            All transactions are processed securely, and we do not store
            sensitive financial data.
          </li>
        </ul>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Limitations of Liability
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>
            We are not responsible for delays caused by third-party services or
            technical issues.
          </li>
          <li>
            We are not liable for incorrect details entered by users during the
            ordering process.
          </li>
          <li>
            We are not responsible for misuse of services by users.
          </li>
        </ul>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Changes to These Terms
        </h2>
        <p className="text-gray-700 mb-10 leading-relaxed">
          We reserve the right to update or modify these Terms & Conditions at
          any time. Continued use of the website implies acceptance of the
          updated terms.
        </p>

        {/* Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions regarding these Terms & Conditions, please
          contact us through the Contact page.
        </p>

      </div>
    </section>
  );
};

export default TermsConditions;
