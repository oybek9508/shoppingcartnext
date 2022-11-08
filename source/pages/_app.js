import { Box } from "@mui/material";
import "../../styles/globals.css";
import { CartProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Box
        sx={{
          height: "64px",
          bgcolor: "#fff",
          position: "static",
        }}
      />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
