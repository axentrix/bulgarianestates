export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#4F2C1D',
          marginBottom: '1rem'
        }}>
          404 - Page Not Found
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '2rem'
        }}>
          The page you are looking for does not exist.
        </p>
        <a href="/" style={{
          display: 'inline-block',
          backgroundColor: '#299393',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'background-color 0.2s'
        }}>
          Go back home
        </a>
      </div>
    </div>
  )
}
