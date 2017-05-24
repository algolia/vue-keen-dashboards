export const chartOne = {
  operation: 'count',
  params: {
    event_collection: 'topic_created',
    timeframe: 'this_14_days',
    interval: 'daily'
  },
  viz: new window.Keen.Dataviz()
        .type('bar')
        .title('Topics created per day')
};

export const chartTwo = {
  operation: 'maximum',
  params: {
    event_collection: 'discourse-topic_created',
    target_property: 'topic.id',
    timeframe: 'this_year'
  },
  viz: new window.Keen.Dataviz()
        .title('Total topics')
};

export const chartThree = {
  operation: 'count',
  params: {
    event_collection: 'discourse-post_created',
    group_by: 'category.name',
    filters: [{
      property_name: 'category.name',
      operator: 'exists',
      property_value: true
    }],
    timeframe: 'this_14_days',
    interval: 'daily'
  },
  viz: new window.Keen.Dataviz()
        .type('bar')
        .stacked(true)
        .title('Posts created per day')
};

export const chartFour = {
  operation: 'maximum',
  params: {
    event_collection: 'discourse-post_created',
    target_property: 'post.id',
    timeframe: 'this_year'
  },
  viz: new window.Keen.Dataviz()
        .title('Total posts')
};


export const chartFive = {
  operation: 'maximum',
  params: {
    event_collection: 'discourse-user_created',
    target_property: 'user.id',
    filters: [],
    timeframe: 'this_10_days',
    interval: 'daily'
  },
  viz: new window.Keen.Dataviz()
        .title('Community member growth')
};

export const chartSix = {
  operation: 'maximum',
  params: {
    event_collection: 'discourse-user_created',
    target_property: 'user.id',
    timeframe: 'this_year'
  },
  viz: new window.Keen.Dataviz()
        .title('Total community members')
};

export const chartSeven = {
  operation: 'count',
  params: {
    event_collection: 'discourse-post_created',
    group_by: 'user.username',
    timeframe: 'this_week',
  },
  viz: new window.Keen.Dataviz()
        .type('horizontal-bar')
        .title('Most active users this week - new posts')
};

export const chartEight = {
  operation: 'count',
  params: {
    event_collection: 'discourse-post_created',
    group_by: 'user.username',
    timeframe: 'this_year',
  },
  viz: new window.Keen.Dataviz()
        .type('horizontal-bar')
        .title('Most active users all time - new posts')
};
