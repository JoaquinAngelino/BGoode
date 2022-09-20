import { Alert, AlertTitle, Snackbar } from "@mui/material";

export default function SnackBar({title, text, type, duration, open, handleClose}) {


  return (
    <Snackbar elevation={6} autoHideDuration={duration} open={open} onClose={handleClose}>
      <Alert onClose={handleClose} variant='filled' severity={type} sx={{ width: '100%' }}>
        <AlertTitle><strong>{title}</strong></AlertTitle>
        <strong>{text}</strong>
      </Alert>
    </Snackbar>

  )
}