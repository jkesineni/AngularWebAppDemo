(function () {
    'use strict';

    angular
        .module('customerapp')
        .controller('CustomerListController', CustomerListController);

      CustomerListController.$inject = ['customerDataService','$location', 'selectedCustomer' ];

      function CustomerListController(customerDataService,$location,selectedCustomer) {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'Custmer Record Management Demo';
        vm.customers = [];
        vm.selectedCustomer = selectedCustomer;
    
        /* Methods */  
        vm.manageCutomer = manageCutomer;
        vm.deleteCustomer = deleteCustomer;
        vm.editCustomer = editCustomer;
             
        activate();

        function activate() {
           return getCustomers();          
        }
        
        function getCustomers() {
            vm.customers = customerDataService.getCustomers();
            return ;            
        }
        
         function deleteCustomer(index){
             vm.customers = customerDataService.deleteCustomer(index);
             return;
         }
          
          function editCustomer(index){
              vm.selectedCustomer.setIndex(index);
              vm.selectedCustomer.setFirstName(vm.customers[index].firstName);
              vm.selectedCustomer.setLastName(vm.customers[index].lastName);
              vm.selectedCustomer.setEmail(vm.customers[index].email);
              vm.selectedCustomer.setPhoneNumber(vm.customers[index].phoneNumber);
              vm.selectedCustomer.setAddrLine1(vm.customers[index].addrLine1);
              vm.selectedCustomer.setAddrLine2(vm.customers[index].addrLine2);
              vm.selectedCustomer.setCity(vm.customers[index].city);
              vm.selectedCustomer.setState(vm.customers[index].state);
              vm.selectedCustomer.setZipCode(vm.customers[index].zipcode);
              
               /* Demo: Sending Route parameters */
              $location.path('/managecustomer').search('mode', 0);
          }
          
     
        function manageCutomer()
        { /* Demo:  Sending Route parameters */
          $location.path('/managecustomer').search('mode', 1);
        }
      
    }
})();