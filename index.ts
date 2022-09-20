import Parser from 'rss-parser';

type CustomFeed = {title: string};
type CustomItem = {title: string, link: string};

const feedUrl = 'https://rpilocator.com/feed/?country=UK&cat=PI4';

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    feed: ['title'],
    item: ['title', 'link']
  }
});

(async () => {
  const feed = await parser.parseURL(feedUrl);

  if (feed.items.length === 0) {
    console.log('{}');
  }
  
  feed.items.forEach(item => {
    console.log(item);
  });
})();
