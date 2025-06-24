import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export function ArtistDetails() {
  const { id } = useParams();
  const [group, setGroup] = useState({ artists: [], albums: [] });

  useEffect(() => {
    fetch(
      `https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/ReadItem?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => setGroup(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container px-4 py-4 music-details-page">
      <h2 className="pb-2 border-bottom mb-4">View details of a music group</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label className="form-label">Group Name</label>
          <input
            type="text"
            className="form-control"
            value={group.name || ""}
            readOnly
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Genre</label>
          <input
            type="text"
            className="form-control"
            value={group.strGenre || ""}
            readOnly
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Established Year</label>
          <input
            type="text"
            className="form-control"
            value={group.establishedYear || ""}
            readOnly
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="pb-2">Artists</h3>
        {group.artists.length > 0
          ? group.artists.map((artist, idx) => (
              <div
                key={idx}
                className="row mb-1 p-1 border rounded artist-detail-box">
                <div className="col">
                  {artist.firstName} {artist.lastName}
                </div>
              </div>
            ))
          : null}
      </div>

      <div>
        <h3 className="pb-2">Albums</h3>
        {group.albums.length > 0
          ? group.albums.map((album, idx) => (
              <div
                key={idx}
                className="row mb-1 p-1 border rounded album-detail-box">
                <div className="col">{album.name}</div>
                <div className="col-auto">{album.releaseYear}</div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
