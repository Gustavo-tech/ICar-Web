import React, { useRef, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import Button from '@material-ui/core/Button'
import BurstModeIcon from '@material-ui/icons/BurstMode'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useStyles, FileInput, Img } from './styles'
import { CarContext } from '../../contexts/CarContext'

type PicturesProps = {
  onNextClick: () => void;
}

const CarPictures = ({ onNextClick }: PicturesProps) => {

  const fileInputRef = useRef<any>()
  const { pictures, setPictures } = useContext(CarContext)

  async function handleImageChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files!
    let nPics: string[] = []
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i]
      const result = await readFile(file)
      nPics.push(result)
    }

    fileInputRef.current.value = ''
    setPictures(nPics)
  }

  function readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      let fr = new FileReader()
      fr.onload = () => {
        resolve(fr.result!.toString())
      }

      fr.onerror = reject
      fr.readAsDataURL(file)
    })
  }

  const classes = useStyles()
  return (
    <>
      <FileInput
        ref={fileInputRef}
        type="file"
        required
        onChange={(e) => handleImageChanges(e)}
        accept=".jpg, .jpeg, .png"
        multiple
      />

      <Grid container alignItems="center" className={classes.titleGrid}>
        <Grid container item xs={6} spacing={2}>
          <Grid container justify="center" item xs={1}>
            <PhotoLibraryIcon color="primary" fontSize="large" />
          </Grid>

          <Grid item xs={11}>
            <Typography variant="h4" color="primary">Pictures</Typography>
          </Grid>
        </Grid>

        <Grid container justify="flex-end" alignItems="center" item xs={6}>
          <Button
            color="primary"
            endIcon={<BurstModeIcon />}
            variant="contained"
            size="large"
            onClick={() => fileInputRef.current.click()}
          >
            Select Pictures
          </Button>
        </Grid>
      </Grid>

      <Grid container className={classes.imagesGrid} spacing={2}>
        {
          pictures.map((x) => (
            <Grid key={x} item xs={3} className={classes.imgHolder}>
              <Img src={x} />
            </Grid>
          ))
        }

      </Grid>

      <Grid container justify="flex-end" alignItems="center">
        <Button
          color="primary"
          endIcon={<NavigateNextIcon />}
          variant="contained"
          size="large"
          className={classes.nextButton}
          disabled={!pictures || pictures.length === 0}
          onClick={onNextClick}
        >
          Next
        </Button>
      </Grid>
    </>
  )
}

export default CarPictures
