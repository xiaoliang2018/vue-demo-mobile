// module.exports = {
//     plugins: {
//     //   //...
//     //   'autoprefixer': {
//     //     // browsers: ['Android >= 4.0', 'iOS >= 7']
//     //   },
//       'postcss-pxtorem': {
//         rootValue: 37.5, //vant-UI的官方根字体大小是37.5
//         // rootValue: 100.5, //vant-UI的官方根字体大小是37.5
//         propList: ['*']
//       }
//     }
//   }
// (function () {
//   var initFontSize = 16
//   var iPhone6Width = 375
//   var clientWidth = window.document.documentElement.clientWidth || iPhone6Width
//   var newFontSize = initFontSize * (clientWidth / iPhone6Width)
//   document.documentElement.style.fontSize = newFontSize + 'px'
// })()
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
        rootValue: 37.5,  //数字越小 字体等其他布局越大
        propList: ['*']
    }
  }
}
