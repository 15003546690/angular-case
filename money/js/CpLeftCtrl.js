/**
 * Created by Administrator on 2017/3/2.
 */
angular.module('myapp')
    .controller('CpLeftCtrl',function($scope,$http){
        $http.post('lib/data.json')
            .success(function(data){
                console.log(data)
                $scope.data=data
            })
    })
    .directive('myCanvas', function ($timeout) {
        return {
            restrict: 'E',
            template:'<canvas id="canvas" width="60" height="60"></canvas>',
            replace: true,
            scope: {
                cvs: "="
            },
            controller: function ($scope) {
                //console.log($scope.cvs)
            },
            link: function (scope, ele, attr) {
                console.log(parseInt(scope.cvs.tenderSchedule)/100)
                var cvs=ele[0];
                var api=cvs.getContext('2d');
                api.beginPath();
                api.fillStyle='#ed5858';
                api.arc(30,30,23,0,Math.PI*2);
                api.closePath();
                api.fill();

                api.beginPath();
                api.strokeStyle='#F0E81F';
                api.lineWidth='4';
                api.arc(30,30,25,-Math.PI/2,Math.PI*2*parseInt(scope.cvs.annualRate)/100-Math.PI/2);
                api.stroke();
            }
        }
    })