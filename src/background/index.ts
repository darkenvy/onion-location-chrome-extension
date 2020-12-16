
import './dev';
import message from '../component/message';
import find from 'lodash/find';
import get from 'lodash/get';
import { MAIN_FRAME } from './constants';
import MESSAGES from 'src/component/message/constants';

chrome.webRequest.onHeadersReceived.addListener(details => {
  const { url, type, responseHeaders } = details || {};
  let onionLocationHeader;
  let onionLocationValue;

  if (type !== MAIN_FRAME) return;

  onionLocationHeader = find(responseHeaders, { name: 'onion-location' });
  onionLocationValue = get(onionLocationHeader, 'value');
  console.log('onionLocationValue', onionLocationValue);
  console.log('details', details)

  // contentScript is not ready immediately. Delay to allow initialization
  setTimeout(() => {
    message.send.contentScript({
      msg: MESSAGES.HAS_TOR_HEADER,
      payload: {
        url,
        onionUrl: onionLocationValue,
      },
    });
  },1000);
}, {
  urls: ["<all_urls>"],
}, [
  "responseHeaders",
]);
