import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalContext } from "../../context";
import { Button, CardMedia, Divider, ListItemButton } from "@mui/material";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CartList() {
  const {
    state,
    total,
    amount,
    cart,
    deleteItem,
    addItem,
    removeItem,
    clearCart,
  } = useGlobalContext();
  console.log("cart", cart);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
        width: "100%",
        pt: 6,
      }}
    >
      <Grid container spacing={2} sx={{ width: "80%" }}>
        <Grid item xs={12}>
          <Demo>
            <List dense={dense}>
              {cart.length !== 0 ? (
                cart.map((item) => (
                  <ListItem
                    key={cart?.id}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          removeItem(item);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={item.img} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={secondary ? "Secondary text" : null}
                    />
                    <ListItemButton>
                      <Button
                        type="button"
                        onClick={() => {
                          deleteItem(item);
                        }}
                      >
                        Decrease
                      </Button>
                    </ListItemButton>
                    <ListItemButton>
                      <Button
                        type="button"
                        onClick={() => {
                          addItem(item);
                        }}
                      >
                        Increase
                      </Button>
                    </ListItemButton>
                    <Typography>{item.amount}</Typography>
                  </ListItem>
                ))
              ) : (
                <Typography>There are no items</Typography>
              )}
            </List>
            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "gray",
                px: 2,
              }}
            >
              <Button type="button" onClick={clearCart} sx={{ color: "#fff" }}>
                Clear Cart
              </Button>

              <Typography sx={{ color: "#fff" }}>
                Total Price ${total}
              </Typography>
            </Box>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
