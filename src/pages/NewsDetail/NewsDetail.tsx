import { useContext, useEffect } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useRouteMatch } from 'react-router'
import AppNavbar from '../../components/Navbar/Navbar'
import { NewsContext } from '../../contexts/NewsContext'

type MatchProps = {
  id: string;
}

const NewsDetail = () => {

  const { title, text, fetchNewsById } = useContext(NewsContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const match = useRouteMatch<MatchProps>()
  const id = match.params.id

  useEffect(() => {
    fetchNewsById(access_token, id)
  }, [access_token, id])

  return (
    <>
      <AppNavbar showSearch={false} />
    </>
  )
}

export default NewsDetail
