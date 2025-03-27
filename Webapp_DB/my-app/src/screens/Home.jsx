import React, { useState, useEffect } from 'react';
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

import { getTopArtistBySlug, getConcertsBySlug, getFriendsBySlug } from '../API/HomeAPI.js';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const [topArtists, setTopArtists] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [friendActivity, setFriendActivity] = useState([]);
  
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch top artists by iterating over the slugs
    const topArtistSlugs = ['artist-1', 'artist-2', 'artist-3'];
    Promise.all(topArtistSlugs.map(slug => getTopArtistBySlug(slug)))
      .then(artists => setTopArtists(artists))
      .catch(err => console.error(err));

    // For concerts and friend activity, you'll need similar slugs or update your API to return full arrays.
    // For now, let's assume you have slugs for a single concert and friend activity per record:
    const concertSlugs = ['concert-1', 'concert-2', 'concert-3'];
    Promise.all(concertSlugs.map(slug => getConcertsBySlug(slug)))
      .then(concertsData => setConcerts(concertsData))
      .catch(err => console.error(err));

    const friendSlugs = ['friend-1', 'friend-2', 'friend-3'];
    Promise.all(friendSlugs.map(slug => getFriendsBySlug(slug)))
      .then(friendsData => setFriendActivity(friendsData))
      .catch(err => console.error(err));
  }, []);

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

    const results = topArtists.filter(artist => 
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
            {concerts.map(concert => (
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