import React from 'react';
import { Container } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const CommunityPage = () => (
  <Container id={PageIDs.communityPage}>
    <h1>Welcome to our Community Guidelines Page!</h1>
    <p>
      Welcome to Club Up!

      {/* eslint-disable-next-line max-len */}
      At Club Up, we are committed to creating an inclusive and respectful community where all users can feel safe and valued. Our community guidelines are designed to support a friendly, engaging, and safe environment and are applicable to all user interactions within the app, including user profiles, club descriptions, and communications. Compliance with these guidelines is mandatory for all users, and failure to comply may result in the suspension or termination of your account.

      1. Respect and Inclusivity

      Respect for Everyone: Treat all members with respect, patience, and kindness. Respect all boundaries and consent. Do not engage in, endorse, or promote behavior that is harassing, threatening, or harmful.
      Inclusivity: We strive for an inclusive community. Discrimination on the basis of race, ethnicity, gender, gender identity, sexual orientation, age, disability, religion, or any other protected characteristics is strictly prohibited.

      2. Prohibited Conduct

      No Discrimination or Harassment: Engaging in discriminatory or harassing behavior is not permitted. This includes, but is not limited to, hate speech, offensive comments related to personal characteristics, and unwanted sexual attention.
      No Bullying: Do not intimidate, threaten, or harass other users. This includes public shaming, spreading rumors, or any other form of personal attacks.
      No Hate Speech: Do not promote or incite violence against individuals or groups based on personal characteristics. Speech that demeans, degrades, or promotes discrimination or violence is not tolerated.

      3. Content Standards

      Prohibit Profanity or Explicit Content: Keep your language and content appropriate for a diverse audience. Avoid using profanity, explicit, or mature content in user profiles, club descriptions, and any public communications.
      Appropriate Content: Ensure that all content posted is suitable for a diverse audience and contributes constructively to the community.

      4. Reporting and Enforcement

      Reporting Violations: If you encounter someone violating these guidelines or feel unsafe, please report it to us using the [specified methods/tools on your app]. We take your reports seriously and will investigate promptly and confidentially.
      Enforcement Actions: We reserve the right to remove any content that violates our guidelines and to suspend or terminate accounts for severe or repeated violations.

      5. Changes to Guidelines

      Updates: These guidelines are subject to change and may be updated periodically. We will notify you of any significant changes, but you are encouraged to review this page regularly.
      Conclusion

      {/* eslint-disable-next-line max-len */}
      By joining and interacting within Club Up, you agree to abide by these community guidelines. Our goal is to ensure that every user feels welcome and valued, and by adhering to these principles, we can build a positive and supportive community together.

      Thank you for being a part of Club Up!
    </p>
  </Container>
);

export default CommunityPage;
