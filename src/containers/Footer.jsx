import './Footer.css';
import SocialLink from '../components/SocialLink';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <SocialLink
        href={'https://www.linkedin.com/in/lucie-yarish/'}
        linkIcon={faLinkedin}
        title={`Link to Lucie's LinkedIn`}
        ariaLabel={`View Lucie's LinkedIn`}
      />
      <SocialLink
        href={'https://github.com/lucieyarish'}
        linkIcon={faGithub}
        title={`Link to Lucie's GitHub`}
        ariaLabel={`View Lucie's GitHub`}
      />
      <SocialLink
        href={'https://www.instagram.com/luciecodes/'}
        linkIcon={faInstagram}
        title={`Link to Lucie's Instagram`}
        ariaLabel={`View Lucie's Instagram`}
      />
    </footer>
  );
};

export default Footer;
