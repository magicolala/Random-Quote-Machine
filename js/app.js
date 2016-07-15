var app = angular.module('quote', ['720kb.socialshare']);

app.controller("QuoteCtrl", function($scope, $http) {
  $http.get("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", {
    headers: {"Access-Control-Allow-Origin": "*"}
}).
    success(function(data, status, headers, config) {
      $scope.rep = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

});
