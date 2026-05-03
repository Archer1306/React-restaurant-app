import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">

        {/* Header */}
        <div className="border-l-4 border-orange-500 pl-4 mb-8">
          <h1 className="font-bold text-3xl text-gray-800">About Us</h1>
          <p className="text-gray-500 text-sm mt-1">
            QuickBite is a food delivery web app that lets users explore restaurants,
            browse menus, and order food online — built as a React project.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-500 text-sm leading-relaxed bg-orange-50 border border-orange-100 rounded-lg p-4">
            To make food ordering simple and fast. We connect users with their
            favourite local restaurants and deliver a smooth browsing and ordering experience.
          </p>
        </div>

        {/* Developer */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg text-gray-800 mb-4">Meet the Developer</h2>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
            <UserClass name="Aswin" mail="aswin@gmail.com" />
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="font-semibold text-lg text-gray-800 mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Redux Toolkit", "Tailwind CSS", "Parcel"].map((tech) => (
              <span
                key={tech}
                className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;