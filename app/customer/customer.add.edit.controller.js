(function () {
    'use strict';

    angular
        .module('customerapp')
        .controller('CustomerManageController', CustomerManageController);

      CustomerManageController.$inject = ['customerDataService','$location','$window','$routeParams', 'selectedCustomer'];

      function CustomerManageController(customerDataService,$location,$window,$routeParams,selectedCustomer) {
        /* jshint validthis: true */
        var vm = this;
       
        vm.customers = new Array();          
        vm.selectedCustomer = selectedCustomer;     
        vm.mode = $routeParams.mode;
        vm.title = vm.mode? 'Add':'Edit';
        
          /* Methods */
        vm.gotoCustomerList = gotoCustomerList;
        vm.addCustomer = addCustomer;
       
       
         function addCustomer() {
           var customer = {
             index: vm.selectedCustomer.getIndex(),
             firstName: vm.selectedCustomer.getFistName(),
             lastName: vm.selectedCustomer.getLastName(),
             email: vm.selectedCustomer.getEmail(),
             phoneNumber: vm.selectedCustomer.getPhoneNumber(),
             addrLine1:vm.selectedCustomer.getAddrLine1(),
             addrLine2: vm.selectedCustomer.getAddrLine2(),
             city: vm.selectedCustomer.getCity(),
             state: vm.selectedCustomer.getState(),
             zipcode: vm.selectedCustomer.getZipCode()                  
           }                
           if(vm.mode == 1){
               customerDataService.addCustomer(customer);
            }else {
                customerDataService.editCustomer(customer);
            }
            /* DEMO: History access */
            $window.history.back();
           
        }
             
        function gotoCustomerList() {
            vm.selectedCustomer.setFirstName("");
            vm.selectedCustomer.setLastName("");
            vm.selectedCustomer.setEmail("");
            vm.selectedCustomer.setPhoneNumber("");
            vm.selectedCustomer.setAddrLine1("");
            vm.selectedCustomer.setAddrLine2("");
            vm.selectedCustomer.setCity("");
            vm.selectedCustomer.setState("");
            vm.selectedCustomer.setZipCode("");      
            
         /* DEMO: History access */
            $window.history.back();
        }
      
    }
})();