
const TemplateB = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12">
        
        {/* Sidebar */}
        <div className="bg-gray-800 text-white p-6 col-span-12 md:col-span-4">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-sm text-gray-300">Frontend Developer</p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold border-b border-gray-500 pb-1">Contact</h2>
            <p className="text-sm mt-2">Email: john@example.com</p>
            <p className="text-sm">Phone: +123456789</p>
            <p className="text-sm">Website: johndoe.dev</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold border-b border-gray-500 pb-1">Skills</h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold border-b border-gray-500 pb-1">Links</h2>
            <ul className="text-sm mt-2 space-y-1">
              <li><a href="#" className="text-blue-400 hover:underline">LinkedIn</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 col-span-12 md:col-span-8">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">Profile</h2>
            <p className="text-sm mt-2">
              Passionate frontend developer with 7+ years of experience building responsive and user-friendly web applications...
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">Experience</h2>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Senior Frontend Developer - XYZ Corp</h3>
              <p className="text-sm text-gray-600">Jan 2020 – Present</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Built and maintained responsive web apps in React</li>
                <li>Optimized performance and improved Lighthouse scores</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">Education</h2>
            <div className="mt-2">
              <h3 className="font-bold text-lg">B.Sc. Computer Science - ABC University</h3>
              <p className="text-sm text-gray-600">2012 – 2016</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">Projects</h2>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Resume Builder App</h3>
              <p className="text-sm text-gray-600">A React app to build and export resumes as PDF.</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default TemplateB;
