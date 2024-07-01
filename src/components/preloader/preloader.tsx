import { Box, CircularProgress } from "@mui/material";
import styles from "./preloader.module.scss";

const Preloader = () => {
  return (
    <Box className={styles.overlay}>
      <CircularProgress size={50} disableShrink />
    </Box>
  );
};

export default Preloader;
