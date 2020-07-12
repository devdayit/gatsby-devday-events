import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 820,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <span className="highlight">P</span>rossimi{' '}
        <span className="highlight">E</span>venti
      </h1>
    </div>
  </div>
)

export default Header
