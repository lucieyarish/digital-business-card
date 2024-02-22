import './Intro.css';
import IntroSection from '../components/IntroSection';

const Intro = () => {
  const aboutSectionTitle = 'About';
  const interestsSectionTitle = 'Interests';
  const aboutSectionContent = `Lucie is a software developer with a particular focus on frontend development and web accessibility. She enjoys creating responsive and interactive websites, and connecting with like-minded people, both within and outside the tech industry. She frequently shares her learnings and progress on platforms such as Instagram and LinkedIn.`;
  const interestsSectionContent = `When she's not coding, she enjoys engaging in physical activities, reading, cooking & baking, drawing, listening to music & audio books, and going for walks. Lucie also finds joy in embracing minimalist living, both in the physical and digital world. As a former sinologist, she occasionally likes to keep up with her knowledge of Chinese.`;

  return (
    <main className="main-container">
      <IntroSection title={aboutSectionTitle} content={aboutSectionContent} />
      <IntroSection
        title={interestsSectionTitle}
        content={interestsSectionContent}
      />
    </main>
  );
};

export default Intro;
