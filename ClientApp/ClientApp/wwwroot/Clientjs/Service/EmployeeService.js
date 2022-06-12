
app.factory("empCrudService",['$rootScope', '$location', '$http', function ($rootScope, $location, $http){
    var responseService = {};
    var rootUrl = "https://localhost:44335";
    // get all data from database
    responseService.GetAll = function (getUrl) {
        var promise = $http({
            method: 'GET',
            url: rootUrl+getUrl
        })
            .then(function (response) {
                return response.data;
            },
                function (response) {
                    return response.data;
                });
        return promise;
    };


    // get single record from database
    responseService.GetSingle = function (getUrl) {

        var promise = $http({
            method: 'GET',
            url: rootUrl+getUrl
        })
            .then(function (response) {
                return response.data;
            },
                function (response) {
                    return response.data;
                });
        return promise;
    };

    // post the data from database
    responseService.Insert = function (postUrl, modelObject) {
        var promise = $http({
            method: 'POST',
            url: rootUrl+postUrl,
            data: modelObject
        })
            .then(function (response) {
                return response.statusText;
            },
                function (response) {
                    return response.statusText;
                });

        return promise;
    };


    // put the data from database
    responseService.Update = function (putUrl, Modelobject) {
        var promise = $http({
            method: 'PUT',
            url: rootUrl + putUrl,
            data: Modelobject
        })
            .then(function (response) {
                return "Updated";
                // return response.statusText + ' ' + response.status + ' ' + response.data;
            },
                function (response) {
                    return response.statusText + ' ' + response.status + ' ' + response.data;
                });

        return promise;
    };

    // delete the data from database
    responseService.Remove = function (deleteUrl) {
        var promise = $http({
            method: 'DELETE',
            url: rootUrl+deleteUrl
        })
            .then(function (response) {
                // return "Deleted";
                return response.statusText + ' ' + response.status + ' ' + response.data;
            },
                function (response) {
                    return response.statusText + ' ' + response.status + ' ' + response.data;
                });

        return promise;
    };


    responseService.Delete = function (deleteUrl) {
        var promise = $http({
            method: 'POST',
            url: rootUrl+deleteUrl
        })
            .then(function (response) {
                // return "Deleted";
                return response.statusText + ' ' + response.status + ' ' + response.data;
            },
                function (response) {
                    return response.statusText + ' ' + response.status + ' ' + response.data;
                });

        return promise;
    };

    return responseService;
}]);