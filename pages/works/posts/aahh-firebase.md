import Post from 'components/Post/post';

export const meta = {
  title: 'Aahh Firebase',
  summary: 'Firebase is painful',
  published: true,
  publishedAt: '2020-10-15',
};

export default ({ children }) => <Post meta={meta}>{children}</Post>;

Many developers around the web and mobile have probably tried this BAAS thing
called "firebase". Also many have said that it's nice, easy, it's developer
focus yada, yada, yada... A lot of very optimistic feedback

So here is my one takeway/feedback after using firebase for 2 months.

Firebase is painful!

They have this thing called __data denormalization__ which is a fancy term for
duplicating your data.

So I did that. But the painful part comes when you need to keep your data
consistent across collections & subcollections.

Look, I'm relatively new to firebase and I'm dying to find a better solution to
this tedious process of updating each document in every collections &
subcollections affected.

I've been hanging around StackOverflow for hours and found some workarounds
like batch & transactions but I still feel unsatisfied with these type solutions.

If you're planning to use firebase for your future apps... Why?
And if you're already using firebase... Why?

If we're sharing the same pain. I would love to know if you have found a way
around it or if you've just stopped using firebase as you've learned
helplessness.
