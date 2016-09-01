var gulp = require('gulp');
var bs = require('browser-sync');

gulp.task('mirror', function(){
  //in the proxy value put in the full url of the website you would like to sync with (can be a local host or a live site)
  bs.init({
    proxy: {
      target: "https://www.google.co.uk"
    }
  });
});
