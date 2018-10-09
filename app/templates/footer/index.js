const html = require('choo/html');
const assets = require('../../../common/assets');

module.exports = function(state) {
  const footer = html`<footer class="footer">
  </footer>`;
  // HACK
  // We only want to render this once because we
  // toggle the targets of the links with utils/openLinksInNewTab
  footer.isSameNode = function(target) {
    return target && target.nodeName && target.nodeName === 'FOOTER';
  };
  return footer;
};
