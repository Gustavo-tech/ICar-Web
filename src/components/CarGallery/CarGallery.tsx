import { useEffect, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { useStyles, Picture, Wrapper } from './styles'

type CarGalleryProps = {
  pictures: string[];
}

const CarGallery = ({ pictures }: CarGalleryProps) => {

  const [index, setIndex] = useState<number>(0)
  const [localPictures, setLocalPictures] = useState<string[]>([])

  useEffect(() => {
    const newPictures = pictures.slice(index, index + 3)
    setLocalPictures(newPictures)
  }, [index, pictures])

  function decreaseIndex(): void {
    if (index > 0)
      setIndex(index - 1)

    else
      setIndex(pictures.length - 3)
  }

  function increaseIndex(): void {
    if (index < pictures.length - 3)
      setIndex(index + 1)

    else
      setIndex(0)
  }

  const classes = useStyles()
  return (
    <Wrapper>
      {
        localPictures.map((item) => {
          return (
            <Picture key={item} src={item} />
          )
        })
      }

      {pictures.length > 3 &&
        <IconButton
          className={`${classes.leftButton} ${classes.button}`}
          onClick={decreaseIndex}
        >
          <NavigateBeforeIcon className={classes.arrowIcon} />
        </IconButton>}

      {pictures.length > 3 &&
        <IconButton
          className={`${classes.nextButton} ${classes.button}`}
          onClick={increaseIndex}
        >
          <NavigateNextIcon className={classes.arrowIcon} />
        </IconButton>}
    </Wrapper>
  )
}

export default CarGallery
