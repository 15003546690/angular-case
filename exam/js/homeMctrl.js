angular.module('myapp')
    .controller('homeMctrl',function($scope,$http){
        /*$http.get('js/index.json')
            .success(function(data){
                console.log(data.data[0]);
                $scope.data=data
            });*/
        var swiper=new Swiper(".swiper-container",{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay : 1000,
            autoplayDisableOnInteraction:false,
            loop:true,
            zoom:true
        });
    })
    .controller('Mctro',function($scope,$http){
        $http.get('lib/index.json')
            .success(function(data){
                console.log(data.data[0]);
                $scope.data=data
            });
    });