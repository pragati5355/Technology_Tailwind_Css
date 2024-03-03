# Password Manager
This project is a simple Angular application that uses Firebase authentication and Firebase Realtime database. It allows users to log in with their Google account and view a list of credentials stored in Firebase.

## Technologies Used

`Angular`
`Firebase`

`Angular CLI`
`Firebase CLI`

## How to Use

## Clone the repository:
git clone <git@github.com:rushikesh-salunke/password-manager.git>
## Install the dependencies:
`npm install`
Start the development server:
`ng serve`
Open a web browser and navigate to `http://localhost:4200.`

Click the `Log In with google` button and log in with your Google account.

Once you are logged in, you will be able to see a list of data stored in Firebase.

## Authentication

This project uses Firebase authentication to allow users to log in with their Google account. To log in, simply click the `Log In with google` button and enter your Google credentials.

## Data Retrieval

This project uses the Firebase store to retrieve data from Firebase. The data is stored in a collection called users & credentials. 

## Example

The following code shows how to retrieve all of the data from the users collection:

    return new Promise<any>((resolve)=> {
      this.db.collection('credentials').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
Once you have retrieved the data, you can display it in your Angular application using the *ngFor directive. For example, the following code displays a list of all of the users in the users collection:

## HTML
<ul>
  <li *ngFor="let credential of credentials">
    {{ credential.name }}
  </li>
</ul>
Use code with caution. Learn more
Conclusion

This is a simple example of how to use Angular and Firebase to create a web application. You can use this project as a starting point to build your own Angular applications with Firebase authentication and Firebase Store.