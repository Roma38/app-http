ajaxApp.controller('PostsController',
  function PostController($scope, $http){
    
    $scope.getPosts = function() {
      $http({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts'})
        .then(function succes(response) {          
          $scope.posts = response.data;
          $scope.response = response.data;
          console.log($scope.posts);
      });
    }

    var postData = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    var putData = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    
    /* $http.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(function succes(response) {
        console.log(response);
    }); */

    $scope.addPost = function() {
      $http.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(function succes(response) {
          $scope.response = response.data;
          console.log(response);
        });
    }

    $scope.editPost = function() {
      $http.put('https://jsonplaceholder.typicode.com/posts/1', putData)
        .then(function succes(response) {
          $scope.response = response.data;
          console.log(response);
        })
    }

    $scope.patch = function() {
      var config = {
        method: 'PATCH',
        data: { title: 'foo'},
        url: 'https://jsonplaceholder.typicode.com/posts/1'
      };
      $http(config).then(function succes(response) {
        $scope.response = response.data;
      })
    }
    
    $scope.delPost = function() {
      $http.delete('https://jsonplaceholder.typicode.com/posts/1');
    }
  })