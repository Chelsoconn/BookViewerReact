import axios from 'axios';
const baseURL = 'http://localhost:3000/api'
import { Book } from '../types/types'

const getAllChapters = async (): Promise<Book> => {
    try {
      const response = await axios.get(baseURL + '/toc')
      return response.data as Book;
    } catch (error) {
      console.error('Error fetching chapters:', error);
      throw error; 
    }
}

const getChapter = async (chapter: string | undefined): Promise<string> => {
    try {
      const response = await axios.get(baseURL + `/${chapter}`)
      return response.data;
    } catch (error) {
      console.error('Error fetching chapters:', error);
      throw error; 
    }
}

export { getAllChapters, getChapter }