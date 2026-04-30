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
  const [selectedProduct] = useState('Two-wheel Plate');

  // ✅ Fetch QR from Cloudinary (backend)
  useEffect(() => {
    const fetchDisplayImage = async () => {
      try {
        const res = await fetch('https://hsrp-3.onrender.com/api/display-image');
        if (res.ok) {
          const data = await res.json();
          if (data.imageUrl) {
            setDisplayImage(data.imageUrl);
          }
        }
      } catch (err) {
        console.error('QR fetch error:', err);
      }
    };

    fetchDisplayImage();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleNextStep = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.vehicleNumber ||
      !formData.chassisNo ||
      !formData.engineNo ||
      !formData.state
    ) {
      alert('Please fill all required fields');
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const form = new FormData();

      // ✅ W3Forms email
      form.append('access_key', 'b6869fb6-d05b-4476-bff0-14401ede6ebc');
      form.append('subject', 'New HSRP Order');
      form.append('from_name', 'HSRP Website');

      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('address', formData.address);
      form.append('vehicleNumber', formData.vehicleNumber);
      form.append('chassisNo', formData.chassisNo);
      form.append('engineNo', formData.engineNo);
      form.append('state', formData.state);
      form.append('transactionId', formData.transactionId);
      form.append('product', selectedProduct);

      if (formData.paymentProof) {
        form.append('attachment', formData.paymentProof);
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
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
        setStep(1);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatVehicleNumber = (value) => {
    return value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
            <h1 className="text-2xl font-bold mb-6">Order Form</h1>

            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />

            <input
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                vehicleNumber: formatVehicleNumber(e.target.value)
              }))}
              placeholder="Vehicle No"
              required
            />

            <input name="chassisNo" placeholder="Chassis" value={formData.chassisNo} onChange={handleChange} required />
            <input name="engineNo" placeholder="Engine" value={formData.engineNo} onChange={handleChange} required />

            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select State</option>
              <option>Uttar Pradesh</option>
              <option>Delhi</option>
              <option>Haryana</option>
            </select>

            <button type="submit">Next</button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleSubmit}>

            {/* QR IMAGE */}
            <div className="text-center mb-6">
              {displayImage ? (
                <img
                  src={displayImage}
                  alt="QR"
                  className="w-64 h-64 mx-auto"
                  onLoad={() => setImageLoaded(true)}
                />
              ) : (
                <p>Loading QR...</p>
              )}
            </div>

            <input
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              placeholder="Transaction ID"
              required
            />

            <input type="file" name="paymentProof" onChange={handleChange} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Submit'}
            </button>

            {submitStatus === 'success' && <p>✅ Submitted Successfully</p>}
            {submitStatus === 'error' && <p>❌ Failed</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;