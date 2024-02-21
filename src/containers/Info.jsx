import './Info.css';
import Link from '../components/Link';

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
      <div className="header--links__container">
        <Link text={'Email'} type={'email'} />
        <Link text={'LinkedIn'} type={'linkedin'} />
      </div>
    </header>
  );
};

export default Info;
