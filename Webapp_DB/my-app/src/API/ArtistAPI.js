
const ARTIST_DATA = {
    'taylor-swift': {
      name: 'Taylor Swift',
      genre: 'Pop',
      image: '/taylor-swift-main.jpg',
      bio: 'Grammy-winning singer-songwriter known for narrative songwriting and genre-crossing music.',
      monthlyListeners: 85000000,
      topTracks: [
        'Blank Space', 
        'Shake It Off', 
        'Anti-Hero', 
        'Love Story', 
        'You Belong With Me'
      ],
      upcomingConcerts: [
        {
          id: 1,
          venue: 'SoFi Stadium',
          date: 'July 15, 2024',
          location: 'Los Angeles, CA',
          image: '/taylor-swift-concert-1.jpg'
        },
        {
          id: 2,
          venue: 'MetLife Stadium',
          date: 'August 22, 2024',
          location: 'East Rutherford, NJ',
          image: '/taylor-swift-concert-2.jpg'
        }
      ]
    },
  };
  
  export const getArtistBySlug = (slug) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const artist = ARTIST_DATA[slug];
        if (artist) {
          resolve(artist);
        } else {
          reject(new Error('Artist not found'));
        }
      }, 500); 
    });
  };