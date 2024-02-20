import './Intro.css';
import IntroSection from '../components/IntroSection';

const Intro = () => {
  const aboutSectionTitle = 'About';
  const interestsSectionTitle = 'Interests';
  const aboutSectionContent = `I am a software developer with a particular interest in frontend development and web accessibility. I love building resposive and interactive websites, and connecting with like-minded people, both within and outside the tech industry. I often talk about my learnings and progress on Instagram and Linkedin.`;
  const interestsSectionContent = `When I'm not coding, I enjoy moving my body, reading, cooking & baking, drawing, listening to music & audio books, and going for walks. As a former sinologist, I also enjoy keeping up with my knowledge of Mandarin.`;

  return (
    <main>
      <IntroSection title={aboutSectionTitle} content={aboutSectionContent} />
      <IntroSection
        title={interestsSectionTitle}
        content={interestsSectionContent}
      />
    </main>
  );
};

export default Intro;
