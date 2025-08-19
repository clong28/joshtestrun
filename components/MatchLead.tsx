"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MatchLead() {
  const profiles = [
    { id: 1, name: "Acme Corp", industry: "Cybersecurity", valueProp: "Enterprise-grade defense solutions", pricePoint: "$$$" },
    { id: 2, name: "Globex", industry: "AI & Automation", valueProp: "Process automation with 40% efficiency gain", pricePoint: "$$" },
    { id: 3, name: "Initech", industry: "Cloud Solutions", valueProp: "Scalable infrastructure for mid-market businesses", pricePoint: "$$" },
  ];

  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState<typeof profiles>([]);
  const [liked, setLiked] = useState<typeof profiles>([]);
  const currentProfile = profiles[index];

  const handleLike = () => {
    setLiked([...liked, currentProfile]);
    if (currentProfile.id % 2 === 0) setMatches([...matches, currentProfile]);
    nextProfile();
  };

  const handleDislike = () => {
    nextProfile();
  };

  const nextProfile = () => {
    setIndex((prev) => (prev + 1 < profiles.length ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🔗 MatchLead</h1>

      {currentProfile && (
        <Card className="w-96 shadow-xl mb-4">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">{currentProfile.name}</h2>
            <p className="text-gray-600">{currentProfile.industry}</p>
            <p className="mt-2">{currentProfile.valueProp}</p>
            <p className="text-sm text-gray-500 mt-1">Price: {currentProfile.pricePoint}</p>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-4">
        <Button className="bg-red-500 hover:bg-red-600" onClick={handleDislike}>❌ Pass</Button>
        <Button className="bg-green-500 hover:bg-green-600" onClick={handleLike}>✅ Connect</Button>
      </div>

      {matches.length > 0 && (
        <div className="mt-8 w-full max-w-md p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">🎉 Your Matches</h3>
          <ul className="space-y-2">
            {matches.map((m) => (
              <li key={m.id} className="p-2 bg-green-100 rounded-md border border-green-300">
                {m.name} — {m.industry}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 text-sm text-gray-500">
        <p>📅 Calendly integration (coming soon)</p>
        <p>🤖 AI-based matching (coming soon)</p>
      </div>
    </div>
  );
}
