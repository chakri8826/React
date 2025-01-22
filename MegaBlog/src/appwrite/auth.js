import { Client, Account,ID } from "appwrite";
import conf from "../conf/conf.js"

class AuthService{
    Client = new Client()
    account
    
    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.Client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name,
            )
            if(userAccount){
                return await this.login({email,password});
            }
            else{
                return userAccount;
            }
        }
        catch(err){
            console.log("Error in createAccount :: "+err);
            throw err;
        }
    }


    async login({email,password}){
        try{
            const session = await this.account.createEmailPasswordSession(email,password);
            return session;
        }
        catch(err){
            console.log("Error in login :: " + err);
            throw err;
        }
    }


    async getCurrentUser(){
        try {
            const user = await this.account.get();
            return user;
        } catch (err) {
            console.log("Error in getCurrentUser :: " + err);
            throw err;
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(err){
            console.log("Error in logout :: " + err);
            throw err;
        }
    }

}
const authService = new AuthService();

export default authService;
