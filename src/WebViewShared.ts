import escapeStringRegexp from 'escape-string-regexp';

const WebViewShared = {
  defaultOriginWhitelist: ['http://*', 'https://*'],
  extractOrigin: (url: string): string => {
    const result = /^[A-Za-z0-9]+:(\/\/)?[^/]*/.exec(url);
    return result === null ? '' : result[0];
  },
  originWhitelistToRegex: (originWhitelist: string): string =>
    escapeStringRegexp(originWhitelist).replace(/\\\*/g, '.*'),
};

export default WebViewShared;