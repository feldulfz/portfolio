export interface SocialLink {
  icon: string; 
  url: string; 
}

export interface About {
  firstName: string;
  lastName: string;
  profession: string;
  aboutMe: string;
  resumeLink: string;
  profileUrl: string;
  email: string;
  socials: SocialLink[]; 
} 

export const defaultAbout: About = {
  firstName: 'First Name',
  lastName: 'Last Name',
  profession: 'Profession',
  aboutMe: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  resumeLink: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  profileUrl: 'https://avatar.iran.liara.run/public/2',
  email: 'default@email.com',
  socials: [ 
    { icon: 'fab fa-dribbble', url: 'https://dribbble.com/' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/' }
  ]  
};