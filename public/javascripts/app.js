angular.module('JuanPauloMeApp', [])
.controller('JuanPauloMeCtrl', function ($scope, $http) {
  $http.post("/flickrapi", {})
  .success(function(data, status, headers, config) {
    // http://stackoverflow.com/questions/2380019/generate-8-unique-random-numbers-between-1-and-100
    arr = []
    while(arr.length < 8){
      var randomnumber=Math.ceil(Math.random()*49)
      var found=false;
      for(var i=0;i<arr.length;i++){
        if(arr[i]==randomnumber){found=true;break}
      }
      if(!found)arr[arr.length]=randomnumber;
    }
    $scope.photos = []
    angular.forEach(arr, function(value, key) {
      this.push(data.photos[value]);
    }, $scope.photos);
  }).error(function(data, status, headers, config) {
      $scope.status = status;
  });
});
