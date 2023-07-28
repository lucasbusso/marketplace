import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/charachters";
import { CardComponent } from "../../components/card";
import { TypeCharacter } from "./character.interface";

export const HomePage: React.FC<object> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number | undefined>(1);

  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page: page })
      .then((r) => {
        setAllCharacters(r.data.results);
        setPageCount(r.data.info.pages);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl" sx={{ width: "90%" }}>
      <HeaderComponent
        title="Marketplace"
        description="Mapeando la data de la API Rick and morty"
      />
      {loading ? undefined : (
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent: "center", mb: 6, mt: 6 }}
        />
      )}
      <div>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 30 }}>
            <CircularProgress />
          </Box>
        ) : allCharacters?.length !== 0 ? (
          <Grid container spacing={2} direction="row">
            {allCharacters?.map((character) => (
              <Grid item xs={3} key={character.id}>
                <CardComponent
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                  id={character.id}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          ""
        )}
      </div>
      {loading ? undefined : (
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent: "center", mb: 6 }}
        />
      )}
    </Container>
  );
};
