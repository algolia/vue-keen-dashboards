export const chartOne = {
  operation: 'count',
  params: {
    event_collection: 'pageviews',
    timeframe: 'this_14_days',
    interval: 'daily'
  },
  viz: new window.Keen.Dataviz()
        .type('bar')
        .title('Pageviews by day')
};

export const chartTwo = {
  operation: 'count',
  params: {
    event_collection: 'pageviews',
    timeframe: 'this_year'
  },
  viz: new window.Keen.Dataviz()
        .title('Total pageviews')
};
