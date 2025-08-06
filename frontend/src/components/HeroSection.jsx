import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1f1f1f, #0c0c0c)',
        color: '#fff',
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Build Your Dev Career 💼
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Learn industry-driven courses in full-stack, mobile, and backend development. Hands-on, project-based, and job-ready.
      </p>
      <Link to="/contact">
        <button style={{
          padding: '0.8rem 1.5rem',
          background: '#00bcd4',
          color: '#000',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          Get Started
        </button>
      </Link>
    </section>
  );
};
