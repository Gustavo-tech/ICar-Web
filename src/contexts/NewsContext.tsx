import { createContext, useState, ReactNode, useContext } from 'react'
import { deleteNews } from '../api/news/delete'
import { getMyNews, getNews, getNewsById } from '../api/news/get'
import { createNews } from '../api/news/post'
import { updateNewsRequest } from '../api/news/put'
import News from '../models/news'
import { parseJwt } from '../utilities/token-utilities'
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
  fetchMyNews: (token: string) => void;
  fetchNewsById: (id: string, token: string) => void;
  addNews: (token: string) => void;
  updateNews: (id: string, token: string) => void;
  removeNews: (id: string, token: string, callback?: () => any) => void;
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

  function fetchMyNews(token: string): void {
    setIsLoading(true)
    getMyNews(token)
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

  function fetchNewsById(id: string, token: string) {
    setIsLoading(true)
    getNewsById(id, token)
      .then(resp => {
        const { data } = resp
        const jwtData = parseJwt(token)
        setTitle(data.title)
        setText(data.text)
        setUserIsAuthor(jwtData.oid === data.authorId)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function addNews(token: string): void {
    setIsLoading(true)
    createNews(token, title, text)
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

  function updateNews(id: string, token: string) {
    setIsLoading(true)
    updateNewsRequest(id, title, text, token)
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function removeNews(id: string, token: string, callback?: () => any) {
    setIsLoading(true)
    deleteNews(id, token)
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)

        if (callback)
          callback()
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
