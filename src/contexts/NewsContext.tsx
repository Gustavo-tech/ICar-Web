import { createContext, useState, ReactNode, useContext } from 'react'
import { getNews } from '../api/news/get'
import { createNews } from '../api/news/post'
import News from '../models/news'
import { UIContext } from './UIContext'

type NewsContextProps = {
  // states
  title: string;
  text: string;
  news: News[];

  // set states
  setTitle: (title: string) => void;
  setText: (text: string) => void;

  // api calls
  fetchNews: (token: string) => void;
  addNews: (token: string, userEmail: string) => void;
}

export const NewsContext = createContext({} as NewsContextProps)

type ProviderProps = {
  children: ReactNode;
}

const NewsContextProvider = ({ children }: ProviderProps) => {

  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [news, setNews] = useState<News[]>([])

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

  return (
    <NewsContext.Provider value={{
      // states
      title,
      text,
      news,

      // set states
      setTitle,
      setText,

      // api calls
      fetchNews,
      addNews
    }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider
