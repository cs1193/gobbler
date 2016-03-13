//= require angular-file-upload

var app = angular.module('admin', [ 'angularFileUpload', 'ngProgress' ]);

 app.config(function(ngProgressProvider){
        ngProgressProvider.setColor('firebrick');
        ngProgressProvider.setHeight('2px');
    });


	app.controller("productController",["$scope","$http","$filter","$timeout", "$upload" ,"ngProgress" ,function productController($scope,$http,$filter,$timeout,$upload,ngProgress){
		
		ngProgress.start();
		$scope.product={}
		$scope.editprodcuts = false
		$scope.product.details =[]
		$scope.postProduct=function postProduct(){
			ngProgress.start();
			$http({method: 'post',url: '/product/add',data: $scope.product})
			.success(function(data){
				console.log('saved')
				$scope.products.push(data)
				ngProgress.complete();
				$.howl ({
					type: "success"
					, title: 'Product cms'
					, content: 'Product Created Succesfully'
					, sticky: $(this).data ('sticky')
					, lifetime: 7500
					, iconCls: $(this).data ('icon')
				});
			})
			.error(function(data){
				console.log('error')
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

		$http({method: 'GET' , url: '/category/list'}).
		success(function(data){
			$scope.categories = data
			
		}).
		error(function(data){
			console.log('error')
		});

		$http({method: 'get', url: '/product/list'})
			.success(function(data){
			$scope.products = data
			ngProgress.complete();
		})
		.error(function(data){
			console.log('error')
		})

		$scope.addField=function addField(){
			console.log("added field")
			$scope.product.details.push({'key':'','value':''})
		}

		$scope.addFieldEdit=function addFieldEdit(){
			console.log("added field")
			$scope.productEdit.details.push({'key':'','value':''})
		}

		$scope.editEnable = function editEnable(id,index){
	        $scope.productEdit = $scope.products[index]
	        $scope.editprodcuts = true
	       $('#editEnable').modal()
	    	

    	}

		$scope.categoryEnable = function categoryEnable(id,index){
	        $scope.productEdit = $scope.products[index]
	        $scope.editprodcuts = true
	       $('#categoryEnable').modal()
	    	

    	}
		$scope.updateProduct = function updateProduct(mode){
			ngProgress.start();
	    	$http({method: 'PUT' , url: '/product/update',data: $scope.productEdit}).
	    	success(function(data){
	    		$('#editEnable').modal('hide')
	    		console.log('updated')
	    		ngProgress.complete();
	    		if(mode =='exit'){
	    			$scope.editprodcuts = false

	    		}
	    		$.howl ({
						type: "success"
						, title: 'Product cms'
						, content: 'Product Saved Succesfully'
						, sticky: $(this).data ('sticky')
						, lifetime: 7500
						, iconCls: $(this).data ('icon')
					});

	    		
	    	}).
	    	error(function(){
	    		console.log('error updating')
	    		$.howl ({
						type: "danger"
						, title: 'Product cms'
						, content: 'Error Saving Product'
						, sticky: $(this).data ('sticky')
						, lifetime: 7500
						, iconCls: $(this).data ('icon')
					});

    	}) 	
    	}
   		$scope.deleteEnable = function deleteEnable(id,index){
		   	$scope.productDelete = $scope.products[index]
		   	$scope.productDelete.ind = index 
		   	$('#deleteEnable').modal()
		    }

		$scope.deleteProduct = function deleteProduct(){
				ngProgress.start();
		    	$http({method: 'DELETE' , url: '/product/delete/'+$scope.productDelete.id}).
		    	success(function(data){
		    		$('#deleteEnable').modal('hide')
		    		$scope.products.splice($scope.productDelete.ind,1)
		    		ngProgress.complete();
		    	}).
		    	error(function(data){

		    	});
		}

	$scope.fileReaderSupported = window.FileReader != null;
	$scope.uploadRightAway = false;
	$scope.modelName = '';

	$http({method: 'GET' , url: '/product/images'}).
	success(function(data){
		$scope.imageFiles = data
		ngProgress.complete();
	}).
	error(function(data){
		console.log('error')
	});

	$scope.deleteImage = function deleteImage(id,index) {
		ngProgress.start();
		$http({method: 'DELETE', url: '/product/image/'+id}).
		success(function(data){
			$scope.imageFiles.splice(index,1)
			ngProgress.complete();
			
		}).
		error(function(data){
			console.log('delete error')
		})
	}

	$scope.makeDefault = function makeDefault(im_id,p_id) {
		$http({method: 'POST', url: '/product/image/makedefault',data:{product_id : p_id,image_id : im_id}}).
		success(function(data){
			$scope.imageFiles = data
			
		}).
		error(function(data){
			console.log(' error')
		})
	}

	$scope.hasUploader = function(index) {
		return $scope.upload[index] != null;
	};

	
	$scope.onFileSelect = function($files) {
		$scope.selectedFiles = [];
		$scope.progress = [];
		if ($scope.upload && $scope.upload.length > 0) {
			for (var i = 0; i < $scope.upload.length; i++) {
				if ($scope.upload[i] != null) {
					$scope.upload[i].abort();
				}
			}
		}
		$scope.upload = [];
		$scope.uploadResult = [];
		console.log($files[0].name)
		$scope.selectedFiles = $files;
		$scope.dataUrls = [];
		for ( var i = 0; i < $files.length; i++) {
			var $file = $files[i];
			if (window.FileReader && $file.type.indexOf('image') > -1) {
			  	var fileReader = new FileReader();
		        fileReader.readAsDataURL($files[i]);
		        function setPreview(fileReader, index) {
		            fileReader.onload = function(e) {
		                $timeout(function() {
		                	$scope.dataUrls[index] = e.target.result;
		                });
		            }
		        }
		        setPreview(fileReader, i);
			}
			$scope.progress[i] = -1;
			if ($scope.uploadRightAway) {
				$scope.start(0);
			}
		}
	}
	
	$scope.start = function(index) {
		ngProgress.start();
		$scope.progress[index] = 0;
		$scope.modelData = {modelName : $scope.modelName, product_id : $scope.productEdit.id }
		console.log($scope.modelData)
		console.log($scope.selectedFiles)
			$scope.upload[index] = $upload.upload({
				url : '/product/image',
				method: 'POST',
				
				data: $scope.modelData,
				/* formDataAppender: function(fd, key, val) {
					if (angular.isArray(val)) {
                        angular.forEach(val, function(v) {
                          fd.append(key, v);
                        });
                      } else {
                        fd.append(key, val);
                      }
				}, */
				file: $scope.selectedFiles[index],
				fileFormDataName: 'myFile'
			}).then(function(response) {
				$scope.uploadResult.push(response.data.result);
			 	
			 	$scope.imageFiles.push(response.data)

			 	console.log(response.data)

			 	ngProgress.complete();

			}, null, function(evt) {
				$scope.progress[index] = parseInt(100.0 * evt.loaded / evt.total);


			});

	}
		
}]);



	

	

	

