import { ItemProps } from '../components/Advantages/Item';
import { CardProps } from '../components/Testimonials/Card';

export const advantagesConfig: ItemProps[] = [
  {
    title: 'Simple task management',
    description:
      'Task management with Team is as simple as it gets. No complicated layout and no need for user training. Your team members will intuitively know how to navigate the platform. It’s so simple, a baby could do it!',
    imgSource:
      'https://res.cloudinary.com/achraf-dev/image/upload/v1630269978/services-1_pkb5p1.jpg',
    imgAlt: 'Man working in the office',
  },
  {
    title: 'Scheduling that actually works',
    description: `Integrate a Team calendar with your favorite calendar app, be it Google Calendar or iCal.    
    Each team member works with their favorite calendar, while all the date is synced with the master calendar.`,
    imgSource:
      'https://res.cloudinary.com/achraf-dev/image/upload/v1630269982/services-2_paxzny.jpg',
    imgAlt: 'Man working in the office',
  },
];

export const testimonialCards: CardProps[] = [
  {
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    imgSource:
      'https://res.cloudinary.com/achraf-dev/image/upload/v1630445337/jurica-koletic-7YVZYZeITc8-unsplash_qied5b.jpg',
    author: 'Esther Howard',
    position: 'CEO at Rustol Inc.',
  },
  {
    description: `Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.consectetur nisi, ac interdum elit.`,
    imgSource:
      'https://res.cloudinary.com/achraf-dev/image/upload/v1630445342/rachel-mcdermott-0fN7Fxv1eWA-unsplash_xn19tv.jpg',
    author: 'Jane Cooper',
    position: 'CEO at Coca-cola',
  },
  {
    description: `consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue`,
    imgSource:
      'https://res.cloudinary.com/achraf-dev/image/upload/v1630445340/jack-finnigan-rriAI0nhcbc-unsplash_jklbin.jpg',
    author: 'Guy Hawkins',
    position: 'Data Scientist at Mamba Inc.',
  },
  {
    description: `Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.`,
    imgSource:
      'https://res.cloudinary.com/achraf-dev/image/upload/v1630445346/albert-dera-ILip77SbmOE-unsplash_ce1cv3.jpg',
    author: 'Robert Fox',
    position: 'Biochemicals Engineer',
  },
];
