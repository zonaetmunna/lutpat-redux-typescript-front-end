import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <div className="mt-4 text-gray-500">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit tellus vel lacus luctus iaculis. Vestibulum sodales nisi
              sed ultricies dictum. Praesent ultrices diam sit amet est
              ultricies maximus.
            </p>
            <p className="mt-4 text-lg">
              Phasellus euismod vel quam a lacinia. Integer fermentum massa at
              tortor lobortis, nec ultricies tellus tincidunt. Donec ornare
              sapien et mauris interdum vestibulum. Nulla congue, nisl non
              pharetra semper, urna sapien mollis augue, vitae ullamcorper leo
              quam vel dui.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="text-lg">
                Sed blandit tellus vel lacus luctus iaculis.
              </li>
              <li className="text-lg">
                Vestibulum sodales nisi sed ultricies dictum.
              </li>
              <li className="text-lg">
                Praesent ultrices diam sit amet est ultricies maximus.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
