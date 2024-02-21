import './SocialLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = (props) => {
  return (
    <>
      <a href={props.href} target="_blank" aria-label={props.ariaLabel}>
        <FontAwesomeIcon
          icon={props.linkIcon}
          className="social-link--icon"
          aria-hidden="true"
          title={props.title}
        />
      </a>
    </>
  );
};

export default SocialLink;
