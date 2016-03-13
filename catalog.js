//= require angular-dragdrop.min.js
//= require jquery-ui-1.10.4.custom.min.js

var app =  angular.module("admin",['ngDragDrop']);

	app.controller("catalogController",["$scope","$http","$filter",function catalogController($scope,$http,$filter){

		$scope.stores = []
		$scope.products = []
		$scope.catalogs = []
		$scope.in_store = []
		$scope.to_delete = {}
		$scope.currentIndex = 999
		$scope.currentItem = 999
		$scope.priceShow = false

		$http({method: "GET", url:'/catalog/load'}).
		success(function(data){
			$scope.products = data['products']
			$scope.stores = data['stores']
			$scope.catalogs = data['catalogs']
			$scope.in_store = data['in_store']
			console.log(data)
			console.log("Products and stores loaded")
		}).
		error(function(data){
			console.log("Load failed")
		});
		$http({method: 'GET' , url: '/product/images'}).
			success(function(data){
				$scope.imageFiles = data
				ngProgress.complete();
			}).
			error(function(data){
				console.log('error')
			});

		$scope.currentStore = function currentStore(index){
			$scope.currentIndex = index
		}

		$scope.editingItem = function editingItem(index){
			$scope.currentItem = index
			$scope.priceShow = true


			console.log($scope.catalogs[$scope.currentIndex][index])
		}

		$scope.removeItem = function removeItem(index, store){
			$scope.currentItem = index
			$scope.storeItem = store

			$http({method:'DELETE', url:'catalog/delete/' + $scope.storeItem + '/' + $scope.currentItem}).
			success(function(){
				$scope.catalogs[index].splice(index,1)
				$scope.in_store[index].splice(index,1)
			}).
			error(function(){
				console.log("Delete Error")
			});
		}

		$scope.convertProduct = function convertProduct(){

			index = $scope.currentIndex
			l = $scope.in_store[index].length
			temp = $scope.in_store[index][l-1]

           	l1 = $scope.catalogs[index].length
           	if(l1 == 0)
           	{
           	$scope.catalogs[index] = []
            }
           	$scope.catalogs[index][l1] = {'product_id': temp.id, 'store_id': $scope.stores[index].id, 'variations': {'small':0,'regular':0,'large':0}}

			console.log($scope.catalogs)
		};

		$scope.saveToCatalog = function saveToCatalog(index){


			$http({method:'PUT', url:'catalog/update', data:$scope.catalogs}).
			success(function(data){
				console.log(data)
			}).
			error(function(){
				console.log("Catalog Save Error")
			})
		}

		$scope.deleteItem = function deleteItem(){

			index = $scope.currentIndex
			temp = {}
			for(i in $scope.catalogs[index])
			{
				if($scope.catalogs[index][i].product_id == $scope.to_delete.id)
				{
					temp = $scope.catalogs[index][i]
					item_index = i
				}
			}
			$http({method:'PUT', url:'catalog/delete', data:temp}).
			success(function(){
				$scope.catalogs[index].splice(item_index,1)
				$scope.in_store[index].splice(item_index,1)
			}).
			error(function(){
				console.log("Delete Error")
			});

			
		}

		$scope.savePrice = function savePrice(){
			console.log($scope.catalogs[$scope.currentIndex][$scope.currentItem])

			index = $scope.currentIndex
			item = $scope.currentItem
			temp = $scope.catalogs[index][item]

			$http({method:'PUT', url:'catalog/saveprice',data:temp}).
			success(function(data){
				console.log(data)
			}).
			error(function(){
				console.log("Failed to save prices")
			});
		}


	}]);
