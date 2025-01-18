const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),


    eventId : String(import.meta.env.VITE_APPWRITE_COLLECTION_EVENT),
    taskId : String(import.meta.env.VITE_APPWRITE_COLLECTION_TASK),
    roleId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ROLE),
    volunteerId : String(import.meta.env.VITE_APPWRITE_COLLECTION_VOLUNTEER),
    registrationId : String(import.meta.env.VITE_APPWRITE_COLLECTION_REGISTRATION),
    skillId : String(import.meta.env.VITE_APPWRITE_COLLECTION_SKILL)

}

export default config;