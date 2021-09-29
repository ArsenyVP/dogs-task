import { ImageList } from '@material-ui/core'
import React from 'react';
import { useStyles } from '../../styles';
import Picture from './Picture/Picture';

interface PictureListProps {
    breedImages: string[] | undefined,
    classes: ReturnType<typeof useStyles>
}

const PictureList: React.FC<PictureListProps> = ({ breedImages, classes }: PictureListProps) : React.ReactElement | null => {
    if(!breedImages) {
        return null
    }

    return (
        <ImageList>
            {
                breedImages && breedImages.map((img: string, index: number) => {
                    return <Picture key={img + index} img={img} classes={classes} />
                })
            }
        </ImageList>
    )
}

export default PictureList
