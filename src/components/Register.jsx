import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import default styles for overriding

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    wemail: '',
    phone: '',
    company: '',
    companySize: '',
    country: '',
    reason: '',
    otherDetails: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('http://localhost:8000/mailer/send-email/', {  // Update this URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Email sent successfully:', result);
        setMessage('Message sent successfully!');
        setFormData({
          fname: '',
          lname: '',
          wemail: '',
          phone: '',
          company: '',
          companySize: '',
          country: '',
          reason: '',
          otherDetails: '',
        });
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setMessage('Failed to send message.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='flex items-center justify-between px-[45px] pt-[92px]'>
      <div className='max-w-[670px] flex flex-col pl-[180px]'>
        <div>
          <h1 className='font-bold text-6xl tracking-tighter'>
            Talk to our sales team to get started
          </h1>
        </div>
        <div className='pt-4'>
          <p className='text-lg'>
            Please provide us with information about your company and we’ll get in touch shortly.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='text-left'>
            <div className='flex pt-[39px] gap-[22px]'>
              <div className='flex flex-col'>
                <label className='text-md mb-2' htmlFor="fname">First name</label>
                <input
                  className='text-md border border-gray-300 w-[219px] h-[36px] rounded-lg pl-[15px]'
                  id='fname'
                  name='fname'
                  type="text"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-md mb-2' htmlFor="lname">Last name</label>
                <input
                  className='text-md border border-gray-300 w-[219px] h-[36px] rounded-lg pl-[15px]'
                  id='lname'
                  name='lname'
                  type="text"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='flex flex-col pt-[10px]'>
              <label className='text-md mb-2' htmlFor="wemail">Work email</label>
              <input
                className='text-md border border-gray-300 w-[459px] h-[36px] rounded-lg pl-[15px]'
                id='wemail'
                name='wemail'
                type="email"
                value={formData.wemail}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col pt-[10px]'>
              <label className='text-md mb-2' htmlFor="phone">Phone number (optional)</label>
              <div className="relative">
                <PhoneInput
                  country={'my'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    border: '1px solid #d1d5db', // Tailwind's border-gray-300
                    borderRadius: '0.5rem', // Rounded corners
                    padding: '0.5rem 2.5rem 0.5rem 3rem', // Padding with extra space on the left
                    width: '459px', // Full width
                    height: '36px', // Match your existing height
                  }}
                  dropdownStyle={{
                    borderRadius: '0.5rem', // Rounded corners
                  }}
                  buttonStyle={{
                    borderRadius: '0.5rem', // Rounded corners
                  }}
                />
              </div>
            </div>
            <div className='flex flex-col pt-[10px]'>
              <label className='text-md mb-2' htmlFor="company">Company name</label>
              <input
                className='text-md border border-gray-300 w-[459px] h-[36px] rounded-lg pl-[15px]'
                id='company'
                name='company'
                type="text"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col pt-[10px]'>
              <label className='text-md mb-2' htmlFor="companySize">Company size</label>
              <select
                className='text-gray-500 text-md border border-gray-300 w-[459px] h-[36px] rounded-lg pl-[15px] bg-white'
                id='companySize'
                name='companySize'
                value={formData.companySize}
                onChange={handleChange}
                required
              >
                <option value="">Please select...</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
            </div>
            <div className='flex flex-col pt-[10px]'>
              <label className='text-md mb-2' htmlFor="country">Country or region</label>
              <select
                className='text-gray-500 text-md border border-gray-300 w-[459px] h-[36px] rounded-lg pl-[15px] bg-white'
                id='country'
                name='country'
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Please select...</option>
                <option value="Germany">Germany</option>
                <option value="Malaysia">Malaysia</option>
              </select>
            </div>
            <div className='flex flex-col pt-[10px]'>
              <label className='text-md mb-2' htmlFor="reason">Reason for demo</label>
              <select
                className='text-gray-500 text-md border border-gray-300 w-[459px] h-[36px] rounded-lg pl-[15px] bg-white'
                id='reason'
                name='reason'
                value={formData.reason}
                onChange={handleChange}
                required
              >
                <option value="">Please select...</option>
                <option value="I like it">I like it</option>
                <option value="Others">Others (please provide more details below)</option>
              </select>
            </div>
            <div className='flex flex-col pt-[10px]'>
              <label className='text-md mb-2' htmlFor="otherDetails">Other details</label>
              <textarea
                className='text-md border border-gray-300 w-[459px] h-[100px] rounded-lg pl-[15px] pt-[10px]'
                id='otherDetails'
                name='otherDetails'
                placeholder='How are you looking to use FOX?'
                value={formData.otherDetails}
                onChange={handleChange}
                required // Ensure this is required if it should be
              />
            </div>
            <div className='flex flex-col pt-[36px]'>
              <button
                type='submit'
                className='font-semibold text-md text-white bg-black hover:bg-gray-200 hover:text-black rounded-lg h-[37px] w-[127px]'
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Contact sales'}
              </button>
            </div>
            {message && <p className="pt-4 text-md text-red-500">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
