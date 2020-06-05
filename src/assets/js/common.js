const isLogin = ()=>{
    return true;
}
 
const formatNum = (str)=> { //每三位数添加一个逗号,
    if(isNaN(parseInt(str))){ //传非数字直接返回
      return str;
    }
    str = String(str); //无论字符串的数字或number 都转成string
    let newStr = '';
    let count = 0;
    let isFu = false;
    if (str.indexOf('-') == 0) { isFu = true; str = str.substring(1); }
    // 当数字是整数
    if (str.indexOf('.') == -1) {
      for (var i = str.length - 1; i >= 0; i--) {
        if (count % 3 == 0 && count != 0) {
          newStr = `${str.charAt(i)},${newStr}`;
        } else {
          newStr = str.charAt(i) + newStr;
        }
        count++;
      }
      str = newStr; // 自动补小数点后两位
      if (isFu) {
        return `-${str}`;
      }
      return str;
    }
    // 当数字带有小数

    for (var i = str.indexOf('.') - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newStr = `${str.charAt(i)},${newStr}`;
      } else {
        newStr = str.charAt(i) + newStr; // 逐个字符相接起来
      }
      count++;
    }
    str = newStr + (`${str}00`).substr((`${str}00`).indexOf('.'), 3);
    if (isFu) {
      return `-${str}`;
    }
    // console.log(str,'strrrrrrrrrrrrr')
    return str;
}



export default {
    isLogin,
    formatNum
}