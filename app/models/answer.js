import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  subject: DS.attr(),
  category: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
