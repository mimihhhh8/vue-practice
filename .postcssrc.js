// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 1920,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['ignore-px2vw'],
        mediaQuery: true,
        landscapeUnit:'vw',
        landscapeWidth:1920,
        propList:  ["*", "!font*"],
        replace: true,
        exclude:  [ /node_modules/ ],
        landscape: false    }
  }
}
