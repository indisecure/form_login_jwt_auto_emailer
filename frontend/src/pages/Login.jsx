import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setMessage('Logged in successfully!');
      setLoggedIn(true);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setEmail('');
    setMessage('Logged out');
  };

  const courseFees = [
    { course: 'C/C++', duration: '2 Months', fee: '₹4500', remarks: 'Beginner friendly' },
    { course: 'Java', duration: '2 Months', fee: '₹5,000', remarks: 'Includes OOP & Core Java' },
    { course: 'Python', duration: '2 Months', fee: '₹5,000', remarks: 'Includes scripting and libraries' },
    { course: 'JavaScript', duration: '2 Months', fee: '₹5,000', remarks: 'Frontend focus' },
    { course: 'Java Full Stack', duration: '6 Months', fee: '₹15,000', remarks: 'Java Core,Frontend,Database & Java Advance' },
    { course: 'Python Full Stack', duration: '6 Months', fee: '₹15,000', remarks: 'Python Core,Frontend,Database & Python Advance' },
    { course: 'MERN Stack', duration: '6 Months', fee: '₹15,000', remarks: 'MongoDB, Express, React, Node' },
    { course: 'Web Design', duration: '2 Months', fee: '₹5,000', remarks: 'HTML, CSS, JS basics & Bootstrap' },
    { course: 'DSA', duration: '3 Months', fee: '₹6,500', remarks: 'For coding interviews' },
    { course: 'React', duration: '2 Months', fee: '₹5,000', remarks: 'Component-based UI dev' },
    { course: 'Docker', duration: '1 Month', fee: '₹4,000', remarks: 'Deployment and containerization' },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h4 className="mb-3 text-center fst-italic text-info-emphasis">{loggedIn ? 'Welcome  '+email : '🔐Login'}</h4>

            {!loggedIn ? (
              <form onSubmit={handleLogin} autoComplete="off" className="p-4 border rounded shadow-sm bg-light">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>

                <div className="text-center mt-3">
                  <span>Don't have an account?</span>
                  <Link to="/register" className="btn btn-outline-primary mt-2 d-block">
                    Register
                  </Link>
                </div>
              </form>
            ) : (
              <>
                <button onClick={handleLogout} className="btn btn-outline-success w-100">Logout</button>

                <div className="mt-4">
                  <h5 className="text-center mb-3">📚 Course Fees</h5>
                  <table className="table table-bordered table-striped fst-italic">
                    <thead className="table-dark">
                      <tr>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Fee</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courseFees.map((item, index) => (
                        <tr key={index}>
                          <td>{item.course}</td>
                          <td>{item.duration}</td>
                          <td>{item.fee}</td>
                          <td>{item.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
