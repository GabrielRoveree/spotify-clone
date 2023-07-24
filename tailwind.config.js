module.exports = {
    mode: 'jit',
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
    ],
    theme: {
      extend: {
        borderRadius: {
          '4xl': '2rem',
          large: '3.75rem',
        },
        colors: {
          mte: {
            body: '#FFFFFF',
            primary_0: '#FDC70F',
            primary_1: '#E39D0E',
            primary_2: '#E0B762',
            blue_0: '#0A1631',
            blue_1: '#0F214A',
            blue_2: '#050A17',
            black_0: '#2A2A2A',
            black_1: '#424242',
            black_2: '#0F0F0F',
            white: '#FFFFFF',
            white_1: '#FFFAF8',
            white_2: '#F2EDEB',
            white_3: '#FBF8F8',
            gray_0: '#9C9EA1',
            gray_1: '#B4B7BA',
            gray_2: '#838587',
            gray_3: '#F9F9F9',
            danger: '#EC2F23',
            info_danger: '#FFECEB',
            warning: '#ECD823',
            info: '#1F4496',
            info_50: '#EAEFFA',
            success: '#78B82A',
            tooltip: '#0000008c',
            sencodary_title: '#EC6623',
            orange: '#EC6623',
            // Alerts
            'alert-danger-0': '#EC2F23',
            'alert-danger-1': '#D40D00',
            'alert-danger-ligth': '#FFECEB',
            'alert-warning': '#ECD823',
            'alert-warning-ligth': '#FFFDEB',
            'alert-info': '#1F4496',
            'alert-info-ligth': '#EBF1FF',
            'alert-success': '#78B82A',
            'alert-success-ligth': '#F6FFEB',
          },
        },
        fontFamily: {
          icon: ['Material Symbols Outlined'],
          body: ['Montserrat', 'sans-serif'],
        },
        fontSize: {
          h1: '67px',
          h2: '50px',
          h3: '38px',
          h4: '28px',
          h5: '21px',
          p: '16px',
          sm: '12px',
        },
        fontWeight: {
          thin: '100',
          light: '300',
          regular: '400',
          bold: '700',
          black: '900',
        },
        boxShadow: {
          dropdown: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
        },
        transitionProperty: {
          width: 'width',
        },
        backgroundImage: {
          'mundo-matrix': 'url("/assets/image/banner_mundo_matrix.png")',
          'about-us': 'url("/assets/image/bg-about-us.jpg")',
        },
      },
    },
    plugins: [],
  }