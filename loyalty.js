var app =  angular.module("admin",[]);

	app.controller("loyaltyController",["$scope","$http","$filter",function loyaltyController($scope,$http,$filter){

		$scope.searchCustomer=function searchCustomer(){
			$http({method: 'post',url: '/loyalty/search',data: $scope.customer})
			.success(function(data){
				if(data.found == false){
					console.log('not found')
					$scope.loyaltyCreate = false
					$scope.loyaltyCreateNew = true

				}else{
					$scope.foundCustomer = data	
					console.log('Found')
					$scope.loyaltyCreateNew = false
					$scope.loyaltyCreate = true
				}
				
			})
			.error(function(data){
				console.log('error')
			})
		}
		$http({method: 'get', url: '/customer/list'})
		.success(function(data){
			$scope.customers = data
		})
		.error(function(data){
			console.log('error')
		})
		$scope.postCustomer=function postCustomer(){
			$http({method: 'post',url: '/loyalty/update',data: $scope.foundCustomer})
			.success(function(data){
				console.log('saved')
				$scope.foundCustomer = data

			})
			.error(function(data){
				console.log('error')
			})
		}
		$scope.postNewCustomer=function postNewCustomer(){
			$http({method: 'post', url: '/loyalty/add', data: $scope.newCustomer})
			.success(function(data){
				console.log('save new')
				$scope.newCustomer.push(data)
			})
			.error(function(data){
				console.log('error saving')
			})
		}


}]);