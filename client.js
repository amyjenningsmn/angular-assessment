var app = angular.module('assessmentApp', []);

app.controller('MainController', function ($http){
  // if I were going to minify this file I would've included the string '$http' before function, enclosed in an array til the end of app.controller.
  var vm = this;

  vm.message = '';
  vm.messageList = [];
  vm.showingPrevious = false;

  vm.showMessage = function(){
    console.log(vm.message);
    vm.showingMessage = true;
    vm.shownMessage = vm.message;
    vm.messageList.push(vm.message);
    vm.message = '';
    if (vm.messageList.length > 1) {
      vm.showingPrevious = true;
    } else {
      vm.showingPrevious = false;
    }
  }
// end controller
})
