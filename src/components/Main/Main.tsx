import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Box, Button, CircularProgress } from '@material-ui/core';
import SelectBox from '../Select/SelectBox';
import PictureList from '../PictureList/PictureList';
import { useStyles } from '../../styles';

const Main: React.FC = () => {
    const classes = useStyles();

    const [dogBreeds, setDogsBreed] = useState<string[] | undefined>(undefined);
    const [breed, setBreed] = useState<string | unknown>('');
    const [breedImages, setBreedImages] = useState<string[] | undefined>(undefined);

    const [subBreeds, setSubBreeds] = useState<string[] | undefined>(undefined);
    const [subBreedInfo, setSubBreedInfo] = useState<any>("");

    const [numbers, setNumbers] = useState<any>(undefined)
    const numbersArray = Array.from(Array(51).keys());
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChangeBreed = useCallback(
        (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
            setBreed(e.target.value);
            setSubBreedInfo(undefined)
            setSubBreeds(undefined)
        }, [setBreed, setSubBreedInfo, setSubBreeds]
    )

    const handleChangeSubBreed = useCallback(
        (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
            setSubBreedInfo(e.target.value);
        }, [setSubBreedInfo])

    const handleChangeNumber = useCallback(
        (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
            setNumbers(e.target.value);
        }, [setNumbers]
    )

    const fetchBreeds = () => {
        fetch("https://dog.ceo/api/breeds/list/all").then(res => {
            return res.json()
        }).then(res => {
            const breeds = res.message;
            const result = [];
            for (let br in breeds) {
                result.push(br)
            }
            setDogsBreed(result);
        })
    }

    const fetchSubBreed = useCallback(
        () => {
            if (breed) {
                fetch(`https://dog.ceo/api/breed/${breed}/list`).then(res => {
                    return res.json();
                }).then(res => {
                    if (res.message.length > 0) {
                        setSubBreeds(res.message);
                    }
                })
            }
        }, [breed, setSubBreeds]
    )

    const fetchBreedImages = () => {
        setIsLoading(true)
        if (breed) {
            fetch(`https://dog.ceo/api/breed/${breed}/${subBreedInfo ? subBreedInfo + "/" : ""}images/random/${numbers}`).then(res => {
                return res.json();
            }).then(res => {
                setBreedImages(res.message)
                setIsLoading(false);
            })
        }
    }

    const getRandomImageByBreed = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchBreedImages();
    }

    useEffect(() => {
        fetchBreeds();
    }, [])

    useEffect(() => {
        fetchSubBreed();
    }, [breed, fetchSubBreed])


    return (
        <Container>
            <Typography className={classes.title} variant={"h3"} component={"h1"}>Dogs Task</Typography>

            <Box className={classes.containerInputs}>
                <form className={classes.formContainer} onSubmit={getRandomImageByBreed}>
                    <Box className={classes.fieldBox}>
                        <SelectBox requiredValidation={true} value={breed} handleChange={handleChangeBreed} arrayValues={dogBreeds} />
                    </Box>
                    <Box className={classes.fieldBox}>
                        {
                            subBreeds && <SelectBox requiredValidation={false} value={subBreedInfo} handleChange={handleChangeSubBreed} arrayValues={subBreeds} />
                        }
                    </Box>
                    <Box className={classes.fieldBox}>
                        <SelectBox requiredValidation={true} value={numbers} handleChange={handleChangeNumber} arrayValues={numbersArray} />
                    </Box>
                    <Box>
                        <Button type="submit" variant="contained" color="primary">View Images</Button>
                    </Box>
                </form>
            </Box>
            <Box className={classes.containerImages}>
                {
                    isLoading ? <CircularProgress /> :
                        <PictureList breedImages={breedImages} classes={classes} />
                }
            </Box>
        </Container>
    )
}

export default Main
