# OwlTrack 🦉

<p align="center" width="350" height="350">
    <img src="https://github.com/Snarr/OwlTrack/blob/media/screenshot-700x700.png?raw=true" />
</p>

A Twitter bot that posts when active cases are discovered on Temple University's COVID-19 dashboard.

### How it works

- Application grabs case data from web scraping API since the COVID-19 Dashboard does not have any public API endpoints.

- Applications pulls random "owl" images from Unsplash's random image API.

- Application posts formatted results to Twitter using the Twitter API v1.1 & Twit.

### Hosting

Currently running 24/7 on a DigitalOcean Droplet w/ Ubuntu 20.04 & Node.js 12.16.x.

### Demo

Check out the bot at [@OwlTrackTU on Twitter](https://www.twitter.com/OwlTrackTU)

<p align="center">
<img src="https://madewithlove.now.sh/us?heart=true&template=for-the-badge&text=Philadelphia%2C+PA" alt="Made with love in Philadelphia, PA">
</p>