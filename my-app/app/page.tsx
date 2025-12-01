import { TypographyH1, TypographyLarge } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <TypographyH1 
        text="Welcome to Esports Match Tracker"
      />
        <img
          src="/images/undraw_sports-scores_ezlu.svg"
          alt="Esports illustration"
          className="object-cover"
        />
      <TypographyLarge 
      text="Track esports leagues, matches, teams, and player stats — all in one place."/>

    </div>
  );
}
