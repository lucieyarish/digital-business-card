import './Info.css';
import Button from '../components/Button';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <header className="header">
      <img
        src="/assets/lucie-profile-photo.jpg"
        alt="Profile photo of Lucie Yarish"
        className="header--profile-photo"
      />
      <h1 className="header--title">Lucie Yarish</h1>
      <h2 className="header--subtitle">Software Developer</h2>
      <div className="header--btns__container">
        <Button
          text={'Email'}
          href={'mailto:lucieyarish@hotmail.com'}
          target={''}
          rel={''}
          icon={faEnvelope}
        />
        <Button
          text={'LinkedIn'}
          href={'https://www.linkedin.com/in/lucie-yarish/'}
          target={'_blank'}
          rel={'noopener noreferrer'}
          icon={faLinkedin}
          isPrimary
        />
      </div>
    </header>
  );
};

export default Info;
