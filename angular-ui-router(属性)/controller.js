/**
 * Created by Administrator on 2017/2/21.
 */
angular.module('myapp')
    .controller('homeCtrl',function($scope,$state){
        console.log($state.current.data);
        $scope.golist=function(){
            $state.go('list',{
                id:222,
                name:'chaogege'
            })
        }
    })
    .controller('listCtrl',function($stateParams){
        console.log($stateParams)
    })
    .controller('detalCtrl',function(){

    });