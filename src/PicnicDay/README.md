# Development History

### 08/30/2019
successfully doing the migration to azure sql server
	  

* Making a new BoilerPlate  
   dotnet new webapi  
   ng new ClientApp  

* Migration to Azure  
   dotnet ef migrations add InitialCreate  
   dotnet ef database update  

the connecting string to azure is different from mysql connection  
   "server=[name];User ID=[user];Password=[password];database=[database name];Trusted_Connection=False;"


#### installing BulkExtension.  
>   Bulk insert are necessary in this case, the massive aiport and runway data with 50000 rows will      >   decrease loading time by 80%;
>   dotnet add package EFCore.BulkExtensions --version 2.6.0


#### Primary key can be a string
>   https://stackoverflow.com/questions/517579/strings-as-primary-keys-in-sql-database  
>   which I can use the ident of each airport to call a query and get the data from runway table

---
### 09/02/2019  
   still struggling to find the solution for dbcontext injection.
   
   * airport and runway data bulkinsert/bulkremove from Mssql in controller
   * Successfully loading and remove data from Mssql
   * All the webAPI issue has taken care, able to delivery json to Angular
---

### 09/03/2019
   I find the solution for dbcontext injection by reversing the call method from PDDbContext.cs in
   Models folder.

   * created a new folder called Services for running function that are not related to MVC
   * Combining all the research and code into the UpdataSqwlService.cs
   * running Hangfire in startup.cs  test the update and scrape method.

---

### 09/04/2019
   Since the backend with Mssql and hangfire is complete  
   I will start working on the frontend with angular, also  
   slowly working torward controller, see what information  
   the frontend needed. 


#### Missing @angular/material
   ng add @angular/material  
   it will do the job


#### AutoComplete for searching Airport
   https://material.angular.io/components/autocomplete/overview  
   since there are lot of airports in the world, to narrow it down by  
   minimum of 4 characters before starting autocomplete sugguestion  
   drop down.

#### WebAPI asp.net core Controller
   


#### Parsing JSON by Newtonsoft.Json
   dotnet add package Newtonsoft.Json --version 12.0.2
   https://stackoverflow.com/questions/2546138/deserializing-json-data-to-c-sharp-using-json-net


#### X axis overflow issue
   I have to remove all html and css to debug this issue
   I find out there is a "row" parameter in Nav tag class


#### html tag reorganize
   mr-auto: right  
   ml-auto: left
   mx-auto: center 

---

### 09/11/2019
#### All the bootstrap and angular issue has fixed.
   * Overflow with different size screen  
   * all the objects display in the right div box  
   
   
#### Data from WeatherAPI and Ourairport issue
   * WeatherAPI - if there are 0 wind, the"deg" in JSON response  
   will disappear.  
   * Ouraiport sometime will release a empty table.
   
#### Removed duplicating Runway direction  
   * Some airports will have multi runway facing same direction


#### Added Picture to airport current weather
   * UI/UX - User will understand immediately  
   the weather situation without paying attention

