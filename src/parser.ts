import Parser from 'rss-parser';

type CustomFeed = {title: string};
type CustomItem = {title: string, link: string};

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    feed: ['title'],
    item: ['title', 'link']
  }
});

export const parse = async (feedUrl: string) => {
    console.log('Attempting to parse : ' + feedUrl);

    const feed = await parser.parseURL(feedUrl);

    console.log(`${feed.items.length} items found`);
    
    if (feed.items.length === 0) {
        return [];
    }
  
    return feed.items;
};
