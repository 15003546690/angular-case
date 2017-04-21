angular.module('myapp')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'page/home.html',
                controller:'homeMctrl'
            })
            .state('search',{
                url:'/search',
                templateUrl:'page/search.html',
                controller:'searchMctrl'
            })
            .state('name',{
                url:'/name',
                templateUrl:'page/name.html'
            })
            .state('download',{
                url:'/download',
                templateUrl:'page/download.html'
            })
            .state('my',{
                url:'/my',
                templateUrl:'page/my.html'
            })
    });