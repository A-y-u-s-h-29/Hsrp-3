import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    vehicleNumber: '',
    chassisNo: '',
    engineNo: '',
    state: '',
    transactionId: '',
    paymentProof: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [displayImage, setDisplayImage] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('Two-wheel Plate');

  // Fetch QR image from your backend (which returns Cloudinary URL)
  useEffect(() => {
    const fetchDisplayImage = async () => {
      try {
        const response = await fetch('https://hsrp-3.onrender.com/api/display-image');
        if (response.ok) {
          const data = await response.json();
          if (data.imageUrl) {
            setDisplayImage(data.imageUrl);
          }
        }
      } catch (error) {
        console.error('Error fetching display image:', error);
      }
    };

    fetchDisplayImage();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prevState => ({ ...prevState, [name]: files[0] }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.address ||
          !formData.vehicleNumber || !formData.chassisNo || !formData.engineNo || !formData.state) {
        alert('Please fill all required fields before proceeding');
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'b6869fb6-d05b-4476-bff0-14401ede6ebc');
      formDataToSend.append('subject', 'New HSRP Plate Application with Payment');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNo', formData.phone);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('vehicleNumber', formData.vehicleNumber);
      formDataToSend.append('chassisNo', formData.chassisNo);
      formDataToSend.append('engineNo', formData.engineNo);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('transactionId', formData.transactionId);
      formDataToSend.append('selectedProduct', selectedProduct);
      formDataToSend.append('from_name', 'HSRP Plate Website');
      formDataToSend.append('botcheck', '');

      if (formData.paymentProof) {
        formDataToSend.append('paymentProof', formData.paymentProof);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', address: '',
          vehicleNumber: '', chassisNo: '', engineNo: '',
          state: '', transactionId: '', paymentProof: null
        });
        setStep(1);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatVehicleNumber = (value) =>
    value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Form</h1>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
              <span className="ml-2 font-medium text-gray-700">Details</span>
            </div>
            <div className="w-12 h-1 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
              <span className="ml-2 font-medium text-gray-700">Payment</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
              <div className="p-8">
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Selected Product*</label>
                  <div className="p-4 bg-gray-50 border border-gray-300 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium">{selectedProduct}</span>
                      <span className="text-sm text-gray-500">Chosen on the previous page.</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name*</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email*</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (10 digits)*</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        pattern="[0-9]{10}" maxLength="10"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter 10-digit phone number" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address*</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter complete delivery address" />
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Number*</label>
                        <input type="text" name="vehicleNumber" value={formData.vehicleNumber}
                          onChange={(e) => setFormData(prev => ({ ...prev, vehicleNumber: formatVehicleNumber(e.target.value) }))}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                          placeholder="AB12CD3456" />
                        <p className="text-xs text-gray-500 mt-1">Format: 2 letters · 2 digits · 1~2 letters · 4 digits</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">State/UT*</label>
                        <select name="state" value={formData.state} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                          <option value="">-- Select State / UT --</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Chassis Number*</label>
                        <input type="text" name="chassisNo" value={formData.chassisNo} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter chassis number" />
                        <p className="text-xs text-gray-500 mt-1">6~25 characters, letters/numbers/hyphen</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Engine Number*</label>
                        <input type="text" name="engineNo" value={formData.engineNo} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter engine number" />
                        <p className="text-xs text-gray-500 mt-1">4~20 characters, letters/numbers/hyphen</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8 pt-6 border-t">
                  <button type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Proceed
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment</h2>
                  <div className="p-4 bg-gray-50 border border-gray-300 rounded mb-6">
                    <p className="text-gray-900 mb-2">Scan the QR to pay. The code depends on your selected product.</p>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600">Selected Product: <span className="font-medium">{selectedProduct}</span></p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <div className="mb-6">
                      <div className="relative inline-block">
                        {displayImage ? (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                            <img
                              src={displayImage}
                              alt="Payment QR Code"
                              className={`relative w-64 h-64 mx-auto object-cover rounded-xl border-2 border-gray-300 shadow-lg transition-all duration-500 ${
                                imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                              }`}
                              onLoad={() => setImageLoaded(true)}
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          </>
                        ) : (
                          <div className="w-64 h-64 mx-auto bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                            <div className="text-center">
                              <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                              <span className="text-gray-500 text-sm">Loading QR code...</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="text-yellow-800 font-medium mb-2">Payment Instructions</h4>
                      <ul className="text-yellow-700 text-sm space-y-2">
                        <li>1. Scan QR code using any UPI app</li>
                        <li>2. Complete the payment</li>
                        <li>3. Save the transaction ID</li>
                        <li>4. Upload payment proof (optional)</li>
                        <li>5. Enter transaction ID below</li>
                      </ul>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Transaction ID*</label>
                        <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                          placeholder="6~30 characters, letters/numbers/hyphen" />
                        <p className="text-xs text-gray-500 mt-1">6~30 characters, letters/numbers/hyphen</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Payment Proof (PNG/JPG/PDF, ≤ 5MB)*</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                          <input type="file" name="paymentProof" onChange={handleChange}
                            accept=".png,.jpg,.jpeg,.pdf" className="hidden" id="paymentProof" />
                          <label htmlFor="paymentProof" className="cursor-pointer">
                            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="text-gray-600">Choose File</span>
                            <p className="text-sm text-gray-500 mt-1">
                              {formData.paymentProof ? formData.paymentProof.name : 'No file chosen'}
                            </p>
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">* Optional but recommended for faster verification</p>
                      </div>
                    </div>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold">Application Submitted!</h3>
                        <p className="text-sm">Thank you! We'll contact you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold">Submission Failed</h3>
                        <p className="text-sm">Please check your connection and try again.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8 pt-6 border-t">
                  <button type="button" onClick={handlePrevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Back
                  </button>
                  <button type="submit" disabled={isSubmitting}
                    className={`px-6 py-3 bg-blue-600 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                    }`}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Submit Order'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className="flex justify-center items-center space-x-4 mt-8 text-sm text-gray-500">
          <div className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
            <span className="ml-2">Details</span>
          </div>
          <div className="w-8 h-1 bg-gray-300"></div>
          <div className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
            <span className="ml-2">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;