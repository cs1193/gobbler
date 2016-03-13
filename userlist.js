var app = angular.module('admin',[]);

app.controller('userlistController',['$scope','$http','$filter',function userlistController($scope,$http,$filter){
    
    $scope.getAllCustomerList = function getAllCustomerList(){
    	
    	$http({method: 'GET', url: '/user/list/all_customers'}).
    	success(function(data){
    		$scope.customers = data;
    	}).
    	error(function(data){
    		console.log(data)
    	})

    }
    $scope.getAllCustomerList();

    $scope.getTopUpList = function getTopUpList(){
    	
    	$http({method: 'GET', url: '/user/list/top_up'}).
    	success(function(data){
    		$scope.users = data;
    	}).
    	error(function(data){
    		console.log(data)
    	})

    }
    $scope.getTopUpList();
    
    $scope.getLoyaltyList = function getLoyaltyList(){
    	
    	$http({method: 'GET', url: '/user/list/loyalty'}).
    	success(function(data){
    		$scope.users = data;
    	}).
    	error(function(data){
    		console.log(data)
    	})

    }
	$scope.getLoyaltyList();
}]);

