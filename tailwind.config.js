const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "windows-11":
          "url('https://res.cloudinary.com/js-media/image/upload/v1690086146/portfolio/win11/screensaver_spul4s.webp')",
        "hero-main":
          "url('https://res.cloudinary.com/js-media/image/upload/f_auto/q_auto/v1642524508/portfolio/hero/3233453_brzqcm.webp')",
        "hero-skills":
          "url('https://res.cloudinary.com/js-media/image/upload/f_auto/q_auto/v1642524508/portfolio/hero/1947484_ehwya0.webp')",
        "hero-contact":
          "url('https://res.cloudinary.com/js-media/image/upload/f_auto/q_auto/v1642524508/portfolio/hero/3239480_nnfqfm.webp')",
        "profile-photo":
          "url('https://res.cloudinary.com/js-media/image/upload/v1670269379/portfolio/carnet/jesus-hernandez.webp')",
      },
      boxShadow: {
        icon: "0px 10px 10px rgba(0,0,0,0.1)",
      },
      colors: {
        email: "#EA4335",
        phone: "#004ecb",
        github: "#333333",
        linkedin: "#0a66c2",
        whatsapp: "#128c7e",
        cv: "#164E98",
      },
      gridTemplateColumns: {
        skills: "repeat(auto-fit, minmax(4.75rem, 1fr))",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [
    createThemes(({ light, dark }) => ({
      "main-light": light({
        primary: {
          50: "#EFF7FF",
          100: "#DBEAFE",
          200: "#BFD3FE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        primaryDark: {
          50: "#B2E2F2",
          100: "#9BD8EB",
          200: "#81CEE2",
          300: "#64C1D7",
          400: "#3FB2CC",
          500: "#1976D2",
          600: "#0E57C7",
          700: "#0039B9",
          800: "#002896",
          900: "#00196B",
        },
        primaryLight: {
          50: "#F2F7FB",
          100: "#EBEEF2",
          200: "#E2E9EB",
          300: "#D7E0E2",
          400: "#CCD5D9",
          500: "#BBDEFB",
          600: "#AED2F2",
          700: "#9BC9E9",
          800: "#83B9DD",
          900: "#6BAED2",
        },
        primaryText: {
          50: "#3E3E3E",
          100: "#363636",
          200: "#2E2E2E",
          300: "#262626",
          400: "#1E1E1E",
          500: "#212121",
          600: "#191919",
          700: "#131313",
          800: "#0B0B0B",
          900: "#050505",
        },
        secondary: {
          50: "#EBFAFE",
          100: "#D7F2FD",
          200: "#BEE9FC",
          300: "#9FDAFB",
          400: "#7BCBF9",
          500: "#536DFE",
          600: "#3F51FC",
          700: "#2D3EFA",
          800: "#1E2CF7",
          900: "#121AF5",
        },
        secondaryText: {
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#D9D9D9",
          600: "#6b7280",
          700: "#BFBFBF",
          800: "#B3B3B3",
          900: "#A6A6A6",
        },
        divider: {
          50: "#BDBDBD",
          100: "#9E9E9E",
          200: "#757575",
          300: "#616161",
          400: "#424242",
          500: "#212121",
          600: "#1E1E1E",
          700: "#171717",
          800: "#0F0F0F",
          900: "#000000",
        },
        background: {
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#748BA7",
          600: "#6E80A0",
          700: "#676C96",
          800: "#F8FAFC",
          900: "#111827",
        },
      }),
      "main-dark": dark({
        primary: {
          50: "#0D1221",
          100: "#1B2346",
          200: "#29418E",
          300: "#365DC9",
          400: "#3B70E3",
          500: "#3C82F6",
          600: "#3C8EFF",
          700: "#3480F4",
          800: "#2B6DC8",
          900: "#23519A",
        },
        primaryDark: {
          50: "#95D2EB",
          100: "#73C1D9",
          200: "#51AFCC",
          300: "#2E9FB7",
          400: "#007FA0",
          500: "#005775",
          600: "#00394F",
          700: "#001F2D",
          800: "#000F19",
          900: "#000100",
        },
        primaryLight: {
          50: "#E9F7FF",
          100: "#D3EEFE",
          200: "#BFDDFE",
          300: "#9FC9F9",
          400: "#75B2F2",
          500: "#4495E9",
          600: "#1E75CC",
          700: "#0051A7",
          800: "#002D89",
          900: "#000F64",
        },
        primaryText: {
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#D9D9D9",
          600: "#CCCCCC",
          700: "#BFBFBF",
          800: "#B3B3B3",
          900: "#A6A6A6",
        },
        secondary: {
          50: "#E7FBFE",
          100: "#D9F9FD",
          200: "#CCF7FC",
          300: "#B7F2F9",
          400: "#9FECF2",
          500: "#80E1E9",
          600: "#5CC5D9",
          700: "#35A7CC",
          800: "#1F89AF",
          900: "#006489",
        },
        secondaryText: {
          50: "#FFFFFF",
          100: "#F4F4F4",
          200: "#EAEAEA",
          300: "#D9D9D9",
          400: "#C2C2C2",
          500: "#A8A8A8",
          600: "#8E8E8E",
          700: "#747474",
          800: "#5A5A5A",
          900: "#404040",
        },
        divider: {
          50: "#979797",
          100: "#7E7E7E",
          200: "#656565",
          300: "#4C4C4C",
          400: "#333333",
          500: "#1A1A1A",
          600: "#101010",
          700: "#060606",
          800: "#000000",
          900: "#000000",
        },
        background: {
          50: "#2E2E2E",
          100: "#262626",
          200: "#1D1D1D",
          300: "#131313",
          400: "#0B0B0B",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      }),
      "orange-light": light({
        primary: {
          50: "#FFF7ED",
          100: "#FFEFD1",
          200: "#FFDFB1",
          300: "#FFCE8F",
          400: "#FFBB6C",
          500: "#FFA948",
          600: "#FF9A29",
          700: "#FF8C0E",
          800: "#FF7D00",
          900: "#FF6E00",
        },
        primaryDark: {
          50: "#FFD5B6",
          100: "#FFC89B",
          200: "#FFBA7D",
          300: "#FFAB5C",
          400: "#FF9940",
          500: "#FF850D",
          600: "#FF7600",
          700: "#FF6600",
          800: "#FF5400",
          900: "#FF3D00",
        },
        primaryLight: {
          50: "#FFFBF7",
          100: "#FFF6EF",
          200: "#FFF0E5",
          300: "#FFEBDA",
          400: "#FFE5CE",
          500: "#FFDABE",
          600: "#FFD1B0",
          700: "#FFC7A0",
          800: "#FFBB8A",
          900: "#FFAC6F",
        },
        primaryText: {
          50: "#3E3E3E",
          100: "#363636",
          200: "#2E2E2E",
          300: "#262626",
          400: "#1E1E1E",
          500: "#212121",
          600: "#191919",
          700: "#131313",
          800: "#0B0B0B",
          900: "#050505",
        },
        secondary: {
          50: "#FFFAF9",
          100: "#FFF2F0",
          200: "#FFEAE6",
          300: "#FFDFD8",
          400: "#FFD2C7",
          500: "#FFC2B2",
          600: "#FFB89F",
          700: "#FFAB88",
          800: "#FF9B6C",
          900: "#FF8950",
        },
        secondaryText: {
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#D9D9D9",
          600: "#6b7280",
          700: "#BFBFBF",
          800: "#B3B3B3",
          900: "#A6A6A6",
        },
        divider: {
          50: "#BDBDBD",
          100: "#9E9E9E",
          200: "#757575",
          300: "#616161",
          400: "#424242",
          500: "#212121",
          600: "#1E1E1E",
          700: "#171717",
          800: "#0F0F0F",
          900: "#000000",
        },
        background: {
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#748BA7",
          600: "#6E80A0",
          700: "#676C96",
          800: "#F8FAFC",
          900: "#111827",
        },
      }),
      "orange-dark": dark({
        primary: {
          50: "#0D1221",
          100: "#1B2346",
          200: "#29418E",
          300: "#365DC9",
          400: "#3B70E3",
          500: "#FF8C00",
          600: "#FFA500",
          700: "#FF7F00",
          800: "#FF6600",
          900: "#FF4500",
        },
        primaryDark: {
          50: "#95D2EB",
          100: "#73C1D9",
          200: "#51AFCC",
          300: "#2E9FB7",
          400: "#007FA0",
          500: "#005775",
          600: "#00394F",
          700: "#001F2D",
          800: "#000F19",
          900: "#000100",
        },
        primaryLight: {
          50: "#E9F7FF",
          100: "#D3EEFE",
          200: "#BFDDFE",
          300: "#9FC9F9",
          400: "#75B2F2",
          500: "#4495E9",
          600: "#1E75CC",
          700: "#0051A7",
          800: "#002D89",
          900: "#000F64",
        },
        primaryText: {
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#D9D9D9",
          600: "#CCCCCC",
          700: "#BFBFBF",
          800: "#B3B3B3",
          900: "#A6A6A6",
        },
        secondary: {
          50: "#E7FBFE",
          100: "#D9F9FD",
          200: "#CCF7FC",
          300: "#B7F2F9",
          400: "#9FECF2",
          500: "#80E1E9",
          600: "#5CC5D9",
          700: "#35A7CC",
          800: "#1F89AF",
          900: "#006489",
        },
        secondaryText: {
          50: "#FFFFFF",
          100: "#F4F4F4",
          200: "#EAEAEA",
          300: "#D9D9D9",
          400: "#C2C2C2",
          500: "#A8A8A8",
          600: "#8E8E8E",
          700: "#747474",
          800: "#5A5A5A",
          900: "#404040",
        },
        divider: {
          50: "#979797",
          100: "#7E7E7E",
          200: "#656565",
          300: "#4C4C4C",
          400: "#333333",
          500: "#1A1A1A",
          600: "#101010",
          700: "#060606",
          800: "#000000",
          900: "#000000",
        },
        background: {
          50: "#2E2E2E",
          100: "#262626",
          200: "#1D1D1D",
          300: "#131313",
          400: "#0B0B0B",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      }),
      "christmas-light": light({
        primary: {
          50: "#FFEEEE", // Light red
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E", // Traditional Christmas red
          600: "#C53030",
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
        },
        primaryDark: {
          50: "#E4F9F5", // Light green
          100: "#B6F7D4",
          200: "#87EFC7",
          300: "#54D8A0",
          400: "#28C76F",
          500: "#12B686", // Christmas tree green
          600: "#0A8F62",
          700: "#0A6C49",
          800: "#065A37",
          900: "#064523",
        },
        primaryLight: {
          50: "#FFFBEA", // Light gold
          100: "#FFF3C4",
          200: "#FCE588",
          300: "#FADB5F",
          400: "#F7C948",
          500: "#F0B429", // Rich gold
          600: "#DE911D",
          700: "#CB6E17",
          800: "#B44D12",
          900: "#8D2B0B",
        },
        primaryText: {
          50: "#3E3E3E",
          100: "#363636",
          200: "#2E2E2E",
          300: "#262626",
          400: "#1E1E1E",
          500: "#212121",
          600: "#191919",
          700: "#131313",
          800: "#0B0B0B",
          900: "#050505",
        },
        secondary: {
          // Additional shades of red and green
          50: "#FFEBEE", // Lighter red
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336", // Bright red
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },
        secondaryText: {
          // More green shades
          50: "#E8F5E9", // Light green
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50", // Rich green
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
        divider: {
          50: "#BDBDBD",
          100: "#9E9E9E",
          200: "#757575",
          300: "#616161",
          400: "#424242",
          500: "#212121",
          600: "#1E1E1E",
          700: "#171717",
          800: "#0F0F0F",
          900: "#000000",
        },
        background: {
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#748BA7",
          600: "#6E80A0",
          700: "#676C96",
          800: "#F8FAFC",
          900: "#111827",
        },
      }),
      "christmas-dark": dark({
        primary: {
          50: "#FFEEEE", // Light red
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E", // Traditional Christmas red
          600: "#C53030",
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
        },
        primaryDark: {
          // Dark, lush greens
          50: "#204D40",
          100: "#1A4439",
          200: "#143B32",
          300: "#0F322B",
          400: "#092924",
          500: "#03201D", // Deep Christmas tree green
          600: "#001716",
          700: "#000E0F",
          800: "#000508",
          900: "#000000",
        },
        primaryLight: {
          // Soft, muted golds
          50: "#8C6B44",
          100: "#7E613C",
          200: "#705733",
          300: "#624D2B",
          400: "#544322",
          500: "#463919", // Warm, dark gold
          600: "#382F10",
          700: "#2A2507",
          800: "#1C1B00",
          900: "#0E1100",
        },
        primaryText: {
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#EBEBEB",
          400: "#E2E2E2",
          500: "#D9D9D9",
          600: "#CCCCCC",
          700: "#BFBFBF",
          800: "#B3B3B3",
          900: "#A6A6A6",
        },
        secondary: {
          // Rich blues to complement the reds
          50: "#4A5568",
          100: "#404A5E",
          200: "#364054",
          300: "#2C364A",
          400: "#222C40",
          500: "#182235", // Deep night blue
          600: "#0E182B",
          700: "#040E21",
          800: "#000417",
          900: "#00000D",
        },
        secondaryText: {
          50: "#FFFFFF",
          100: "#F4F4F4",
          200: "#EAEAEA",
          300: "#D9D9D9",
          400: "#C2C2C2",
          500: "#A8A8A8",
          600: "#8E8E8E",
          700: "#747474",
          800: "#5A5A5A",
          900: "#404040",
        },
        divider: {
          // Dark dividers for subtle separation
          50: "#424242",
          100: "#383838",
          200: "#2E2E2E",
          300: "#242424",
          400: "#1A1A1A",
          500: "#101010",
          600: "#060606",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        background: {
          // Dark and muted background colors
          50: "#1A202C",
          100: "#171B26",
          200: "#141620",
          300: "#11111A",
          400: "#0E0C14",
          500: "#0B070E",
          600: "#080208",
          700: "#050000",
          800: "#020000",
          900: "#000000",
        },
      }),
    })),
  ],
  safelist: [
    {
      pattern: /(bg|border)-(email|phone|github|linkedin|whatsapp)/,
      variants: ["hover", "before"],
    },
  ],
};
