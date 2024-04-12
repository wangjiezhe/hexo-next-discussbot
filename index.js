/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {

  const config = utils.defaultConfigFile('discussbot', 'default.yaml');
  if (!config.enable) return;

  if (!config.site_id) {
    hexo.log.warn('discussbot.site_id can\'t be null.');
    return;
  }

  injects.comment.raw('discussbot', `
  {% if page.comments %}
  <div class="comments discussbot-container">
  </div>
  {% endif %}
  `);

  injects.bodyEnd.raw('discussbot', utils.getFileContent('discussbot.njk'));

  injects.style.push(utils.getFilePath('discussbot.styl'));

}, (hexo.config.discussbot || {}).priority);
