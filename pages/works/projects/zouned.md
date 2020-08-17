import Project from 'components/Project/project';

export const meta = {
  title: 'Zouned',
  summary: 'Project zouned',
  published: true,
  publishedAt: '2020-08-17',
  image: '/images/Zouned.png',
  color: '#ff5555',
};

export default ({ children }) => <Project meta={meta}>{children}</Project>

## Tech Stack

Here is the list of the technologies used on this project:

1. [NextJS](https://nextjs.org/)
2. [ReactJS](https://reactjs.org/)
3. [Heroku](https://www.heroku.com/)
4. [Cloudinary](https://cloudinary.com/)

## Project link
[http://zouned.joimee.design/](http://zouned.joimee.design/)

## The HTMLMediaElement is awesome!
I always listen to Spotify and I'm curious about how the video controller works
under the hood (e.g, when I press the play button then what happens? when I
drag the thumb thingy and drag it across the progress bar It feels awesome but
I'm not so sure how it works though) until I stumbled upon this awesome
[API](https://en.wikipedia.org/wiki/Application_programming_interface) which
gives me the gist of how Spotify and other music platforms controls their music.

## Roadblocks
My main roadblock is the deployment part of the project because of my abysmal
knowledge in Heroku I made my back-end save the uploaded **.png** and **.mp4**
assets using a file system and save it on the server then I figured that
**Heroku save those uploaded assets temporarily** (thanks to my Nerd Friends)
so I need to find a way to somehow persist those assets because they are the
bread and butter of the site.

After searching "free storage server for web
developers" in [duckduckgo](https://duckduckgo.com/) I saw Cloudinary in the list (I've used S3 before but aws locked my
account for not paying my bills I'm a broke developer I need clients lol) which
does not charge me (yet) it's cool! I found their API easy to use and after a
few minutes of rewiring my Back-End I finally did it! Heroku and Cloudinary
work great in tandem! I'm so happy it works even though I'm not so sure how it
works (just kidding lol)

## Takeaways
Find your blindspots and you will never be bored, one of my blindspots before
is I'm not sure how the music player works in Spotify but now I kinda see it a
bit differently thanks to boredom and this awesome [api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement).
