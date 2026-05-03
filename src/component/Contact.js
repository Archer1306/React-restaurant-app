const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">

        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="font-extrabold text-4xl text-gray-800">Contact Us</h1>
          <p className="text-gray-500 mt-2 text-sm">
            We're always happy to help. Reach out to us anytime!
          </p>
        </div>

        {/* Contact Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">

          <div className="flex items-start gap-4 border-b border-gray-100 pb-5">
            <div className="bg-orange-100 text-orange-500 rounded-full p-3 text-xl">📍</div>
            <div>
              <p className="font-bold text-gray-800">Our Address</p>
              <p className="text-gray-500 text-sm mt-1">
                123, xxxx xxx, xxxxx,<br />
                Chennai, Tamil Nadu - xxxxx
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-gray-100 pb-5">
            <div className="bg-orange-100 text-orange-500 rounded-full p-3 text-xl">📞</div>
            <div>
              <p className="font-bold text-gray-800">Phone</p>
              <p className="text-gray-500 text-sm mt-1">+91 9999999999</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-gray-100 pb-5">
            <div className="bg-orange-100 text-orange-500 rounded-full p-3 text-xl">📧</div>
            <div>
              <p className="font-bold text-gray-800">Email</p>
              <p className="text-gray-500 text-sm mt-1">support@foodapp.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-gray-100 pb-5">
            <div className="bg-orange-100 text-orange-500 rounded-full p-3 text-xl">🕐</div>
            <div>
              <p className="font-bold text-gray-800">Working Hours</p>
              <p className="text-gray-500 text-sm mt-1">
                Mon – Sat: 9:00 AM – 10:00 PM<br />
                Sunday: 10:00 AM – 8:00 PM
              </p>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Contact;