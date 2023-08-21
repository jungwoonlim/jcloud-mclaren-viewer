import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};
