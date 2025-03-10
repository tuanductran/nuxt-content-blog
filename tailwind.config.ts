import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: [typography()]
}
