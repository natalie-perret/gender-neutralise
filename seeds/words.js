exports.seed = function (knex, Promise) {
  return knex('words').del()
    .then(function () {
      return Promise.all([
        knex('words').insert({bias: 'chairman', neutral: 'chair, chairperson', notes:""}),
        knex('words').insert({bias: 'postman', neutral: 'mail carrier, postie', notes:"Women have been transporting mail in the United States since the late 1800s. I reckon it's about time we stop referring to our local postie as 'the postman'."}),
        knex('words').insert({bias: 'fisherman', neutral: 'fisher', notes:''}),
        knex('words').insert({bias: 'seaman', neutral: 'seafarer', notes:''}),
        knex('words').insert({bias: 'salesman', neutral: 'salesperson', notes:''}),
        knex('words').insert({bias: 'fireman', neutral: 'firefighter', notes: "In 2016, there were only 57 female career firefighters in New Zealand, making up 3 percent of paid fire fighters in the Fire Service. But there's good news: the proportion of women recruits has jumped from 1 percent to 17 per cent in the past three years."})
      ]);
    });
};
