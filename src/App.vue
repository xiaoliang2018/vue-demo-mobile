<template>
  <div id="app">
		<!-- <ul id="main">
			<li><router-link  to="/echartDemo1" >demo1</router-link></li>
			<li><router-link  to="/echartDemo2">demo2</router-link></li>
			<li><router-link  to="/echartDemo3">demo3</router-link></li>
		</ul> -->
    <router-view/>
  </div>
</template>

<style lang="less">
  *{
    margin:0;
    padding:0
  }
  html{
    font-size:20px;
  }
</style>

<script type="text/javascript">
    // let pageWidth = window.innerWidth
    // document.write(`<style>html{font-size:${pageWidth/10}px;}</style>`)

    // fnResize();
    // window.onresize = function () {
    //   fnResize();
    // }
    // function fnResize() {
    //   var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    //   if (deviceWidth >= 750) {
    //     deviceWidth = 750;
    //   }
    //   if (deviceWidth <= 320) {
    //     deviceWidth = 320;
    //   }
    //   document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    // }


</script>
