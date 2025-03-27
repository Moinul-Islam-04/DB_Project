import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Music, Calendar } from 'lucide-react';
import styles from '../css/Artist.module.css';
import { getArtistBySlug } from '../API/ArtistAPI.js';


const ArtistPage = () => {
  const { artistSlug } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    getArtistBySlug(artistSlug)
      .then(setArtist)
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, [artistSlug]);

  if (!artist) {
    return <div className={styles.container}>Artist not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.gridLayout}>
        {/* Artist Profile Section */}
        <div>
          <img 
            src={artist.image} 
            alt={artist.name} 
            className={styles.artistImage}
          />
          <h1 className={styles.artistName}>{artist.name}</h1>
          <p className={styles.artistGenre}>{artist.genre}</p>
          <div className={styles.profileCard}>
            <p className={styles.artistBio}>{artist.bio}</p>
            <div className={styles.listenerStats}>
              <Music className="mr-2" />
              <span>{artist.monthlyListeners.toLocaleString()} Monthly Listeners</span>
            </div>
          </div>

          {/* Top Tracks */}
          <div className={styles.topTracksSection}>
            <h2 className={styles.topTracksTitle}>Top Tracks</h2>
            <div className={styles.trackList}>
              {artist.topTracks.map((track, index) => (
                <div 
                  key={track} 
                  className={styles.trackItem}
                >
                  <span className={styles.trackNumber}>{index + 1}</span>
                  <span>{track}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Concerts Section */}
        <div className={styles.concertsSection}>
          <h2 className={styles.concertsTitle}>Upcoming Concerts</h2>
          <div className="space-y-6">
            {artist.upcomingConcerts.map(concert => (
              <div 
                key={concert.id} 
                className={styles.concertCard}
              >
                <img 
                  src={concert.image} 
                  alt={`${artist.name} concert`} 
                  className={styles.concertImage}
                />
                <div className={styles.concertDetails}>
                  <div className={styles.concertDate}>
                    <Calendar className="mr-2" />
                    <span>{concert.date}</span>
                  </div>
                  <h3 className={styles.concertVenue}>{concert.venue}</h3>
                  <div className={styles.concertLocation}>
                    <MapPin className="mr-2" />
                    <span>{concert.location}</span>
                  </div>
                  <button className={styles.ticketButton}>
                    Buy Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;