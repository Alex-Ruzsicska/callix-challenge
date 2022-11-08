# Backend implementation

## The backend uses 3 main structures to handle the requests:

### #1 ILaunchesProvider
    - This interface is used to define the methods that have to be in the classes that are used as launches providers.
    - It is also important on the depedencies injection strategy applied on the use cases that handles the requests.
    - On the current application only the SpaceXLaunchesProvider is implementing this interface, but it would be easy to implement a new provider and toggle between them, once the usecases expect any class that follows the ILaunchesProvider pattern.
    
### #2 Use cases
    - These classes receive a launches provider as dependency and implement an execute method that calls the injected provider to fetch an specific data.
    - There is one use case for each route of the API (latest, past, next, upcoming).

### #3 Controllers
    - Like the use cases, there is also one controller for each of the routes.
    - It is responsible to receive a request, execute an use case to get the data that will be in the response and then send the response with the right content or an error message if there are any problems handling the request.

# Frontend implementation

## The frontend also uses 3 main structure:

### #1 Space X API
    - This is the axios reference to the backend.
    - Uses the base url defined on the .env.local.

### #2 Use cases
    - Classes that are responsible to fetch an speficic data from the API and normalize the response to an Launch type object.

### #3 Views
    - These are the contents of each page, displaying an specifc data (latest/past/next/upcoming).