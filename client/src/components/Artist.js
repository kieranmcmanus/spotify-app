import React from 'react';

const Artist = ({ artist }) => {
  if (!artist) return null;

  const { images, name, followers, genres } = artist;

  return (
    <div>
      <img
        src={images[0] && images[0].url}
        alt='artist-profile'
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover',
          margin: 25
        }}
      />
      <h2>{name}</h2>
      <p className="followers">{followers.total} followers</p>
      <p className="genres">{genres.join(',')}</p>
    </div>
  )
}

export default Artist;
