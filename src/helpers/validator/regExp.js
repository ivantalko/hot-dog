// eslint-disable-next-line
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^\S*$/;
const userNameRegExp = /^[a-zA-Z]+$/;
const phoneRegExp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const commentRegExp = /\w/im;
const priceRegExp = /^[1-9]\d*$/;

const regExp = {
  emailRegExp,
  passwordRegExp,
  userNameRegExp,
  phoneRegExp,
  commentRegExp,
  priceRegExp,
};

export default regExp;
