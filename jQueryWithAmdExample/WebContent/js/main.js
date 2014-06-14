/**
 * 
 */

requirejs.config({
	"baseUrl": "lib",
    "paths": {
      "app":"../js/app",
      "jquery": "../js/lib/jquery-1.10.2"
    }
});

requirejs(["app/app"]);