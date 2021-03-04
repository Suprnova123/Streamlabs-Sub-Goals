# Streamlabs Sub Goal
This is a simple template designed to be a sort of recreation of Streamlabs' default goal design. Specifically this is for sub goals, featuring support for automatically displaying your current subscribers on launch and updating when you receive a new subscriber.

## Important
Because of Twitch's API limitations, you are unable to fetch subscriber counts through the public API without authentication. This is circumvented with [decAPI](https://decapi.me/twitch/subcount), which means that you'll have to authenticate with decAPI. After authenticating, you can simply replace "\<streamer>" with your Twitch username on line 6 of subs.js.
