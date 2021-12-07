import { createContext, useState, ReactNode, useContext } from 'react'
import { deleteNews } from '../api/news/delete'
import { getMyNews, getNews, getNewsById } from '../api/news/get'
import { createNews } from '../api/news/post'
import { updateNewsRequest } from '../api/news/put'
import News from '../models/news'
import { UIContext } from './UIContext'

type NewsContextProps = {
  // states
  title: string;
  text: string;
  news: News[];
  userIsAuthor: boolean;

  // set states
  setTitle: (title: string) => void;
  setText: (text: string) => void;

  // api calls
  fetchNews: (token: string) => void;
  fetchMyNews: (token: string, userEmail: string) => void;
  fetchNewsById: (token: string, id: string, userEmail: string) => void;
  addNews: (token: string, userEmail: string) => void;
  updateNews: (id: string, userEmail: string, token: string) => void;
  removeNews: (id: string, userEmail: string, token: string) => void;
}

export const NewsContext = createContext({} as NewsContextProps)

type ProviderProps = {
  children: ReactNode;
}

const NewsContextProvider = ({ children }: ProviderProps) => {

  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [news, setNews] = useState<News[]>([])
  const [userIsAuthor, setUserIsAuthor] = useState<boolean>(false)

  const { setIsLoading, setSuccess } = useContext(UIContext)

  function fetchNews(token: string): void {
    setIsLoading(true)
    getNews(token)
      .then(resp => {
        setNews(resp.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
        setNews([])
        setIsLoading(false)
      })
  }

  function fetchMyNews(token: string, userEmail: string): void {
    setIsLoading(true)
    getMyNews(token, userEmail)
      .then(resp => [
        setNews(resp.data)
      ])
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function fetchNewsById(token: string, id: string, userEmail: string) {
    setIsLoading(true)
    getNewsById(token, id)
      .then(resp => {
        const { data } = resp
        setTitle(data.title)
        setText(data.text)
        setUserIsAuthor(data.author === userEmail)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function addNews(token: string, userEmail: string): void {
    setIsLoading(true)
    createNews(token, userEmail, title, text)
      .then(resp => {
        if (resp.status === 200)
          setSuccess(true)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function updateNews(id: string, userEmail: string, token: string) {
    setIsLoading(true)
    updateNewsRequest(id, title, text, userEmail, token)
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function removeNews(id: string, userEmail: string, token: string) {
    setIsLoading(true)
    deleteNews(id, userEmail, token)
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <NewsContext.Provider value={{
      // states
      title,
      text,
      news,
      userIsAuthor,

      // set states
      setTitle,
      setText,

      // api calls
      fetchNews,
      fetchMyNews,
      fetchNewsById,
      addNews,
      updateNews,
      removeNews
    }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider
