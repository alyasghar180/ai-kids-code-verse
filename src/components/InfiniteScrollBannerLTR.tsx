import React from "react";

// Other AI tools to show (different set than the first banner)
const aiToolsLTR = [
  { text: "Pi", emoji: "🟢" },
  { text: "Llama 3", emoji: "🦙" },
  { text: "Groq", emoji: "⚡" },
  { text: "Stable Diffusion", emoji: "🖼️" },
  { text: "AlphaFold", emoji: "🔬" },
  { text: "Cohere", emoji: "🌱" },
  { text: "Hugging Face", emoji: "🤗" },
  { text: "Runway ML", emoji: "🎥" },
  { text: "Mistral", emoji: "🌬️" },
  { text: "Character AI", emoji: "🧑‍🎤" },
  { text: "Wombo Dream", emoji: "💭" },
  { text: "DeepL", emoji: "🌏" },
  { text: "You.com", emoji: "🔎" },
  { text: "Wordtune", emoji: "✍️" },
  { text: "Synthesia", emoji: "📹" },
  { text: "QuillBot", emoji: "🪶" },
];

// Repeat tools for seamless left-to-right scroll
const repeated = [...aiToolsLTR, ...aiToolsLTR];

export default function InfiniteScrollBannerLTR() {
  return (
    <div className="overflow-hidden w-full py-4 bg-white border-b border-gray-100">
      <div className="relative">
        <div className="flex gap-14 animate-infinite-scroll-ltr whitespace-nowrap select-none">
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
          @keyframes infinite-scroll-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-infinite-scroll-ltr {
            animation: infinite-scroll-ltr 26s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
