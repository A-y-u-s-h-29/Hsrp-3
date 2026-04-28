import React from "react";
import { Link } from "react-router-dom";

const RefundCancellation = () => {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Refund & Cancellation Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-10 leading-relaxed">
          We value customer satisfaction and aim to make our policies simple,
          transparent, and fair. Please read the following carefully.
        </p>

        {/* Cancellations */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Cancellations
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>
            Orders can be cancelled within a specific time window after placing
            them. Once processing begins, cancellations may not be possible.
          </li>
          <li>
            If you wish to cancel an order, please contact us promptly through
            the{" "}
            <Link
              to="/contact"
              className="text-[#3B2F8F] font-medium hover:underline"
            >
              Contact Page
            </Link>
            .
          </li>
          <li>
            Any cancellation requests outside the allowed time frame cannot be
            accommodated.
          </li>
        </ul>

        {/* Refunds */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Refunds
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>
            Refunds are processed only if the order was cancelled within the
            permitted time frame or if there is a valid reason approved by our
            support team.
          </li>
          <li>
            Refunds will be issued to the original payment method within a
            reasonable time frame (usually 7–10 business days, depending on your
            bank or payment provider).
          </li>
          <li>
            Transaction charges or processing fees may be non-refundable.
          </li>
        </ul>

        {/* Footer Note */}
        <p className="text-gray-700 leading-relaxed">
          If you have any questions regarding refunds or cancellations, please
          reach out to our support team through the Contact page.
        </p>

      </div>
    </section>
  );
};

export default RefundCancellation;
