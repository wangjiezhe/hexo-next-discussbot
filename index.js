/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {

  let config = utils.defaultConfigFile('discussbot', 'default.yaml');
  if (!config.enable) return;

  if (!config.siteid) {
    hexo.log.warn('discussbot.siteid can\'t be null.');
    return;
  }

  injects.comment.raw('discussbot', `
  <div class="comments">
    <div id="discussbot-container"></div>
  </div>
  `, {}, { cache: true });

  injects.bodyEnd.raw('discussbot', utils.getFileContent('discussbot.njk'));

  injects.style.push(utils.getFilePath('discussbot.styl'));

});
