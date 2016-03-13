
var app = angular.module('admin', ['ngProgress' ]);

 app.config(function(ngProgressProvider){
       
        ngProgressProvider.setColor('firebrick');
        ngProgressProvider.setHeight('2px');
    });

	app.controller("storeController",["$scope","$http","$filter","ngProgress" ,function storeController($scope,$http,$filter,ngProgress){

		ngProgress.start();
		$scope.store={}
		$scope.editstores = false
		$scope.store.delivery_locality =[]
		$scope.postStore=function postStore(){
			$http({method: 'post',url: '/store/add',data: $scope.store})
			.success(function(data){
				console.log('saved')
				$scope.stores.push(data)
				ngProgress.complete();
				$.howl ({
					type: "success"
					, title: 'Store cms'
					, content: 'Store Created Succesfully'
					, sticky: $(this).data ('sticky')
					, lifetime: 7500
					, iconCls: $(this).data ('icon')
				});
			})
			.error(function(data){
				console.log('error');
				$.howl ({
					type: "danger"
					, title: 'Product cms'
					, content: 'Error Product Creating'
					, sticky: $(this).data ('sticky')
					, lifetime: 7500
					, iconCls: $(this).data ('icon')
				});
			})
		}
		$http({method: 'get', url: '/store/list'})
		.success(function(data){
			$scope.stores = data
			ngProgress.complete();
		})
		.error(function(data){
			console.log('error')
		})

		$scope.addField=function addField(){
			console.log("added field")
			$scope.store.delivery_locality.push({'key':''})
		}

		$scope.addFieldEdit=function addFieldEdit(){
			console.log("added field")
			$scope.storeEdit.delivery_locality.push({'key':''})
		}

		$scope.editEnable = function editEnable(id,index){
	        $scope.storeEdit = $scope.stores[index]

	    	$('#editEnable').modal()
	    	 $scope.editstores = true

    	}

		$scope.updateStore = function updateStore(mode){

	    	$http({method: 'PUT' , url: '/store/update',data: $scope.storeEdit}).
	    	success(function(data){
	    		$('#editEnable').modal('hide')
	    		console.log('updated')
	    		ngProgress.complete();
	    		if(mode =='exit'){
	    			$scope.editstores = false

	    		}
	    		$.howl ({
						type: "success"
						, title: 'Store cms'
						, content: 'Store Saved Succesfully'
						, sticky: $(this).data ('sticky')
						, lifetime: 7500
						, iconCls: $(this).data ('icon')
					});
	    		
	    	}).
	    	error(function(){
	    		console.log('error updating')
	    		$.howl ({
						type: "danger"
						, title: 'Store cms'
						, content: 'Error Saving Store'
						, sticky: $(this).data ('sticky')
						, lifetime: 7500
						, iconCls: $(this).data ('icon')
					});


    	}) 	
    	}
   		$scope.deleteEnable = function deleteEnable(id,index){
		   	$scope.storeDelete = $scope.stores[index]
		   	$scope.storeDelete.ind = index 
		   	$('#deleteEnable').modal()
		   	ngProgress.complete();
		    }

		    $scope.deleteStore = function deleteStore(){
		    	$http({method: 'DELETE' , url: '/store/delete/'+$scope.storeDelete.id}).
		    	success(function(data){
		    		$('#deleteEnable').modal('hide')
		    		$scope.stores.splice($scope.storeDelete.ind,1)
		    		ngProgress.complete();
		    		$.howl ({
						type: "success"
						, title: 'Store cms'
						, content: 'Store Saved Succesfully'
						, sticky: $(this).data ('sticky')
						, lifetime: 7500
						, iconCls: $(this).data ('icon')
					});
		    	}).
		    	error(function(data){

		    		$.howl ({
						type: "danger"
						, title: 'Store cms'
						, content: 'Error Saving Store'
						, sticky: $(this).data ('sticky')
						, lifetime: 7500
						, iconCls: $(this).data ('icon')
					});
		    	});
		}

}]);