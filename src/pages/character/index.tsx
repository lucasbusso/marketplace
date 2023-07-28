import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { characters } from "../../api/charachters";
import { ICharacter } from "./interfaces/character.interface";
import { Box, Chip, Container, Divider, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<ICharacter>();

  useEffect(() => {
    setLoading(true);
    characters
      .getById({ id })
      .then((res) => {
        setCharacter(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <Box sx={{ width: "100%" }}>
      {loading ? (
        "Loading"
      ) : (
        <>
          <Link to="/">
            <ArrowBackIcon color="primary" sx={{ mt: 10, ml: 3 }} />
          </Link>
          <Container maxWidth="xl" sx={{ mt: 10 }}>
            <Grid container columnSpacing={4}>
              <Grid item xs={6}>
                <Typography variant="h1">{character!.name}</Typography>
                <Divider sx={{ mt: 4, mb: 4 }} />
                <Typography variant="h6">{character!.origin.name}</Typography>
                <Divider sx={{ mt: 4, mb: 4 }} />
                <Box>
                  <Chip
                    color="primary"
                    variant="outlined"
                    label={character!.status}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img src={character!.image} style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </Box>
  );
};
