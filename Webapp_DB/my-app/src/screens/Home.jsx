import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Home.module.css';

// Placeholder icons
import { 
  Search, 
  User, 
  Music, 
  MapPin, 
  Bell, 
  Settings 
} from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Artists data with slugified names
  const artists = [
    { 
      id: 1, 
      name: 'Taylor Swift', 
      genre: 'Pop', 
      image: '/placeholder-artist-1.jpg',
      slug: 'taylor-swift'
    },
    { 
      id: 2, 
      name: 'The Weeknd', 
      genre: 'R&B', 
      image: '/placeholder-artist-2.jpg',
      slug: 'the-weeknd'
    },
    { 
      id: 3, 
      name: 'Bad Bunny', 
      genre: 'Reggaeton', 
      image: '/placeholder-artist-3.jpg',
      slug: 'bad-bunny'
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
      image: '/placeholder-concert-1.jpg'
    },
    { 
      id: 2, 
      artist: 'The Weeknd', 
      venue: 'United Center', 
      date: 'August 3, 2024', 
      location: 'Chicago, IL',
      image: '/placeholder-concert-2.jpg'
    },
    { 
      id: 3, 
      artist: 'Bad Bunny', 
      venue: 'Madison Square Garden', 
      date: 'September 10, 2024', 
      location: 'New York, NY',
      image: '/placeholder-concert-3.jpg'
    },
  ];

  const friendActivity = [
    { 
      id: 1, 
      name: 'Alex', 
      concert: 'Taylor Swift', 
      status: 'Going' 
    },
    { 
      id: 2, 
      name: 'Jordan', 
      concert: 'The Weeknd', 
      status: 'Interested' 
    },
    { 
      id: 3, 
      name: 'Sam', 
      concert: 'Bad Bunny', 
      status: 'Tickets Bought' 
    },
  ];

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter artists based on search term
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = artists.filter(artist => 
      artist.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleArtistSelect = (artistSlug) => {
    // Navigate to the artist page
    navigate(`/artist/${artistSlug}`);
    // Clear search results and input
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className={styles.homeContainer}>
      {/* Left Sidebar - Top Artists */}
      <div className={styles.leftSidebar}>
        <div className={styles.sidebarHeader}>
          <h3>Top Artists</h3>
        </div>
        {topArtists.map(artist => (
          <div 
            key={artist.id} 
            className={styles.artistCard}
            onClick={() => handleArtistSelect(artist.slug)}
          >
            <img 
              src={artist.image} 
              alt={artist.name} 
              className={styles.artistImage} 
            />
            <div className={styles.artistInfo}>
              <h4>{artist.name}</h4>
              <p>{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Top Navigation */}
        <div className={styles.topNav}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} />
            <input 
              type="text"
              placeholder="Search artists, concerts, friends"
              value={searchTerm}
              onChange={handleSearch}
              className={styles.searchInput}
            />
            {searchResults.length > 0 && (
              <div className={styles.searchResultsDropdown}>
                {searchResults.map(artist => (
                  <div 
                    key={artist.id} 
                    className={styles.searchResultItem}
                    onClick={() => handleArtistSelect(artist.slug)}
                  >
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className={styles.searchResultImage}
                    />
                    <div>
                      <h4>{artist.name}</h4>
                      <p>{artist.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.navIcons}>
            <Bell className={styles.navIcon} />
            <Settings className={styles.navIcon} />
            <div 
              className={styles.profileIcon} 
              onClick={handleProfileClick}
            >
              <User />
            </div>
          </div>
        </div>

        {/* Existing sections remain the same */}
        <div className={styles.concertsSection}>
          <h2>Upcoming Concerts</h2>
          <div className={styles.concertScroll}>
            {upcomingConcerts.map(concert => (
              <div key={concert.id} className={styles.concertCard}>
                <img 
                  src={concert.image} 
                  alt={concert.artist} 
                  className={styles.concertImage} 
                />
                <div className={styles.concertDetails}>
                  <h3>{concert.artist}</h3>
                  <div className={styles.concertInfo}>
                    <MapPin size={16} />
                    <span>{concert.venue}</span>
                  </div>
                  <div className={styles.concertDate}>
                    {concert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Friend Activity */}
      <div className={styles.rightSidebar}>
        <div className={styles.sidebarHeader}>
          <h3>Friend Activity</h3>
        </div>
        {friendActivity.map(activity => (
          <div key={activity.id} className={styles.friendActivityCard}>
            <div className={styles.friendInfo}>
              <h4>{activity.name}</h4>
              <p>Going to {activity.concert} concert</p>
              <span className={styles.activityStatus}>
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;