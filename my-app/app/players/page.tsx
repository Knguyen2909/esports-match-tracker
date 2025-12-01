"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Players } from "../lib/pandascore/playertypes";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [player, setPlayers] = useState<Players | null>(null);

  const fetchLeague = async () => {
    setLoading(true);

    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${process.env.PANDASCORE_API_KEY}`,
        }
      };
      const res = await fetch(
        'https://api.pandascore.co/leagues/4199', options);

      if (!res.ok) throw new Error("Failed to fetch league");

      const data: Players = await res.json();
        console.log(data)

      setPlayers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Button */}
      <Button
        onClick={fetchLeague}
        className="bg-purple-600 hover:bg-purple-700 text-white mb-6"
      >
        {loading ? "Loading..." : "Fetch League Info"}
      </Button>

      {/* League Card */}
      {player && (
        <Card className="max-w-md w-full shadow-lg border border-purple-400/40">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-3">
              {player.image_url && (
                <img
                  src={player.image_url}
                  alt={player.name}
                  className="h-10 w-10 rounded-md object-contain bg-white p-1"
                />
              )}
              {player.name}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm opacity-80">
              <strong>Last updated:</strong>{" "}
              {new Date(player.modified_at).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
