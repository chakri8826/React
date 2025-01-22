// import conf from "../conf/conf.js";
// import {Client,Account,ID} from "appwrite"

//     export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
//     }

//     async createAccount({ email, password, name }) {
//         try {
//         const userAccount = await this.account.create(
//             ID.unique(),
//             email,
//             password,
//             name
//         );
//         if (userAccount) {
//             // call another method
//             return this.login({ email, password });
//         } else {
//             return userAccount;
//         }
//         } catch (error) {
//         throw error;
//         }
//     }


//     // Appwrite handles the authentication logic internally:
//     // Validates the email and password against its user database.
//     // Checks if the user account exists and is active.
//     // Response on Success:

//     // If the credentials are valid, the method resolves with a Session Object.
//     // This indicates that the login was successful.
//     // Response on Failure:

//     // If the credentials are invalid, the account doesn't exist, or other issues occur, the method throws an error.

//     async login({ email, password }) {
//         try {
//         return await this.account.createEmailPasswordSession(email, password);
//         } catch (error) {
//         throw error;
//         }
//     }

//     async getCurrentUser() {
//         try {
//         return await this.account.get();
//         } catch (error) {
//         console.log("Appwrite serive :: getCurrentUser :: error", error);
//         }

//         return null;
//     }

//     async logout() {
//         try {
//         await this.account.deleteSessions();
//         } catch (error) {
//         console.log("Appwrite serive :: logout :: error", error);
//         }
//     }
// }

// const authService = new AuthService();

// export default authService;


import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Ensure conf.appwriteUrl is set correctly
      .setProject(conf.appwriteProjectId); // Ensure conf.appwriteProjectId is set correctly
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // After account creation, try logging in and return session
        return await this.login({ email, password });
      } else {
        // This part won't likely be triggered because if the account creation fails, an error will be thrown
        return userAccount;
      }
    } catch (error) {
      console.error("Error during account creation:", error);
      throw error; // Rethrow the error for higher-level handling
    }
  }

  async login({ email, password }) {
    try {
      // Creates dynamically ids for every new login session.
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Rethrow the error for higher-level handling
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }

  
}

const authService = new AuthService();

export default authService;
