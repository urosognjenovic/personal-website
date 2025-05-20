import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-white py-6 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-center mb-8">
          <div className="border-t border-gray-300 w-full" />
          <span className="px-4 text-sm tracking-widest text-white bg-gray-500 uppercase font-bold">
            Education
          </span>
          <div className="border-t border-gray-300 w-full" />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="md:w-4/5 text-gray-900">
            <h3 className="text-xl font-semibold">University of Montenegro</h3>
            <p>Master of Science, Electrical Engineering</p>
            <p>GPA: 4.0/4.0</p>
          </div>
          <div className="md:w-1/5 text-right text-gray-600">
            <p>2020 – 2023</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="md:w-4/5 text-gray-900">
            <h3 className="text-xl font-semibold">University of Montenegro</h3>
            <p>Bachelor of Science, Electrical Engineering</p>
            <p>GPA: 3.5/4.0</p>
          </div>
          <div className="md:w-1/5 text-right text-gray-600">
            <p>2016 – 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
