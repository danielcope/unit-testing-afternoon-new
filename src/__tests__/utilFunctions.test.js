import { shortenText } from '../../src/utils/functions'
import { wordCount,attachUserName } from '../../server/utils'
import { shortText,longText,posts,users } from './__data__/testData'


test('this should shorten text over 100 characters and add three periods at the end', () => {

  expect(shortenText(shortText)).toHaveLength(29)
});

test('this should shorten text over 100 characters and add three periods at the end', ()=> {
  const shortenedText = shortenText(longText);
  
})