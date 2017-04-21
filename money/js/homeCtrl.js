/**
 * Created by Administrator on 2017/3/2.
 */
angular.module('myapp')
.controller('homeCtrl',function($scope,$http){
        /*$http.post('lib/data.json')
            .success(function(data){
                console.log(data)
            });*/
        var swiper=new Swiper(".swiper-container",{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay : 1000,
            autoplayDisableOnInteraction:false,
            loop:true,
            zoom:true
        });
    });