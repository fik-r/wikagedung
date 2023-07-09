/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        garnish: "#119552",
        radiant_yellow: "#F9A01B",
        sooty: "#141414",
        jet: "#343434",
        neutral: "#FEFFFF",
        orange: "#FFA500",
        hard_coal: "#656565",
        democrat: "#00AEEF",
        silver_spoon: "#D2D2D2",
        more_than_a_week: "#8C8C8C",
        aria: "#E3E3E3",
        dire_wolf: "#282828",
        lifeguard: "#E50000"
      },
      backgroundImage: {
        'footer': "url('/images/bg_footer.svg')",
        'hero': "url('/images/hero.jpg')",
        'konstruksi_gedung': "url('/images/illust_kontruksi_gedung.png')",
        'offsite_modular': "url('/images/illust_off_modular.png')",
        'offsite_pracetak': "url('/images/illust_off_pracetak.png')",
        'konsensi': "url('/images/illust_konsensi.png')",
        'project_overview': "url('images/bg_project_overview.svg')"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#0582C5",
          secondary: "#F9A01B",
          accent: "#E52F2F",
          warning: "#FFA500"
        },
      },
    ],
  },
}
