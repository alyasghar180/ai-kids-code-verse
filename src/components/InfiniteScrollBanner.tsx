
import React from "react";

// Simple/modern items for the scroll banner (tailor as needed)
const items = [
  { text: "Future-Proof Skills", emoji: "🚀" },
  { text: "AI for Kids", emoji: "🤖" },
  { text: "Gamified Learning", emoji: "🎮" },
  { text: "Real Projects", emoji: "💡" },
  { text: "Safe Community", emoji: "🛡️" },
  { text: "Mentorship", emoji: "🧑‍🏫" },
  { text: "Creativity", emoji: "✨" },
  { text: "Problem Solving", emoji: "🧩" },
];

export default function InfiniteScrollBanner() {
  // Render items twice for seamless infinity
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden w-full py-4 bg-white">
      <div className="relative">
        <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap select-none">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-semibold text-lg sm:text-xl text-gray-700 px-4"
            >
              <span aria-hidden>{item.emoji}</span>
              <span>{item.text}</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 22s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
