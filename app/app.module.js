    (function () {
        'use strict';

        angular
            .module('customerapp', ['ngAnimate', 'ngRoute'])
            .config(routeConfig)
            .factory('selectedCustomer', selectedCustomer)
            .value('baseUrl', 'http://services.groupkt.com/')
                   
        routeConfig.$inject = ['$routeProvider'];

        function routeConfig($routeProvider) {
            $routeProvider
                .when('/',{ 
                    templateUrl: 'app/customer/customer.list.html', 
                    title: 'Customers'})
                .when('/customers',{ 
                    templateUrl: 'app/customer/customer.list.html', 
                    title: 'Customers'})
                .when('/managecustomer',{
                       templateUrl: 'app/customer/customer.add.edit.html', 
                       title: 'Manage Customer'})
                .otherwise({ redirectTo: '/' });
            
        }
       
        
        /* Global Instance of Selected Customer Object 
           NOTE: This can go into separate file*/
        selectedCustomer.$inject = [];
        
        function selectedCustomer()
        {
          var index = "";
          var firstName = "";
          var lastName = "";
          var email = "";
          var phoneNumber = "";   
          var addrLine1 = "";
          var addrLine2 = "";
          var city = "";
          var state = "";
          var zipcode = "";
                       
          return {  
              getIndex : function() {
                  return this.index;
              },
              getFistName : function () {
                return this.firstName;                    
              },   
              getLastName : function (lastName) {
                  return this.lastName;
              },            
              getEmail : function () {
                  return this.email;
              },
              getPhoneNumber : function () {
                  return this.phoneNumber;
              },
              getAddrLine1 : function () {
                  return this.addrLine1;
              },
              getAddrLine2 : function () {
                  return this.addrLine2;
              },
              getCity : function () {
                  return this.city;
              },
              getState : function () {
                  return this.state;
              },
              getZipCode : function () {
                  return this.zipcode;
              },
              setIndex : function(index) {
                  this.index = index;
              },      
              setFirstName : function (firstName) {                  
                  this.firstName = firstName;
              },
              setLastName : function (lastName) {
                  this.lastName = lastName;
              },            
              setEmail : function (email) {
                  this.email = email;
              },
              setPhoneNumber : function (phoneNumber) {
                  this.phoneNumber = phoneNumber;
              },
              setAddrLine1 : function (addrLine1) {
                  this.addrLine1 = addrLine1;
              },
              setAddrLine2 : function (addrLine2) {
                  this.addrLine2 = addrLine2;
              },
              setCity : function (city) {
                   this.city = city;
              },
              setState : function (state) {
                  this.state = state;
              },
              setZipCode : function (zipcode) {
                  this.zipcode = zipcode;
              },
          }
        }        
    })();