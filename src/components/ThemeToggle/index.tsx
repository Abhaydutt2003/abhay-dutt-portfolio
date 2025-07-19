import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  MountainSnow,
  Cat,
  Trees,
  ChevronUpIcon,
  BoomBox,
} from "lucide-react";
import "./index.css";

const themes = {
  nord: "NORD",
  catppuccin: "catppuccin",
  everforest: "EVERFOREST",
  gruvbox: "gruvbox",
} as const;

type ThemeKey = keyof typeof themes;
const themeIcons: Record<ThemeKey, React.ElementType> = {
  nord: MountainSnow,
  catppuccin: Cat,
  everforest: Trees,
  gruvbox: BoomBox,
};

const ThemeToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const themeAttr = document.documentElement.getAttribute(
    "data-theme"
  ) as ThemeKey | null;
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>(
    themeAttr ? themeAttr : "nord"
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // useEffect for outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (theme: ThemeKey) => {
    setSelectedTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  const CurrentIcon = themeIcons[selectedTheme];

  return (
    <div className="theme-toggle" ref={dropdownRef}>
      <button
        className="theme-toggle-btn"
        onClick={() => setIsOpen((o) => !o)}
        title="Show Themes"
      >
        <CurrentIcon />
        {isOpen ? <ChevronUpIcon /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="theme-toggle-dropdown">
          {Object.keys(themes).map((theme) => {
            const IconComponent = themeIcons[theme as ThemeKey];
            return (
              <div
                key={theme}
                className={`theme-toggle-option${
                  selectedTheme === theme ? " selected" : ""
                }`}
                onClick={() => handleSelect(theme as ThemeKey)}
              >
                <IconComponent />
                {theme.charAt(0).toUpperCase() + theme.substring(1)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
