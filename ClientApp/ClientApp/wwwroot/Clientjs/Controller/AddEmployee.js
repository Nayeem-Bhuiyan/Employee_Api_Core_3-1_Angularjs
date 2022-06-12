
app.controller('AddEmployeeController', ['$scope', '$rootScope', '$location', '$routeParams', 'empCrudService', function ($scope, $rootScope, $location, $routeParams, empCrudService) {

  

    $scope.saveRecord = function () {


        var Employee = {
            Id: $scope.Id,
            Name: $scope.Name,
            Email: $scope.Email,
            Address: $scope.Address,
            Phone: $scope.Phone,
        };


       
        if (Employee!=null) {
            empCrudService.Insert("/api/Employee", Employee).then(data => {
    
                /*$location.path("Index");*/
                if (data.status=200) {
                    alert("Add New Employee Successfull");
                    location.href = "/Index"
                }
            })
            
        } else {
            alert("Invalid");
        }

        
    }







    $scope.resetForm = function () {
        $scope.Id = "";
        $scope.Name = "";
        $scope.Email = "";
        $scope.Address = "";
        $scope.Phone = "";
    };

}])

