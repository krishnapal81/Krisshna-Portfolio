import React from "react";

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
        "Fixed bugs and added new features to make the application more user-friendly.",
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
    <section
      id="learning-work"
      className="py-16 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16 tracking-wide drop-shadow-lg">
        📘 Chapters of My Career
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Frontend Experience */}
        <div>
          <h3 className="text-3xl font-bold text-blue-700 mb-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"
            />
            Frontend
          </h3>
          <ul className="space-y-8">
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
                <li
                  key={index}
                  className="relative bg-white rounded-xl p-6 border-l-8 border-blue-500 shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-xl cursor-pointer"
                  style={{
                    boxShadow:
                      "0 10px 15px rgba(59, 130, 246, 0.2), inset 0 0 10px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <h4 className="text-xl font-semibold text-blue-800">{exp.role}</h4>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{`${start} – ${end} (${duration})`}</p>
                  {exp.current && (
                    <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md select-none">
                      Currently working
                    </span>
                  )}
                  {Array.isArray(exp.description) && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3 text-sm">
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
          <h3 className="text-3xl font-bold text-green-700 mb-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"
            />
            Google Cloud Platform
          </h3>
          <ul className="space-y-8">
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
                <li
                  key={index}
                  className="relative bg-white rounded-xl p-6 border-l-8 border-green-500 shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-xl cursor-pointer"
                  style={{
                    boxShadow:
                      "0 10px 15px rgba(34, 197, 94, 0.2), inset 0 0 10px rgba(34, 197, 94, 0.1)",
                  }}
                >
                  <h4 className="text-xl font-semibold text-green-800">{exp.role}</h4>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{`${start} – ${end} (${duration})`}</p>
                  {exp.current && (
                    <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md select-none">
                      Currently working
                    </span>
                  )}
                  {Array.isArray(exp.description) && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3 text-sm">
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
    </section>
  );
};

export default Journey;
