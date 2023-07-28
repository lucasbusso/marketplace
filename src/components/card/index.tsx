import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

type CardProps = {
  image: string;
  name: string;
  species: string;
  status: string;
  id: string;
};

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  species,
  status,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/character/${id}`)}
        />
        <CardContent>
          <Typography variant="h4" sx={{ mb: 1.5, textDecoration: "none" }}>
            {name}
          </Typography>
          <Divider />
          <Typography sx={{ mt: 1.5, textDecoration: "none" }}>
            Especie: {species}
          </Typography>
          <Typography sx={{ mt: 1.5, textDecoration: "none" }}>
            Estado: {status}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{ textDecoration: "none" }}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/character/${id}`)}
          >
            See description
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
