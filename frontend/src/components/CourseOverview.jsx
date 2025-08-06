import { useEffect, useRef } from 'react';
const courses = [
  { title: 'C/C++', description: 'Start with core programming concepts and memory management.', level: 'Beginner', icon: '💻' },
  { title: 'Java', description: 'Learn object-oriented programming with Java basics.', level: 'Beginner', icon: '☕' },
  { title: 'Python', description: 'Explore syntax, data types, and real-world basics with Python.', level: 'Beginner', icon: '🐍' },
  { title: 'JavaScript', description: 'Master the building blocks of web development.', level: 'Beginner', icon: '🟨' },
  { title: 'Java Full Stack', description: 'End-to-end development using Java, Spring Boot, and frontend tools.', level: 'Intermediate', icon: '🧩' },
  { title: 'Python Full Stack', description: 'End-to-end development using Python ,Django,and frontend tools.', level: 'Intermediate', icon: '🧠' },
  { title: 'MERN Stack', description: 'Build full-stack apps using MongoDB, Express, React, and Node.', level: 'Intermediate', icon: '🌐' },
  { title: 'React Native', description: 'Create cross-platform mobile apps with React Native.', level: 'Advanced', icon: '📱' },
  { title: 'Docker', description: 'Master containerization and scalable deployments.', level: 'Advanced', icon: '🐳' },
];


export  const CourseOverview = () => {
  return (
    <section className="container py-5 text-white">
      <h2 className="text-center mb-4">Explore Our Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm" style={{ backgroundColor: '#000', color: 'white' }}>
              <div className="card-body text-center">
                <div className="display-4 mb-3">{course.icon}</div>
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <span className="badge bg-white text-dark ">{course.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const LogoSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollLogos = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; 
        }
      }
    };

    const interval = setInterval(scrollLogos, 20); 
    return () => clearInterval(interval);
  }, []);

  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png',
    'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',    
    'https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Docker_logo.png'
    
    
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <div className="container py-4">
      <h3 className="text-center mb-5 fst-italic fw-semibold text-danger-emphasis">Development Stack at Indi Secure</h3>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {loopLogos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index}`}
            style={{
              height: '100px',
              marginRight: '2rem',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

