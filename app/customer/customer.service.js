(function () {
    'use strict';

    angular
        .module('customerapp')
        .factory('customerDataService', customerDataService);

    customerDataService.$inject = ['$http','$window'];

    function customerDataService($http,$window) {
        var customers = new Array();
        var service = {
            getCustomers: getCustomers,
            addCustomer: addCustomer,
            deleteCustomer: deleteCustomer,
            editCustomer: editCustomer
        };

        return service;

        function getCustomers() {
          var temp = window.localStorage.getItem('customers2');
          if(temp != 'undefined') {
            this.customers =  JSON.parse(temp);
          }      
          return this.customers;            
        }
        
        function deleteCustomer(index){
          var temp = window.localStorage.getItem('customers2');
          if(temp != 'undefined') {
            this.customers =  JSON.parse(temp);
          }      
          if(this.customers != null) {
              this.customers.splice(index, 1) ; 
          }else {
                        
          }
          $window.localStorage && $window.localStorage.setItem('customers2', JSON.stringify(this.customers));
            
          return this.customers;     
        }
        
        function editCustomer(customer){
          var temp = window.localStorage.getItem('customers2');
          if(temp != 'undefined'){
               this.customers =  JSON.parse(temp);
          }      
          if(this.customers != null) {
            this.customers[customer.index] = customer ; 
          }else {
                      
          }
          $window.localStorage && $window.localStorage.setItem('customers2', JSON.stringify(this.customers));
           return;    
        }
       
        function addCustomer(customer){            
            var temp = window.localStorage.getItem('customers2');
            if(temp != 'undefined'){
              this.customers =  JSON.parse(temp);
            }      
            if(this.customers != null){
               this.customers.push(customer) ; 
             }else {
                this.customers = new Array();
                this.customers.push(customer) ;
            }
            $window.localStorage && $window.localStorage.setItem('customers2', JSON.stringify(this.customers));
        }
        
    }
})();