import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1,
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    },
    {
      name: 'Montserrat',
      styles: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    },
  ],
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
});

export default typography;
