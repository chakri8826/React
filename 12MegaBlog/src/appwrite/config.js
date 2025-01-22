import conf from "../conf/conf";
import { Client,Databases,Storage,Query,ID } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
            try {
                return await this.databases.createDocument(
                    conf.appwriteDataBaseId,
                    conf.appwriteCollectionId,
                    ID.unique(), //document ID (unique ga undali so ID.unique using, slug use chesthey same url isthey same slug vastundi they we get error)
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                );
            } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }


    async updatePost(postId,{title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                postId,
                {
                        title,
                        content,
                        featuredImage,
                        status
                }
            );
        } 
        catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }


    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true
        } 
        catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }


    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            );
        } 
        catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }


    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
                return false;
        }
    }




    //file upload service


    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ); 
        } 
        catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false; 
        }
    } 

    
    async deleteFile(fileid){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileid
            );
            return true;
        }
        catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }



    getFilePreview(fileid){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileid,
        )
    }


}

const service = new Service()
export default service







