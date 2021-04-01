import { shortenText } from '../../src/utils/functions'
import { wordCount,attachUserName } from '../../server/utils'
import { shortText,longText,posts,users } from './__data__/testData'


test('this should shorten text over 100 characters and add three periods at the end', () => {

  expect(shortenText(shortText)).toHaveLength(29)
});

test('this should shorten text over 100 characters and add three periods at the end', ()=> {
  const shortenedText = shortenText(longText);
  
  expect(shortenedText).not.toHaveLength(longText.length)
  expect(shortenedText.slice(-3)).toBe('...')
});

test('the wordCount function should count the number of words in a sentence', () => {
  expect(wordCount(posts)).toBe(233);
});

test('the function attachUserName should attach a users name to a post', () => {
  const newPosts = attachUserName(users, posts);

  expect(newPosts[0]).toHaveProperty('displayName');
})

test('attachUserName should remove posts that have no matching user', ()=> {
  const newPosts = attachUserName(users,posts);
  const deletedPost = posts[5];

  expect(newPosts).not.toContainEqual(deletedPost);
});

