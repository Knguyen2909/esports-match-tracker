"use client";

import { useEffect, useOptimistic, useState, useTransition } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Team } from "../lib/pandascore/teamtypes";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographySmall } from "@/components/ui/typography";

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isPending, startTransition] = useTransition();

  const fetchTeams = () => {
    startTransition(async () => {
      try {
        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: 'Bearer kx7Nz5bxW_BViOpaQPONG-YgD73HKGg2rQTywVSwFmNamNP4DIQ'
        }
      };

        const res = await fetch(
          `https://api.pandascore.co/lol/teams`, options
        );

        if (!res.ok) throw new Error("Failed to fetch teams");

        const data: Team[] = await res.json();
        setTeams(data);
      } catch (err) {
        console.error(err);
      }
    });
  };
  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <TypographyH1 text="Teams"/>

      {/* Refresh button */}
      <Button
        onClick={fetchTeams}
        className="bg-purple-600 hover:bg-purple-700 text-white"
      >
        {isPending ? "Refreshing..." : "Refresh Teams"}
      </Button>

      {/* Loading state */}
      {teams.length === 0 && isPending && (
        <TypographySmall text="Loading teams..."/>
      )}

      {/* Teams Grid */}
      {teams.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mt-6">
          {teams.map((team) => (
            <Card key={team.id} className="border border-purple-400/30 shadow-sm">
              <CardHeader className="flex items-center gap-3">
                {team.image_url ? (
                  <img
                    src={team.image_url}
                    alt={team.name}
                    className="h-12 w-12 rounded-md object-contain bg-white p-1"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-md bg-purple-200 flex items-center justify-center text-white font-bold">
                    {team.name.charAt(0)}
                  </div>
                )}
                <CardTitle>{team.name}</CardTitle>
              </CardHeader>

              <CardContent>
                {team.acronym && <p className="text-sm opacity-80">Acronym: {team.acronym}</p>}
                <p className="text-sm opacity-80">
                  Game: {team.current_videogame.name}
                </p>
                {team.location && <p className="text-sm opacity-80">Location: {team.location}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* No teams fallback */}
      {!isPending && teams.length === 0 && (
        <p className="text-gray-500 mt-4">No teams found.</p>
      )}
    </div>
  );

}
