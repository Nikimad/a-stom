export default function PaletteDemo() {
  const colors = [
    { name: "Primary", value: "#2563EB", class: "bg-brand-primary" },
    { name: "Accent", value: "#06B6D4", class: "bg-brand-accent" },
    { name: "Background", value: "#FFFFFF", class: "bg-brand-background" },
    { name: "Light Background", value: "#E0F2FE", class: "bg-brand-light" },
    { name: "Text", value: "#1E293B", class: "bg-brand-text" },
  ];

  return (
    <div className="p-8 bg-brand-background text-brand-text max-w-3xl mx-auto">
      <div className="flex justify-start mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          style={{ width: "48px", height: "48px" }}
        >
          <defs>
            <linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#2563EB" }} />
              <stop offset="100%" style={{ stopColor: "#06B6D4" }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M100 5C45 5 20 45 20 85s15 65 30 107c2 6 10 8 15 3 8-10 11-40 35-40s27 30 35 40c5 5 13 3 15-3 15-42 30-67 30-107S155 5 100 5Z"
          />
          <path
            fill="#FFF"
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={6}
            d="M55 65q45-15 90 0-15 30-45 65-30-35-45-65"
            opacity={0.9}
          />
        </svg>
      </div>

      <div className="flex flex-wrap gap-6">
        {colors.map((color) => (
          <div
            key={color.name}
            className="flex basis-55 grow-1 items-center gap-4 p-4 rounded-lg border shadow-sm"
          >
            <div className={`w-16 h-16 rounded-md border ${color.class}`} />

            <div className="flex flex-col">
              <span className="font-medium">{color.name}</span>
              <span className="text-sm opacity-70">{color.value}</span>
              <span className="text-xs opacity-60">
                {color.class.replace("bg-", "")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
