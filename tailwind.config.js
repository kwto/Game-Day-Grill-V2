module.exports = {
  content: [
    './**/*.php',
    '../Resources/**/*.{html,js}',
  ],
  safelist: [
    'tw-bg-blue-800/75',
    {
      pattern: /(bg|text)-(blue)-(800)/,
      variants: ['hover'],
    },
  ],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
