/**
 * Created by Administrator on 2017/2/27.
 */
angular.module('myapp')
    .config(function($stateProvider,$urlRouterProvider){
        //$urlRouterProvider.otherwise('/');
        $stateProvider
            .state('cact',{
                url:'/cact',
                templateUrl:'page/cact.html'
            })
    });