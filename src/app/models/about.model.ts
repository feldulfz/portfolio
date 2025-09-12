export interface About {
  firstName: string;
  lastName: string;
  profession: string;
  aboutMe: string;
  resumeLink: string;
  profileUrl: string;
  email: string;
} 

export const defaultAbout: About = {
  firstName: 'First Name',
  lastName: 'Last Name',
  profession: 'Profession',
  aboutMe: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  resumeLink: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  profileUrl: 'https://avatar.iran.liara.run/public/2',
  email: 'default@email.com'
};