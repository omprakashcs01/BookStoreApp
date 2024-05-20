import axios from "axios";


const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyBKeoWpJ8sDWczv4Bb0tiWWH3RPJZ8Y6zU'

export const searchBooksAPI = async (query)=>{

     try {
        const fullURL = `${API_BASE_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}`;

        // Make the GET request
        const response = await axios.get(fullURL);

        // console.log("response:>>> ", response);
        return response.data.items
     } catch (error) {
        console.error('Error fetching books: ', error);
     }
} 

// console.log(searchBooksAPI())