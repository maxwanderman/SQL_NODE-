var app = angular.module('myApp', []);

app.controller('PersonController', ['$http', function($http){
  var person = this;
  var things = [];

  person.name = '';
  person.address = '';

  person.getData = function(){
    $http.get('/people').then(function(response){
      console.log(response);
      person.things = response.data;
      console.log('person.things', person.things);
    });
  };

  person.sendData = function() {
    $http.post('/people',
      {name: person.name, address: person.address,
      city: person.city, state: person.state, zip_code: person.zip_code})
      .then(function(serverResponse){
        console.log('this: ', this);
        console.log('person: ', person);
        console.log(serverResponse);
        person.getData();
      });
  };
  person.getData();
}]);
