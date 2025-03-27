const artists = [
    { 
      id: 1, 
      name: 'Taylor Swift', 
      genre: 'Pop', 
      image: '/placeholder-artist-1.jpg',
      slug: 'artist-1'
    },
    { 
      id: 2, 
      name: 'The Weeknd', 
      genre: 'R&B', 
      image: '/placeholder-artist-2.jpg',
      slug: 'artist-2'
    },
    { 
      id: 3, 
      name: 'Bad Bunny', 
      genre: 'Reggaeton', 
      image: '/placeholder-artist-3.jpg',
      slug: 'artist-3'
    },
  ];

  // Existing data remains the same
  const topArtists = artists;
  const upcomingConcerts = [
    { 
      id: 1, 
      artist: 'Taylor Swift', 
      venue: 'SoFi Stadium', 
      date: 'July 15, 2024', 
      location: 'Los Angeles, CA',
      image: '/placeholder-concert-1.jpg',
      slug: 'concert-1'
    },
    { 
      id: 2, 
      artist: 'The Weeknd', 
      venue: 'United Center', 
      date: 'August 3, 2024', 
      location: 'Chicago, IL',
      image: '/placeholder-concert-2.jpg',
      slug: 'concert-2'
    },
    { 
      id: 3, 
      artist: 'Bad Bunny', 
      venue: 'Madison Square Garden', 
      date: 'September 10, 2024', 
      location: 'New York, NY',
      image: '/placeholder-concert-3.jpg',
      slug: 'concert-3'
    },
  ];

  const friendActivity = [
    { 
      id: 1, 
      name: 'Alex', 
      concert: 'Taylor Swift', 
      status: 'Going',
      slug: 'friend-1'
    },
    { 
      id: 2, 
      name: 'Jordan', 
      concert: 'The Weeknd', 
      status: 'Interested', 
      slug: 'friend-2'
    },
    { 
      id: 3, 
      name: 'Sam', 
      concert: 'Bad Bunny', 
      status: 'Tickets Bought',
      slug: 'friend-3' 
    },
  ];

export const getTopArtistBySlug = (slug) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const artist = topArtists.find(item => item.slug === slug);        if (artist) {
          resolve(artist);
        } else {
          reject(new Error('Artist not found'));
        }
      }, 500); 
    });
  };

  export const getFriendsBySlug = (slug) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const friends = friendActivity.find(item => item.slug === slug);
          if (friends) {
            resolve(friends);
          } else {
            reject(new Error('Friends not found'));
          }
        }, 500); 
      });
    };

    export const getConcertsBySlug = (slug) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const concert = upcomingConcerts.find(item => item.slug === slug);
            if (concert) {
              resolve(concert);
            } else {
              reject(new Error('Concerts not found'));
            }
          }, 500); 
        });
      };