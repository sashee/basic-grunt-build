angular.module('demoApp', [])
    .constant("S3",
    development?
    {
        "url": "Development S3 URL"
    }:
    {
        "url": "Production S3 URL"
    }

)
    .controller('MainCtrl', ['$scope','S3',function ($scope,S3) {
        $scope.s3url=S3.url;
    }])
;