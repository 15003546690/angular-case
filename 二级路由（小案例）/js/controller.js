/**
 * Created by Administrator on 2017/2/27.
 */
angular.module('myapp')
    .controller('Mctro',function($scope,$http){
        $http.get('js/index.json')
            .success(function(data){
                console.log(data.data[0]);
                $scope.data=data
            });
    })