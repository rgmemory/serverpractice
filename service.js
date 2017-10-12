angular.module('app').service('service', function($http){
  this.test = "service test";

  var data =   [
    {
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ];

  this.getCards = function(){
    return $http({
      method: 'GET',
      url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'

    })
  }

  this.getData = function(){
    return data;
  }

  this.getNumbers = function(){
    return $http({
      method: 'GET',
      url: 'localhost:3000/get'
    })
  }


})
