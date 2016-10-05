
Project: Customer Entry Spec.
NOTE: to avoid coping libraries, used CND links in place of downloading copy to local.
NOTE: not used any test frame works, any build packages here as this demo targetted to 
      Demo the Angular Skills.
	  
Folder structure
app
 index.html - root file
 customer
   customer.list.html - home page where it shows list of records
   customer.list.controller.js - controller to handle list
   customer.add.edit.html - add/edit of records 
   customer.add.edit.controller.js - controller to add / edit
   customer.service.js - service to store and retrive data from local store.
   
 app.module.js - application root module.
 assets
   styles
     custom
       animations.css - 3rd party styles for animations.
       appcolors.css - base colors for app.
       basefontsize.css - abse fonts for app.
       styles.css  - gloabl styles for app.
     lib
        animate.css - open source lib.
		
--------------------------------------------------------------------------	
Deployment Steps.
Setup needed: Node.js intalled.
Step1. 
  open Node.js cli.
Step2.
  run the following command to install http-server.
  > npm install -g http-server
Step3.
 copy the Application folder to any location.
Step 4:
 on Node CLI go to APP folder.
Step 5:
  start the web server by running following.
  > http-server.
Step 6:
  open any browser and type: 
  localhost:8080.
  >> now you can see the app home screen.
  
------------------------------------------------------------------------------

USAGE:
 1. on home screen.
   -> click on + customer button.
      -> this will take you to Add Customer Screen.
	  -> Enter the mandatory fields and click on Save customer.
	  -> that will bring back to Home screen and shows the added record on home screen.
	  
 2. on the list item
      -> click  delete button to delete the record.
	  -> click on Edit button to edit the record and save.
	  
