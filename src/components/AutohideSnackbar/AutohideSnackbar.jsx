import { enqueueSnackbar } from "notistack";
export const AutohideSnackbar = (message, variant) => {
  enqueueSnackbar(message, {
    variant: variant,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    autoHideDuration: 1500,
  });
};
