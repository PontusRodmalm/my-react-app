import React from "react";
import { ArtistList } from "../components/artistList";

export function Artistpage() {
  return (
    <div
      className="container px-4 py-4 music-background"
      id="music-group-service">
      <ArtistList />
    </div>
  );
}
