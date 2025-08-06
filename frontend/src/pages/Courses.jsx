import React, { useState } from "react";

const courses = [
  "C/C++", "Java", "Python", "JavaScript", "Web Design",
  "Java Full Stack", "Python Full Stack", "MERN Stack", "React", "DSA"
];

const padToLength = (data, desiredLength) => {
  const result = [...data];
  while (result.length < desiredLength) {
    result.push({
      language: "General",
      topics: `Bonus Content ${result.length + 1}: Practice / Assessment / Capstone`,
      duration: 20
    });
  }
  return result;
};

const rawData = {
  "C/C++": [
    { language: "C", topics: "Variables, Control Flow, Pointers, Memory Management", duration: 30 },
    { language: "C++", topics: "OOP Concepts, STL, Templates, File Handling", duration: 45 }
  ],
  "Java": [
    { language: "Java", topics: "OOP, Exception Handling, Collections, Multithreading", duration: 50 },
    { language: "Spring Boot", topics: "REST API, Security, JPA, Testing", duration: 60 }
  ],
  "Python": [
    { language: "Python", topics: "Variables, OOP, Data Structures, Error Handling", duration: 40 },
    { language: "Flask", topics: "Routing, REST APIs, Deployment", duration: 30 }
  ],
  "JavaScript": [
    { language: "JavaScript", topics: "ES6+, DOM, Events, Async/Await", duration: 35 },
    { language: "TypeScript", topics: "Interfaces, Classes, Tooling", duration: 25 }
  ],
  "Web Design": [
    { language: "HTML/CSS", topics: "Semantic Tags, Flexbox, Grid, Media Queries", duration: 35 },
    { language: "Bootstrap", topics: "Components, Utility Classes", duration: 25 },
    { language: "Responsive Design", topics: "Mobile First, Accessibility", duration: 20 }
  ],
  "Java Full Stack": [
    { language: "Java + Spring Boot", topics: "REST APIs, JPA, Security", duration: 60 },
    { language: "React", topics: "Hooks, State, Routing", duration: 40 },
    { language: "Build Tools", topics: "Maven, Webpack, ESLint", duration: 20 }
  ],
  "Python Full Stack": [
    { language: "Python + Flask", topics: "API Development, Templating", duration: 50 },
    { language: "React", topics: "Axios Integration, State Management", duration: 40 },
    { language: "Database", topics: "PostgreSQL, SQLAlchemy", duration: 20 }
  ],
  "MERN Stack": [
    { language: "MongoDB", topics: "Schemas, Aggregation", duration: 30 },
    { language: "Express", topics: "Middleware, Routing", duration: 30 },
    { language: "React", topics: "Context API, Styling", duration: 40 },
    { language: "Node.js", topics: "Modules, Server Logic", duration: 35 }
  ],
  "React": [
    { language: "React", topics: "JSX, Props, Hooks, Routing", duration: 45 },
    { language: "React Query", topics: "Fetching, Caching", duration: 25 },
    { language: "Testing", topics: "Jest, React Testing Library", duration: 20 }
  ],
  "DSA": [
    { language: "Java", topics: "Arrays, Trees, Graphs, DP", duration: 70 },
    { language: "Problem Solving", topics: "Sorting, Recursion, Time Complexity", duration: 40 }
  ]
};

const dummyData = Object.fromEntries(
  Object.entries(rawData).map(([course, items]) => [course, padToLength(items, 15)])
);

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const courseData = selectedCourse ? dummyData[selectedCourse] || [] : [];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <div className="container my-2 flex-grow-1">
        <div className="p-4 rounded shadow bg-white border border-primary-subtle">
          <h3 className="mb-2 text-center fw-bold text-primary-emphasis">
            🚀 Select a Course for Syllabus
          </h3>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {courses.map((course) => (
              <button
                key={course}
                className={`btn fw-semibold px-4 py-2 rounded-pill shadow-sm ${
                  selectedCourse === course ? "border-0" : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedCourse(course)}
                style={{
                  minWidth: "140px",
                  background: selectedCourse === course ? "linear-gradient(135deg,rgb(253, 113, 13), #6610f2)" : "",
                  color: selectedCourse === course ? "#fff" : "",
                  fontWeight: "600"
                }}
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        <div className="table-responsive mt-3 bg-white bg-opacity-75 p-4 rounded shadow-sm border border-info-subtle">
          <h4 className="text-center text-info-emphasis fw-bold mb-3">
            {selectedCourse ? `${selectedCourse} Course Syllabus` : "📘 Course Syllabus Preview"}
          </h4>

          {selectedCourse && courseData.length > 0 ? (
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-info">
                <tr>
                  <th>Language</th>
                  <th>Major Topics</th>
                  <th>Duration (Hrs)</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.language}</td>
                    <td>{item.topics}</td>
                    <td>{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-5 text-muted fw-bold">
              🕐 No course selected — choose one to preview its syllabus.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
