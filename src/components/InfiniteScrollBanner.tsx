
import React from "react";

// Array of popular AI tools with icons or representative emoji
const aiTools = [
  { text: "ChatGPT", emoji: "💬" },
  { text: "DALL·E", emoji: "🎨" },
  { text: "GitHub Copilot", emoji: "🤖" },
  { text: "Midjourney", emoji: "🌄" },
  { text: "Claude", emoji: "🌟" },
  { text: "Google Gemini", emoji: "🔷" },
  { text: "Perplexity AI", emoji: "🧠" },
  { text: "Descript", emoji: "🎙️" },
  { text: "Suno AI", emoji: "🎵" },
  { text: "Notion AI", emoji: "📝" },
  { text: "Adobe Firefly", emoji: "🔥" },
  { text: "HeyGen", emoji: "🎬" },
  { text: "Replika", emoji: "👥" },
  { text: "Microsoft CoPilot", emoji: "💼" },
  { text: "Tome AI", emoji: "📄" },
  { text: "Poe", emoji: "📱" },
];

export default function InfiniteScrollBanner() {
  // Repeat tools so the scroll is seamless
  const repeated = [...aiTools, ...aiTools];

  return (
    <div className="overflow-hidden w-full py-4 bg-white border-b border-gray-100">
      <div className="relative">
        <div className="flex gap-14 animate-infinite-scroll whitespace-nowrap select-none">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-semibold text-lg sm:text-xl text-gray-700 px-6"
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
