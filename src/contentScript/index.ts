import message from '../component/message';
import MESSAGES from 'src/component/message/constants';
import logger from 'src/component/logger';

/* Take note that contentScript is ran in the context of the extension.
Some situations may require injecting code into the page by appending a
script tag. */

console.log('contentScript!');


message.recieve.contentScript(message => {
  const { payload } = message || {};
  const { url, onionUrl } = payload || {};

  if (window.location.href === url) {
    console.log('onionUrl:', onionUrl);
  }
});

// var t = document.createElement('div');
// t.className = 'tor-enabled';
// document.body.prepend(t);

// z-index: 9999999;
// color: red;
// position: fixed;
// height: 31px;
// background: blue;
// top: 0px;