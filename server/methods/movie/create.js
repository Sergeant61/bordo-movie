import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'movie.create',
  mixins: [isAdmin],
  validate: new SimpleSchema({
    movie: MovieSchema
  }).validator(),
  run: function(data){
    this.unblock();
    const { movie } = data;

    const id = Movie.insert(movie);
    return Movie.findOne({ _id: id});
  }
});