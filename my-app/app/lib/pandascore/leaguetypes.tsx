export interface League {
  id: number;
  image_url: string | null;
  modified_at: string;
  name: string;
  series: Series[];
}

export interface Series {
  begin_at: string | null;
  end_at: string | null;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name: string;
  season: string | null;
  slug: string;
  winner_id: number | null;
  winner_type: "Team" | "Player" | null;
  year: number;
}
