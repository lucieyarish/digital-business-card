import './Footer.css';
import SocialLink from '../components/SocialLink';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/lucie-yarish/',
    linkIcon: faLinkedin,
    title: `Link to Lucie's LinkedIn`,
    ariaLabel: `View Lucie's LinkedIn`,
  },
  {
    href: 'https://github.com/lucieyarish',
    linkIcon: faGithub,
    title: `Link to Lucie's GitHub`,
    ariaLabel: `View Lucie's GitHub`,
  },
  {
    href: 'https://www.instagram.com/luciecodes/',
    linkIcon: faInstagram,
    title: `Link to Lucie's Instagram`,
    ariaLabel: `View Lucie's Instagram`,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      {socialLinks.map((link, index) => (
        <SocialLink
          key={index}
          href={link.href}
          linkIcon={link.linkIcon}
          title={link.title}
          ariaLabel={link.ariaLabel}
        />
      ))}
    </footer>
  );
};

export default Footer;
