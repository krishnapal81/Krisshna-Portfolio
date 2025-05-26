import React from 'react';

const Journey = () => {
  const experience = [
    {
      role: "Frontend Developer",
      company: "FisClouds",
      startDate: "2024-06",
      endDate: null,
      current: true,
      type: "frontend",
      description: [
        "Developed responsive user interfaces using HTML5, CSS3, JavaScript, and React.js.",
        "Contributed to the company’s in-house healthcare platform, improving usability and performance.",
        "Collaborated with the product team to enhance UI/UX, ensuring consistent branding and accessibility.",
        "Optimized component performance and ensured cross-browser compatibility for a seamless user experience.",
        "Improved website speed and made sure it worked well on all browsers and devices.",
        "Fixed bugs and added new features to make the application more user-friendly."
      ],
    },
    {
      role: "Associate Big Data Engineer",
      company: "FisClouds",
      startDate: "2024-06",
      endDate: null,
      current: true,
      type: "backend",
      description: [
        "Designing and deploying ETL pipelines for an Indonesian banking client, focused on migrating on-premise data to Google Cloud Platform (GCP).",
        "Worked with GCP services including:",
        "Cloud Dataform and Cloud Data Fusion for data transformation and orchestration.",
        "BigQuery for scalable data analysis and reporting.",
        "Data Loss Prevention (DLP) API to mask and secure sensitive information like personally identifiable data.",
        "Ensured data pipeline performance, scalability, and security compliance throughout the migration.",
      ],
    },
  ];

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${months} month${months > 1 ? "s" : ""}`;
    return `${years} year${years > 1 ? "s" : ""}${
      remainingMonths > 0
        ? ` ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
        : ""
    }`;
  };

  const frontendExperiences = experience.filter((exp) => exp.type === "frontend");
  const backendExperiences = experience.filter((exp) => exp.type === "backend");

  return (
    <div id="learning-work" className="py-12 px-6 md:px-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
        📘 Chapters of My Career
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Frontend Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Frontend</h3>
          <ul className="space-y-6">
            {frontendExperiences.map((exp, index) => {
              const start = new Date(exp.startDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });
              const end = exp.current
                ? "Present"
                : new Date(exp.endDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  });
              const duration = calculateDuration(exp.startDate, exp.endDate);
              return (
                <li key={index} className="bg-white p-4 rounded-lg border-l-4 border-blue-500" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <p className="text-gray-700">{exp.company}</p>
                  <p className="text-sm text-gray-500">{`${start} – ${end} (${duration})`}</p>
                  {exp.current && (
                    <span className="text-sm text-green-600 font-medium">
                      Currently working here
                    </span>
                  )}
                  {Array.isArray(exp.description) && (
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-700">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Backend / Big Data Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Google Cloud Platform</h3>
          <ul className="space-y-6">
            {backendExperiences.map((exp, index) => {
              const start = new Date(exp.startDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });
              const end = exp.current
                ? "Present"
                : new Date(exp.endDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  });
              const duration = calculateDuration(exp.startDate, exp.endDate);
              return (
                <li key={index} className="bg-white shadow-md p-4 rounded-lg border-l-4 border-green-500" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <p className="text-gray-700">{exp.company}</p>
                  <p className="text-sm text-gray-500">{`${start} – ${end} (${duration})`}</p>
                  {exp.current && (
                    <span className="text-sm text-green-600 font-medium">
                      Currently working here
                    </span>
                  )}
                  {Array.isArray(exp.description) && (
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-700">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Journey;
