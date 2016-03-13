var app = angular.module('admin',[]);

app.controller('categoryController',['$scope','$http','$filter',function categoryController($scope,$http,$filter){
	$scope.category ={parent_id: ''}
	$http({method: 'GET' , url: '/category/list'}).
		success(function(data){
			$scope.categories = data
		}).
		error(function(data){
			console.log('error')
		});

	$scope.postCategory = function postCategory(){
		$http({method: 'POST', url: '/category/add' , data: $scope.category}).
		  success(function(data, status, headers, config) {
		
		     $scope.categories.push(data)
		     $scope.category = {}
		     	$.howl ({
					type: "success"
					, title: 'Product cms'
					, content: 'Category Created Succesfully'
					, sticky: $(this).data ('sticky')
					, lifetime: 7500
					, iconCls: $(this).data ('icon')
				});
		    
		  }).
		  error(function(data, status, headers, config) {
		    $.howl ({
					type: "danger"
					, title: 'Product cms'
					, content: 'Error Category Creating'
					, sticky: $(this).data ('sticky')
					, lifetime: 7500
					, iconCls: $(this).data ('icon')
				});
		  });
	};

}]);