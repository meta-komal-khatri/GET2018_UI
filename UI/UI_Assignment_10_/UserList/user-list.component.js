'use strict';
angular.
  module('userList').
  component('userList', {
    templateUrl:'UserList/user-list.template.html',
    controller:function UserListController($scope,$http){
        var self= this;
        
        $http.get('http://localhost:3000/user').then(function(response){
        self.user = response.data;
        });
        $scope.postData=function(){
            $http({
                method:'POST',
                url:'http://localhost:3000/user',
                data: $scope.user,
                dataType:'json'
            });

            window.location.reload();
        };
    // function userController($scope, $http) {

    //     var request = {
    //         method: 'get',
    //         url: 'user.json',
    //         dataType: 'json',
    //         contentType: "application/json"
    //     };

    //     $scope.arrBirds = new Array;

    //     $http(request)
    //         .success(function (jsonData) {
    //             $scope.arrBirds = jsonData;
    //             $scope.list = $scope.arrBirds;
    //         })
    //         .error(function () {

    //         });
    }
});