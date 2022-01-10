import { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
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
    const newPictures = pictures.slice(index, 3)
    setLocalPictures(newPictures)
  }, [index])

  function decreaseIndex(): void {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function increaseIndex(): void {
    if (index < pictures.length - 2) {
      setIndex(index + 1)
    }
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

      <IconButton
        className={`${classes.leftButton} ${classes.button}`}
        onClick={decreaseIndex}
      >
        <NavigateBeforeIcon className={classes.arrowIcon} />
      </IconButton>

      <IconButton
        className={`${classes.nextButton} ${classes.button}`}
        onClick={increaseIndex}
      >
        <NavigateNextIcon className={classes.arrowIcon} />
      </IconButton>
    </Wrapper>
  )
}

export default CarGallery
