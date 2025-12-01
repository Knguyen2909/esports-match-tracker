export interface VideoGame {
  id: number;
  name: string;
  slug: string;
}

export interface Player {
  id: number;
  name: string;
  image_url: string | null;
}

export interface Team {
  id: number;
  name: string;
  acronym: string | null;
  slug: string;
  image_url: string | null;
  dark_mode_image_url: string | null;
  location: string;
  modified_at: string;
  current_videogame: VideoGame;
  players: Player[];
}
