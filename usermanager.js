var app = angular.module('admin',[]);

app.controller('userController',['$scope','$http','$filter',function userController($scope,$http,$filter){
	$scope.email = 'kannajune@gmail.com'

    $scope.getUserList = function getUserList(){
    	
    	$http({method: 'GET', url: '/manage/user/list'}).
    	success(function(data){
    		$scope.users = data;
    	}).
    	error(function(data){
    		console.log(data)
    	})

    }

    $scope.getUserList();
    $scope.editEnable = function editEnable(id,index){
    	$scope.currentEdit = $scope.users[index]

    	$('#editEnable').modal()

    }

    $scope.updateUser = function updateUser(){

    	$http({method: 'PUT' , url: '/manage/user/update',data: $scope.currentEdit}).
    	success(function(){
    		$('#editEnable').modal('hide')
    	}).
    	error(function(){

    	})
    }

    $scope.deleteEnable = function deleteEnable(id,index){
    	$scope.currentDelete = $scope.users[index]
    	$scope.currentDelete.ind = index 
    	$('#deleteEnable').modal()
    }

    $scope.deleteUser = function deleteUser(){
    	$http({method: 'DELETE' , url: '/manage/user/delete/'+$scope.currentDelete.id}).
    	success(function(data){
    		$('#deleteEnable').modal('hide')
    		$scope.users.splice($scope.currentDelete.ind,1)
    	}).
    	error(function(data){

    	});
    }
}]);

