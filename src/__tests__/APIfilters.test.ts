import {getDefinitiveBooks, getDefinitiveISBN, BooksResponseType, ISBNResponseType} from '../components/welcome/StepFour';


test('getDefinitiveBooks should return the filtered books by ISBN', () => {
  const booksResponse: BooksResponseType[] = [
    {
      isbn: '123456789',
      title: 'The Hobbit',
    },
    {
      isbn: '987654321',
      title: 'The Hobbit',
    },
    {
      isbn: '1111111111',
      title: 'The Hobbit',
    },
    {
      isbn: '22222222222',
      title: 'thE DOS',
    },
    {
      isbn: '33333333333',
      title: 'The Hobbit',
    },
  ];
  const definitiveISBN = [
    {
      isbn: '22222222222',
    },
    {
      isbn: '123456789',
    },
  ];

  const result = getDefinitiveBooks(booksResponse, definitiveISBN);
  expect(result).toEqual([
    {
      isbn: '123456789',
      title: 'The Hobbit',
    },
    {
      isbn: '22222222222',
      title: 'thE DOS',
    },
  ]);
});

///////

test('getDefinitiveISBN should return the filtered array of ISBNs', () => {
  const filteredSubjects:ISBNResponseType[] = [
    {
      topics: ['Love', 'Magic'],
      isbn: ['A23456789'],
    },
    {
      topics: ['Ghosts', 'History'],
      isbn: ['000000'],
    },
    {
      topics: ['Animals', 'Adventure'],
      isbn: ['A111111'],
    },
  ];
  
  const kidData = {
    kidName: 'Lola',
    kidAge: 10,
    selectedTopics: ['Love', 'Animals']
};

  const result = getDefinitiveISBN(filteredSubjects, kidData);
  console.log(result)
  expect(result).toEqual([
    {isbn: 'A23456789'},
    {isbn: 'A111111'},
  ]);
});






