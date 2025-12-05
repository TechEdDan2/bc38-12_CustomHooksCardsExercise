import { useState } from "react";
import axios from "axios";

/**
 * The useAxios hook for fetching data from an API endpoint. 
 * 
 * @param {} baseUrl - The base URL for the API.
 * @returns - An array containing the fetched data and a function to add more data. 
 */
const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);

    const addData = async (endpoint = "") => {
        try {
            const response = await axios.get(`${baseUrl}${endpoint}`);
            setData(data => [...data, response.data]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return [data, addData];
};

export default useAxios;