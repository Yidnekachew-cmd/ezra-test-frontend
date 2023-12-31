import tailwindcssAnimate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs1: ["12px", { lineHeight: "20px", letterSpacing: "0" }],
      xs: ["14px", { lineHeight: "22px", letterSpacing: "0" }],
      sm: ["16px", { lineHeight: "24px", letterSpacing: "0" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "0" }],
      xl: ["20px", { lineHeight: "30px", letterSpacing: "0" }],
      "2xl": ["24px", { lineHeight: "36px", letterSpacing: "0" }],
      "3xl": ["32px", { lineHeight: "48px", letterSpacing: "0" }],
      "4xl": ["48px", { lineHeight: "64px", letterSpacing: "0" }],
      "5xl": ["64px", { lineHeight: "80px", letterSpacing: "0" }],
      "6xl": ["80px", { lineHeight: "94px", letterSpacing: "0" }],
      "7xl": ["96px", { lineHeight: "110px", letterSpacing: "-0.02em" }],
    },
    extend: {
      truncate: {
        lines: {
          2: "2",
          3: "3",
        },
      },
      fontFamily: {
        "nokia-bold": ["Nokia Pure Headline Bold", "Inter", "sans-serif"],
        "nokia-light": ["Nokia Pure Headline Light", "Inter", "sans-serif"],
        "Lato-Light": ["Lato-Light", "sans-serif"],
        "Lato-Regular": ["Lato-Regular", "sans-serif"],
        "Lato-Black": ["Lato-Black", "sans-serif"],
        "Lato-Bold": ["Lato-Bold", "sans-serif"],
        "Lato-Thin": ["Lato-Thin", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["Public sans", "Inter", "sans-serif"],
      },

      backgroundImage: {
        "header-img": "url('./assets/header-img.svg')",
        "coming-soon": "url('./assets/coming-soon.png')",
        "chapter-img-1": "url('./assets/chapter-img-1.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        "primary-1": "#FDFDFD",
        "primary-2": "#FBFBFB",
        "primary-3": "#F8F8F8",
        "primary-4": "#F4F4F4",
        "primary-5": "#F1F1F1",
        "primary-6": "#EEEEEE",
        "primary-7": "#CACACA",
        "primary-8": "#A9A9A9",
        "primary-9": "#888888",
        "primary-10": "#6B6B6B",
        "secondary-1": "#EBEDEE",
        "secondary-2": "#D0D3D5",
        "secondary-3": "#AAB0B4",
        "secondary-4": "#838B91",
        "secondary-5": "#5D6870",
        "secondary-6": "#3A4750",
        "secondary-7": "#313C44",
        "secondary-8": "#293239",
        "secondary-9": "#21282E",
        "secondary-10": "#1A2024",
        "accent-1": "#FDF4E8",
        "accent-2": "#FAE5C7",
        "accent-3": "#F6D09A",
        "accent-4": "#F2BA6C",
        "accent-5": "#EEA63F",
        "accent-6": "#EA9215",
        "accent-7": "#C77C12",
        "accent-8": "#A6680F",
        "accent-9": "#85530C",
        "accent-10": "#694209",
        "accent-11": "#EFC180",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
