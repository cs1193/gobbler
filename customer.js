var app =  angular.module("admin",[]);
	app.controller("customerController",["$scope","$http","$filter",function customerController($scope,$http,$filter){

		$scope.searchCustomer=function searchCustomer(){
			$http({method: 'post',url: '/customer/search',data: $scope.customer})
			.success(function(data){
				console.log('saved')
				$scope.foundCustomer = data

				$http({method: 'get', url: '/customer/account/'+$scope.foundCustomer.id})
				.success(function(data){
					$scope.foundCustomerAccount = data
					console.log('savsdfed')
				
				})
				.error(function(data){
					console.log('error')
			
				})


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

		$scope.rechargeCustomer=function rechargeCustomer(){
			$http({method: 'post',url: '/customer/recharge_card',data: $scope.foundCustomerAccount})
			.success(function(data){
				console.log('saved')
				$scope.foundCustomerAccount = data

				if($scope.foundCustomerAccount.status == 'error'){
					alert('invalid recharge amount')
				}

			})
			.error(function(data){
				console.log('error')
			})
		}


}]);