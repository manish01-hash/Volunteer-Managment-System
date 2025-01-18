import config from "../config/config";  
import {Client , Account ,ID} from "appwrite";

export class AuthServices{
    client;
    account;

    constructor(){
        this.client = new Client()
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client); 
    }

    async createAccount({email , password}){        // Create Account Method
        try {
            const account = await this.account.create(ID.unique(),email,password)

            if(account){
                console.log("Account created Successfully:", account);
                return this.login({email , password})
            }
            return account

        } catch (error) {
            console.log("authServices :: createAccount :: error" , error);
        }
    }
    
    async deleteAccount(){          // Delete Account Method
        
        try {
            await this.account.delete()
            console.log("Account deleted Successfully");

        } catch (error) {
            console.log("authServices :: deleteAccount :: error" , error);
            return false;
        }
    
    }

    async login({email , password}){            // Login Method
        try {
            const session = await this.account.createEmailSession(email,password)

            if(session){
                console.log("Login successful:", session);
                return session;
            }

        } catch (error) {
            console.log("authServices :: login :: error" , error);
            return false
        }
    }

    async logout(){             // Logout Method
        try {

        await this.account.deleteSession("current")
        console.log("Logout successful:", session);

        } catch (error) {
            console.log("authServices :: logout :: error" , error);
            return false;
        }
    }

}

const authServices = new AuthServices();
export default authServices;