/* global hexo */

'use strict';

const Util = require('next-util');
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {

  let config = utils.defaultConfigFile('discussbot', 'default.yaml');
  if (!config.enable) return;

  if (!config.siteid) {
    hexo.log.warn(`discussbot.siteid can't be null.`);
    return;
  }

  injects.comment.raw('discussbot', `
  {% if page.comments %}
  <div class="comments" id="discussbot-container">
  <script{{ pjax }} async src="https://comments.app/js/widget.js?2" data-comments-app-website="${config.siteid}" data-limit="${config.number}" data-color="${config.color}" data-dislikes="${config.dislikes}" data-outlined="${config.outlined}"></script>
  </div>
  {% endif %}
  `);

  injects.style.push(utils.getFilePath('discussbot.styl'));

}, (hexo.config.discussbot || {}).priority);
