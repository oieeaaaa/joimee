import Post from 'components/Post/post';

export const meta = {
  title: 'Practical CSS Series: Part 1',
  summary: 'Truncate paragraph text',
  published: true,
  publishedAt: '2020-04-26',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

After thousands of hours of tweaking, experimenting with tons of CSS properties I
finally gain the confidence to pour the techniques and hacks that I've learned
through these past years. And I'm so happy to share and write all about these
hacks and techniques for you.

This series can help you solve some of the real world problems with CSS that
you can immediately apply to your current project or add to your CSS arsenal.

**NOTE:** Whether if you're a beginner or already familiar with css you can
follow along with this series. Also, you can send me an <a href="mailto:joimee.cajandab@gmail.com">email</a> if you have any questions.

So with that being said, Let's begin this series with our first practical example.

## Truncate Paragragraph Text

#### TLDR;
- Key properties `-webkit-line-clamp`, `-webkit-box`, `-webkit-box-orient`
- Use em units to make the paragraph height responsive to the font-size
- [Demo](https://codesandbox.io/s/truncated-paragraph-text-nnrih?file=/style.css)


#### Markup
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Truncated Paragraph Text</title>

    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1 class="title">Truncated Paragraph Text</h1>
    <div class="container">
      <p class="text">
        Kitty loves pigs i’m so hungry i’m so hungry but ew not for that . As
        lick i the shoes hide head under blanket so no one can see for sleep in
        the bathroom sink shred all toilet paper and spread around the house
        meow all night headbutt owner's knee.
      </p>
      <p class="text">
        Stare at owner accusingly then wink flee in terror at cucumber
        discovered on floor yet stare at ceiling, or fall asleep on the washing
        machine. Cat dog hate mouse eat string barf pillow no baths hate
        everything this cat happen now, it was too purr-fect!!! white cat sleeps
        on a black shirt, yet bird bird bird bird bird bird human
      </p>
      <p class="text">
        Put toy mouse in food bowl run out of litter box at full speed always
        hungry, yet throw down all the stuff in the kitchen let me in let me out
        let me in let me out let me in let me out who broke this door anyway
        carefully drink from water glass and then spill it everywhere and
        proceed to lick the puddle groom yourself 4 hours - checked, have your
        beauty sleep 18 hours - checked, be fabulous for the rest of the day
      </p>
      <p class="text">
        Push your water glass on the floor leave fur on owners clothes, but
        mouse. Chase laser paw at your fat belly touch water with paw then
        recoil in horror, but i'm going to lap some water out of my master's cup
        meow chase mice. Rub face on everything. Rub face on everything sleep on
        dog bed, force dog to sleep on floor for lick sellotape i'm bored
        inside, let me out i'm lonely outside
      </p>
      <p class="text">
        Make muffins what a cat-ass-trophy! scratch the postman wake up lick paw
        wake up owner meow meow. Fight an alligator and win cats are a queer
        kind of folk or eat the rubberband, but scratch at the door then walk
        away pee in the shoe or my left donut is missing, as is my right. Sniff
        all the things jump launch to pounce upon little yarn mouse
      </p>
      <p class="text">
        Eat a plant, kill a hand sit and stare so scratch my tummy actually i
        hate you now fight me. When owners are asleep, cry for no apparent
        reason throw down all the stuff in the kitchen and sweet beast stick
        butt in face i like fish.
      </p>
    </div>
  </body>
</html>
```

Our goal is to make a 3x2 grid of truncated paragraphs.

And if you noticed we used [catipsum](http://catipsum.com/index.php) as text
content for each paragraph.

Let's see what it looks like on the browser.

![Figure 1][figure1]
[figure1]: /images/truncate-paragraph-text--figure-1.png

It doesn't seem to look like a 3x2 grid of paragraphs for now. So, let's add the
styles to make it look what it meant to be.

#### Styles
```css
/* basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title {
  margin-bottom: 20px;
  color: #333;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 600px;
}

.text {
  margin: 10px;
  width: 150px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: white;
  color: #333;

	/* key properties */
  display: -webkit-box;
  overflow-y: hidden;
  line-height: 1;
  height: 8em;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
```

And Voila!

![Figure 2][figure2]
[figure2]: /images/truncate-paragraph-text--figure-2.png

See the [demo](https://codesandbox.io/s/truncated-paragraph-text-nnrih?file=/style.css)
