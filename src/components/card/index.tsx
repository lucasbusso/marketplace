import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cart.slice";

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
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const itemExist = useAppSelector((state) => state.cartReducer);

  function handleAddToCart() {
    dispatch(
      addToCart({
        id,
        name,
        image,
        info: status,
      })
    );
  }

  useEffect(() => {
    setDisableBtn(itemExist.some((item) => item.id === id));
  }, [itemExist, id]);

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
          <Typography
            variant="h4"
            sx={{
              mb: 1.5,
              textDecoration: "none",
              minHeight: "84px",
            }}
          >
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
            sx={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => navigate(`/character/${id}`)}
          >
            See description
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="small"
            onClick={handleAddToCart}
            disabled={disableBtn}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
