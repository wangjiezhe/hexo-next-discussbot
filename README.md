# Hexo NexT DiscussBot

![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/wangjiezhe/hexo-next-discussbot?style=flat-square)
![npm](https://img.shields.io/npm/v/hexo-next-discussbot?style=flat-square)
![License](https://img.shields.io/github/license/wangjiezhe/hexo-next-discussbot?style=flat-square)

DiscussBot comment system for NexT.

## Preview

![image](https://i.loli.net/2019/12/14/8thYSXx9cdWv5L7.png)

## Install

```bash
npm install hexo-next-discussbot
```

or

```bash
yarn add hexo-next-discussbot
```

## Configure

You can config those in both **hexo** or **theme** `_config.yml`

```yaml
# DiscussBot
# You can get your siteid from https://comments.app/
# Demo: https://comments.app/view/FLRGs2N1
discussbot:
    enable: false
    siteid: # get from comments.app
    # number: comments showed per page
    number: 5
    # color: use HEX number for accent color
    color: 3DA0F0
    # dislike: 0 or 1, show only likes, or show both like and dislikes
    dislikes: 0
    # outlined: 0 or 1, use filled icon or outlined icon
    outlined: 0
```
