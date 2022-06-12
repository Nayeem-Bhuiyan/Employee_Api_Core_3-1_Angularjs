
app.controller('LoadAllEmployeeController', ['$scope', '$rootScope', '$location', '$routeParams', '$window', 'empCrudService', function ($scope, $rootScope, $location, $window, $routeParams, empCrudService) {
    $scope.Employees = [];

    function LoadAllEmployees() {
        $rootScope.loading = true;

        empCrudService.GetAll('/api/Employee').then(function (data) {
            $scope.Employees = data;
            $rootScope.loading = false;
        });
    }

    //Call LoadAllEmployees function to load data after document load successfully

    LoadAllEmployees();

    $scope.delete = (id) => {
        DeleteRecord(id)
    }


    function DeleteRecord(id) {
        $rootScope.loading = true;
        for (i in $scope.Employees) {
            if ($scope.Employees[i].id == id) {
                $scope.Employees.splice(i, 1);
                empCrudService.Remove('/api/Employee/' + id).then(function (data) { });
                $rootScope.loading = false;
            }
        }
    }


    $scope.GetEdit = (id, name, email, address, phone) => {

        $scope.Id = id;
        $scope.Name = name;
        $scope.Email = email;
        $scope.Address = address;
        $scope.Phone = phone;


        //$location.path("/EditEmployee/" + id);
    }



    $scope.PostEdit = function () {


        var Employee = {
            Id: $scope.Id,
            Name: $scope.Name,
            Email: $scope.Email,
            Address: $scope.Address,
            Phone: $scope.Phone,
        };



        if (Employee != null) {
            empCrudService.Insert("/api/Employee", Employee).then(data => {
                $rootScope.loading = false;
                for (i in $scope.Employees) {
                    if ($scope.Employees[i].id == Employee.Id) {
                        $scope.Employees.splice(i, 1);
                        $scope.Employees[i] = Employee;
                        $rootScope.loading = false;
                    }
                }
                LoadAllEmployees();
            })
        } else {

        }
    }


    $scope.resetForm = function () {
        $scope.Id = "";
        $scope.Name = "";
        $scope.Email = "";
        $scope.Address = "";
        $scope.Phone = "";
    };


    $scope.SelectedIdForDelete = [];
    $scope.GetSelectedId = (id) => {

        if ($scope.SelectedIdForDelete.indexOf(id) == -1) {
            $scope.SelectedIdForDelete.push(id);
        } else {
            $scope.SelectedIdForDelete.splice($scope.SelectedIdForDelete.indexOf(id), 1);
        }
    }

    $scope.DeleteMutipleEmployee = () => {


        for (let i = 0; i < $scope.SelectedIdForDelete.length; i++) {
            DeleteRecord($scope.SelectedIdForDelete[i]);
        }

        alert($scope.SelectedIdForDelete.length+" records deleted successfully done!!");


    }


}])

