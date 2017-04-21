/**
 * Created by Administrator on 2017/2/25.
 */
angular.module('myapp')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('otherwise',{
                url:'/',
                templateUrl:'page/login.html'
            })
            .state('home',{
                url:'/home',
                templateUrl:'page/home.html'
            })

});
