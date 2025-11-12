import React, { useState } from "react";

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.15-.59-1.56-.36-.41-.59-.96-.59-1.56 0-1.38 1.12-2.5 2.5-2.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM6 6h12v12H6z" />
  </svg>
);

const FileImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-1-7l-2.5 3.01L12 13l-3 4h10l-3-4z" />
  </svg>
);

const MagicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M7.5 5.6L10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41l-2.33-2.35z" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" />
  </svg>
);

const TagsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.31.28 1.77.74l.73.72.73-.73c.46-.46 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z" />
  </svg>
);

const BullhornIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7.03 4 2.73 6.83 1 11c1.73 4.17 6.03 7 11 7s9.27-2.83 11-7c-1.73-4.17-6.03-7-11-7zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
    <rect width="24" height="24" rx="4" fill="#31A8FF" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
    >
      Ps
    </text>
  </svg>
);

const IllustratorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
    <rect width="24" height="24" rx="4" fill="#FF9A00" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
    >
      Ai
    </text>
  </svg>
);

const InDesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
    <rect width="24" height="24" rx="4" fill="#FF3366" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
    >
      Id
    </text>
  </svg>
);

const CorelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
    <rect width="24" height="24" rx="4" fill="#4CAF50" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
    >
      Co
    </text>
  </svg>
);

const skills = [
  {
    name: "Graphics Designing",
    icon: PaletteIcon,
    color: "from-purple-500 to-pink-500",
  },
  { name: "Package Design", icon: BoxIcon, color: "from-blue-500 to-cyan-500" },
  {
    name: "Poster Design",
    icon: FileImageIcon,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Manipulation",
    icon: MagicIcon,
    color: "from-green-500 to-emerald-500",
  },
  { name: "Brochure", icon: AwardIcon, color: "from-yellow-500 to-orange-500" },
  {
    name: "Product Branding",
    icon: TagsIcon,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Digital Marketing",
    icon: BullhornIcon,
    color: "from-pink-500 to-rose-500",
  },
];

const tools = [
  { name: "Adobe Photoshop", icon: PhotoshopIcon, color: "#31A8FF" },
  { name: "Adobe Illustrator", icon: IllustratorIcon, color: "#FF9A00" },
  { name: "Adobe InDesign", icon: InDesignIcon, color: "#FF3366" },
  { name: "CorelDRAW", icon: CorelIcon, color: "#4CAF50" },
];

function Techstack() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <div
      style={{
        width: "100%",
        padding: "50px 20px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
      }}
    >
      {/* Skills Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 80px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "15px",
            background: "linear-gradient(to right, #c084fc, #f9a8d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Design Skills
        </h2>
        <div
          style={{
            height: "4px",
            width: "100px",
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            margin: "0 auto 50px",
            borderRadius: "9999px",
          }}
        ></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    background: "rgba(30, 41, 59, 0.5)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    padding: "30px",
                    border: isHovered
                      ? "2px solid transparent"
                      : "2px solid rgba(71, 85, 105, 0.5)",
                    boxShadow: isHovered
                      ? "0 20px 60px rgba(0,0,0,0.5)"
                      : "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: "20px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${
                          skill.color.split(" ")[1]
                        } 0%, ${skill.color.split(" ")[3]} 100%)`,
                        marginBottom: "20px",
                        transform: isHovered
                          ? "rotate(12deg) scale(1.1)"
                          : "rotate(0deg) scale(1)",
                        transition: "transform 0.3s ease",
                        color: "white",
                      }}
                    >
                      <Icon />
                    </div>

                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        color: isHovered ? "white" : "#cbd5e1",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {skill.name}
                    </p>
                  </div>

                  {isHovered && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${
                          skill.color.split(" ")[1]
                        }, ${skill.color.split(" ")[3]})`,
                        opacity: 0.2,
                        borderRadius: "16px",
                        filter: "blur(20px)",
                        zIndex: -1,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tools Section */}
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "15px",
            background: "linear-gradient(to right, #22d3ee, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Design Tools
        </h2>
        <div
          style={{
            height: "4px",
            width: "100px",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            margin: "0 auto 50px",
            borderRadius: "9999px",
          }}
        ></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "40px",
            padding: "0 20px",
          }}
        >
          {tools.map((tool, index) => {
            const isHovered = hoveredTool === index;
            const Icon = tool.icon;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredTool(index)}
                onMouseLeave={() => setHoveredTool(null)}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: isHovered
                    ? "scale(1.1) translateY(-8px)"
                    : "scale(1) translateY(0)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    background: "rgba(30, 41, 59, 0.5)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    padding: "40px 30px",
                    border: "2px solid rgba(71, 85, 105, 0.5)",
                    boxShadow: isHovered
                      ? "0 20px 60px rgba(0,0,0,0.5)"
                      : "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "20px",
                        transform: isHovered ? "rotate(6deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        filter: isHovered
                          ? "drop-shadow(0 0 20px " + tool.color + ")"
                          : "none",
                      }}
                    >
                      <Icon />
                    </div>

                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        color: isHovered ? "white" : "#cbd5e1",
                        transition: "all 0.3s ease",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {tool.name}
                    </p>
                  </div>

                  {isHovered && (
                    <div
                      style={{
                        position: "absolute",
                        inset: "-4px",
                        background: tool.color,
                        opacity: 0.1,
                        borderRadius: "16px",
                        filter: "blur(20px)",
                        zIndex: -1,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Techstack;
