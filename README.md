# site-mirror
This is a small project that allows you to easily perform cross-browser and cross-device testing with real-time synchronisation. It's based on browser-sync which does all the heavy lifting but provides an easy gulp task that allows you to specify the name of any sire you want to mirror from your terminal without having to make any changes to the source code to run it.

## Getting started
To get going with this package you'll first need to make sure you have all the required dependencies installed on your machine. The main things you'll need are:
1. [Node and npm](https://nodejs.org/en/) - to install the package.json file for this project. [Node]
2. [Gulp](http://gulpjs.com/) - a task runner that is used to run [browser-sync](https://www.browsersync.io/) which is where the magic happens

## Installing the dependencies
### Node and NPM
The first thing you'll need to do is install node onto your machine which will also install the Node Package Manager(npm). To do this head over to the [Node website](https://nodejs.org/en/) and download node for your Operating System (you should use the version that is recommended for most users).
This will download a package to your downloads directory which you need to run when it's completed downloading. Follow the onscreen prompts and complete the installation process to your machine.
Once this is all done you should have Node and NPM installed on your machine! To verify this open your Terminal and type in `node -v` and/or `npm -v`. If node has been installed both these commands should then print out the version of node/npm installed on your machine.
### Gulp
Once you've got node and npm installed the next step is to install the Gulp task runner onto your machine. Gulp is the task runner that runs the browser-sync task to mirror any url that you specify. To do this, open up your terminal and type in: `npm install -g gulp`.
This installs gulp globally on your machine. To check that its worked, type in `gulp -v` which should return the version of gulp that's installed.

## Installing the project
Now that you've got all the required dependencies on your machine you can get going with using the site mirroring! To do this you can either download this project or use the Git clone command to install the project locally onto your machine. Once you've done this, change directory into the folder that your project is in and run the `npm install` command. This will install all of the required dependencies for this project for you which are a local version of gulp, gulp-prompt and browser-sync. Once the installation is successfully completed, the project will automatically run the gulp task to first ask you which site you want to mirror and then beginning the mirroring task.
Note that you only need to run `npm install` the first time you are installing this project. For future usage you can follow the instructions below.

## Using the project
It's really simple (I hope)! From your terminal, make sure that you are in the local folder that you've saved the project into and then run `gulp mirror`. Once you've done this you will be asked to enter the name of the site that you would like to mirror. Please enter the full url of the site and hit enter.
Next the task will begin the browser-sync process to proxy this site which will open up in a new browser window for you. If successful you should see the site that you entered, huzzah!
Now for the fun part, synchronising this across multiple devices! If you have a look at your terminal, you should see some additional information printed out by browser-sync. Under the Access URLs you should see an address printed out next to the **External** line. This address can be used on another device et voila you can now have multiple devices that are mirroring the same site and all of which will synchronise automatically if you interact with any of them!
