/**
 * Created by Administrator on 2017/3/2.
 */
angular.module('myapp')
    .controller('chanpinCtrl',function($scope,$state){
        $state.go('chanpin.left');
        $scope.toggle=function(){
            $scope.flag=!$scope.flag;
                var flt=document.querySelector('.tier');
//var p=flt.querySelectorAll('p');
                console.log(flt);


            /*for(var i=0;i<p.length;i++){
             p[i].onclick=function(){
             alert(1)
             }
             }*/
        }

    });