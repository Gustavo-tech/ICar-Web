import { ReactNode } from 'react'
import { CenterDiv } from './styles'

type CenteredContentProps = {
  direction?: 'column' | 'row';
  children: ReactNode;
}

const CenteredContent = ({ children, direction = 'column' }: CenteredContentProps) => {
  return (
    <CenterDiv direction={direction}>
      {children}
    </CenterDiv>
  )
}

export default CenteredContent
