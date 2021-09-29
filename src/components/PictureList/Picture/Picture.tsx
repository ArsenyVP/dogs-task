import React from 'react';
import { ImageListItem } from '@material-ui/core'
import { useStyles } from '../../../styles';

interface PictureProps {
    img: string,
    classes: ReturnType<typeof useStyles>
}

const Picture: React.FC<PictureProps> = ({ img, classes }: PictureProps) => {
    return (
        <ImageListItem>
            <img loading="lazy" style={{ width: 400, height: 350 }} className={classes.img} src={img} alt="dogs" />
        </ImageListItem>
    )
}

export default Picture
