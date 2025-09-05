import React from 'react';

interface HeaderProps {
  title?: string;
  logo?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = 'Мое приложение', 
  logo, 
  className = '' 
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-container">
        {logo && (
          <img src={logo} alt="Logo" className="header-logo" />
        )}
        <h1 className="header-title">{title}</h1>
        <nav className="header-nav">
          <a href="/" className="nav-link">Главная</a>
          <a href="/about" className="nav-link">О нас</a>
          <a href="/contact" className="nav-link">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;