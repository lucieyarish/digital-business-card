import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ text, href, target, rel, icon, isPrimary }) => {
  const btnClass = `btn ${isPrimary ? 'btn__primary' : 'btn__secondary'}`;

  return (
    <>
      <a className={btnClass} href={href} target={target} rel={rel}>
        {icon ? <FontAwesomeIcon icon={icon} className="btn--icon" /> : ''}
        {text}
      </a>
    </>
  );
};

export default Button;
