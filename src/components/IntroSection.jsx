import './IntroSection.css';

const IntroSection = (props) => {
  return (
    <article className="intro-section">
      <h3 className="intro-section--title">{props.title}</h3>
      <p className="intro-section--content">{props.content}</p>
    </article>
  );
};

export default IntroSection;
