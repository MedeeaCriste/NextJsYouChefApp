import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "main": "#EC5B26"
      },
      backgroundImage: {
        'header': 'url(/banner.jpg)',
      },
      filter:{
        "brightness-50": "brightness(0.5)"
      }
    },
  },
  plugins: [],
}
export default config
