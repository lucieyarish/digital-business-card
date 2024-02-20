import './Link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Link = (props) => {
  const isLinkedIn = props.type === 'linkedin';
  const linkClass = isLinkedIn ? 'link link__primary' : 'link link__secondary';
  const linkIcon = isLinkedIn ? faLinkedin : faEnvelope;

  const linkHref = isLinkedIn
    ? 'https://www.linkedin.com/in/lucie-yarish/'
    : 'mailto:lucieyarish@hotmail.com';
  return (
    <>
      <a
        className={linkClass}
        href={linkHref}
        target={isLinkedIn ? '_blank' : ''}
      >
        <FontAwesomeIcon icon={linkIcon} className="link--icon" />
        {props.text}
      </a>
    </>
  );
};

export default Link;
