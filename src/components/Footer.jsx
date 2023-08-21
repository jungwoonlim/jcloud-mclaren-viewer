import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoLinkedin
} from 'react-icons/bi';

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/jungwoonlim" target="_blank">
            <BiLogoGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jungwoon-lim-a0196a207/" target="_blank">
            <BiLogoLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:jwlim102@gmail.com" target="_blank">
            <BiLogoGmail />
          </a>
        </li>
      </ul>
      <span>Made by jCloud</span>
      <span className="user-name">
        Use 3D Model of <a href="https://sketchfab.com/COOL601" target="_blank">COOL601</a>
      </span>
      <span>
        © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
      </span>
    </footer>
  );
};
