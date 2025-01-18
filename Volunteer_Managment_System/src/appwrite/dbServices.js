import config from "../config/config";
import {Client , Databases , ID , Storage, Query} from "appwrite";

export class DbServices{
    client;
    databases;
    storage;

    constructor(){

        this.client = new Client()
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async 
}