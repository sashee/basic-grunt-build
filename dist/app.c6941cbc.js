console.log("js1.js loaded"),console.log("js2.js loaded"),angular.module("demoApp",[]).constant("S3",development?{url:"Development S3 URL"}:{url:"Production S3 URL"}).controller("MainCtrl",["$scope","S3",function(a,b){a.s3url=b.url}]);