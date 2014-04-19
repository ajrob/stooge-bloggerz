'use strict';

angular.module('stoogeBloggerzApp')
  .service('Authors', function Authors(Blog) {
  	return {
  		getAuthors: function(){
  			return ["All", "Larry", "Curly", "Moe"];
  		}
  	}
  });
