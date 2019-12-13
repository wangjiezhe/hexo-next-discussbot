# Hexo NexT DiscussBot

Discussbot comment system for NexT.

## Install

```bash
yarn add wangjiezhe/hexo-next-discussbot
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
