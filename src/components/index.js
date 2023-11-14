import mlButton from "./button/index";
/*
  Vue的一个公开方法：install，
  这个方法会在使用Vue.use()的时候被调用，
  这样就可以将组件注册到全局。
 */
const install = (app) => {
  app.use(mlButton);
};
const mlUi = {
  install,
};
export default mlUi;
