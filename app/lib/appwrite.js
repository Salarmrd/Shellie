import { Client, Account, Avatars } from 'appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('688c907c003593ae8bbc'); // Your Project ID

export const account= new Account(client);
export const avatars = new Avatars(client);
  
