export interface Players {
  active: boolean;
  age: number;
  birthday: string;
  current_team: string | null;
  current_videogame: CurrentVideoGame[];
  first_name: string;
  id: number;
  image_url: string | null;
  last_name: string;
  modified_at: string;
  name: string;
  nationality: string;
  role: string;
  slug: string;
}

export interface CurrentVideoGame {
  id: string;
  name: string;
  slug: string
}
