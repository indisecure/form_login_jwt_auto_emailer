const students = [
  {
    name: "Aryan Mehta",
    course: "Full Stack Web Development",
    company: "TechNova Solutions",
    avatar: "./student.jpg", 
    location:'Indore'},
  {
    name: "Rakesh Verma",
    course: "Python & Data Science",
    company: "DataVision AI",
    avatar: "./student.jpg", 
    location:'Pune'
  },
  {
    name: "Karan Patel",
    course: "Java Spring Boot",
    company: "CloudSprint",
    avatar: "./student.jpg", 
    location:'Ahmedabad'
  },
  {
    name: "Sneha Iyer",
    course: "UI/UX Design",
    company: "PixelPerch",
    avatar: "./girl.jpg",    
    location:'Indore'
  },
  {
    name: "Mohit Sharma",
    course: "Node.js & Express",
    company: "Backend Gurus",
    avatar: "./student.jpg", 
    location:'Bengaluru'
  },
  {
    name: "Om Sharma",
    course: "Node.js & Express",
    company: "Netifly",
    avatar: "./student.jpg", 
    location:'Bengaluru'
  },
];

export default function Alumni() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🌟 Brilliant Minds of Our Institute</h2>
      <div className="row">
        {students.map((student, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img src={student.avatar} className="card-img-top" alt={student.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text"><strong>Course:</strong> {student.course}</p>
                <p className="card-text"><strong>Company:</strong> {student.company}</p>
                <p className="card-text"><strong>Location:</strong> {student.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
