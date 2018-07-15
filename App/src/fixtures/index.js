const jsonResp = {
  'storyId': 'storyOne',
  'title': 'ComicBook1',
  'author': 'Jone Doe',
  'cover': 'covers/story-one.jpg',
  'description': 'Brief description about this comic...',
  'pageList': [
    {
      'pageId': 1,
      'pageAnimation': './test_virus_1_1.gif',
      'pageContent': "I'm the Measles",
      'option': {
        'isAvailable': false,
        'question': '',
        'answer_a': '',
        'answer_b': ''
      }
    },
    {
      'pageId': 2,
      'pageAnimation': './test_virus_1_1.gif',
      'pageContent': 'This is the story of a girl2...',
      'option': {
        'isAvailable': true,
        'question': 'this is the question',
        'answer_a': '',
        'answer_b': ''
      }
    },
    {
      'pageId': 3,
      'pageAnimation': './test_virus_1_1.gif',
      'pageContent': 'This is the story of a girl3...',
      'option': {
        'isAvailable': true,
        'question': '',
        'answer_a': '',
        'answer_b': ''
      }
    }
  ]
};

export default jsonResp;
