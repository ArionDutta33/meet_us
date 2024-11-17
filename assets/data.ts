export type eventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  image: string;
  attendees: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  }[];
};

export const events = [
  {
    id: '1',
    title: 'React Native Meetup',
    description:
      "Join us for an exciting meetup where we dive into React Native, mobile development best practices, and the latest trends in the community. Whether you're a beginner or a pro, you'll learn something new!",
    date: '2024-11-20T18:00:00Z',
    location: {
      name: 'TechHub SF',
      address: '123 Main St, San Francisco, CA 94110',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    image: 'https://images.pexels.com/photos/3050833/pexels-photo-3050833.jpeg',
    attendees: [
      {
        id: 'a1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      {
        id: 'a2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      {
        id: 'a3',
        name: 'Sarah Lee',
        email: 'sarah.lee@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
    ],
  },
  {
    id: '2',
    title: 'AI and Machine Learning Workshop',
    description:
      "A hands-on workshop where we'll explore the fundamentals of Artificial Intelligence and Machine Learning. You'll get the opportunity to work on a mini project and understand how AI can be integrated into mobile apps.",
    date: '2024-12-05T09:00:00Z',
    location: {
      name: 'Innovation Lab',
      address: '456 Innovation Blvd, Mountain View, CA 94043',
      latitude: 37.4237,
      longitude: -122.0857,
    },
    image: 'https://images.pexels.com/photos/3730767/pexels-photo-3730767.jpeg',
    attendees: [
      {
        id: 'a4',
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      },
      {
        id: 'a5',
        name: 'Emma Watson',
        email: 'emma.watson@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      },
    ],
  },
  {
    id: '3',
    title: 'Frontend Development Bootcamp',
    description:
      'A comprehensive bootcamp to teach the fundamentals of frontend web development with HTML, CSS, JavaScript, and React. This event is perfect for beginners who want to kickstart their career in frontend development.',
    date: '2024-12-12T10:00:00Z',
    location: {
      name: 'WebDev Studios',
      address: '789 Developer Way, Los Angeles, CA 90001',
      latitude: 34.0522,
      longitude: -118.2437,
    },
    image: 'https://images.pexels.com/photos/593285/pexels-photo-593285.jpeg',
    attendees: [
      {
        id: 'a6',
        name: 'Chris Williams',
        email: 'chris.williams@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      },
      {
        id: 'a7',
        name: 'Olivia Jones',
        email: 'olivia.jones@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      },
    ],
  },
  {
    id: '4',
    title: 'Blockchain and Crypto Talk',
    description:
      'An engaging session where experts will discuss the latest trends in blockchain technology and cryptocurrencies. Learn how blockchain is revolutionizing various industries and how to get involved in the crypto space.',
    date: '2024-12-15T14:00:00Z',
    location: {
      name: 'Crypto Hub',
      address: '101 Blockchain St, New York, NY 10001',
      latitude: 40.7128,
      longitude: -74.006,
    },
    image: 'https://images.pexels.com/photos/6238243/pexels-photo-6238243.jpeg',
    attendees: [
      {
        id: 'a8',
        name: 'David Green',
        email: 'david.green@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
      },
      {
        id: 'a9',
        name: 'Laura Brown',
        email: 'laura.brown@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
      },
    ],
  },
];

export const demoUser = {
  user: {
    id: 1,
    email: 'johndoe@example.com',
    full_name: 'John Doe',
    bio: 'Tech enthusiast, meetup organizer, and software developer.',
    profile_picture_url: 'https://randomuser.me/api/portraits/men/23.jpg',
    cover_photo_url:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'San Francisco, CA',
    created_at: '2024-01-01T12:00:00Z',
    updated_at: '2024-10-10T14:30:00Z',
  },
  events: [
    {
      id: 101,
      user_id: 1,
      title: 'React Native Meetup',
      description: 'A meetup for React Native developers to share ideas and work on projects.',
      event_date: '2024-10-15T18:00:00Z',
      location: '123 Tech Street, San Francisco, CA',
      max_attendees: 50,
      status: 'active',
      cover_photo_url:
        'https://images.pexels.com/photos/8761327/pexels-photo-8761327.jpeg?auto=compress&cs=tinysrgb',
      created_at: '2024-10-01T08:00:00Z',
      updated_at: '2024-10-01T08:00:00Z',
      rsvp_status: 'going',
    },
    {
      id: 102,
      user_id: 1,
      title: 'Vue.js Developers Meetup',
      description: 'A meetup for Vue.js enthusiasts to learn and discuss new features.',
      event_date: '2024-10-18T19:00:00Z',
      location: '456 Dev Ave, San Francisco, CA',
      max_attendees: 30,
      status: 'active',
      cover_photo_url:
        'https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb',
      created_at: '2024-10-02T08:00:00Z',
      updated_at: '2024-10-02T08:00:00Z',
      rsvp_status: 'maybe',
    },
  ],
  interests: ['Technology', 'Startups', 'Programming Languages'],
};
