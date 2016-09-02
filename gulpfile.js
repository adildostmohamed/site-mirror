//require dependencies
var gulp = require('gulp');
var bs = require('browser-sync');
var prompt = require('gulp-prompt');

//declare a global variable that will
var site;

//create a gulp task based on browser sync that creates proxies a target which is set to the global site var
gulp.task('sync', function(){
  //in the proxy value put in the full url of the website you would like to sync with (can be a local host or a live site)
  bs.init({
    proxy: {
      target: site
    }
  });
});

//create a gulp task using the gulp-prompt plugin which firsts prompts the user for the name of the site and then runs a callback function. In the callback we set the value of the global site variable to the response from the user and then call the mirror task
gulp.task('mirror', function(){
  gulp.src('').pipe(prompt.prompt({
    type: 'input',
    name: 'site',
    message: 'Which site would you like to mirror? (Please include the full path of the url)'
  }, function(res){
    site = res.site;
    gulp.start('sync');
  }))
  .pipe(gulp.dest(''));
});
