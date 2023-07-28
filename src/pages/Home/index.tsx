import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/charachters";
import { CardComponent } from "../../components/card";
import { TypeCharacter } from "./character.interface";

export const HomePage: React.FC<object> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );

  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ width: "90%" }}>
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido a Codrr"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
      <div>
        {allCharacters?.length !== 0 ? (
          <Grid container spacing={2} direction="row">
            {allCharacters?.map((character) => (
              <Grid item xs={3} key={character.id}>
                <CardComponent
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};
