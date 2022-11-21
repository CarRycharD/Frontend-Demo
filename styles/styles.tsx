import { SxProps, Theme } from "@mui/material";

export const foodDetailsStyles: Record<string, SxProps<Theme> | undefined> = {
    box: {
      position: 'absolute',
      left: '50%',
      top: '25%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      border: 1,
      borderRadius: 5,
      borderColor: 'success.main',
      bgcolor: 'success.light',
      minWidth: 1/4,
      minHeight: 100
    }
}

export const foodCreateStyles: Record<string, SxProps<Theme> | undefined> = {
  createButton: {
      position: 'absolute',
      left: '50%',
      bottom: '100%',
      transform: 'translate(-50%, -50%)'
  }
}

export const foodListStyles: Record<string, SxProps<Theme> | undefined> = {
    outerBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    },
      foodButton: {
        color: 'warning.main',
        border: 1,
        borderRadius: 5,
        borderColor: 'warning.main',
        my: 0.5,
        width: 200,
        textAlign: 'center',
        ':hover' :
        { bgcolor: 'warning.main',
          color: 'white', }
    }
}

export const foodModulStyles: Record<string, SxProps<Theme> | undefined> = {
    createButton: {
        bgcolor: 'success.light',
        borderRadius: 5,
        color: 'white',
        ':hover': {
          bgcolor: 'white',
          color: 'success.light',
        }
    },
    updateButton: {
        bgcolor: 'warning.main',
        mx: 1,
        borderRadius: 5,
        color: 'white',
        ':hover': {
          bgcolor: 'white',
          color: 'warning.main'
        }
    }
}

export const foodDeleteStyles: Record<string, SxProps<Theme> | undefined> = {
    redStyle: {
      bgcolor: 'error.main',
      borderRadius: 5,
      color: 'white',
      ':hover':
      { bgcolor: 'white',
        color: 'error.main' }
      },
    redModalStyle: {
      marginBottom: 1,
      mx: 1,
      bgcolor: 'error.main',
      borderRadius: 5,
      color: 'white',
      ':hover':
      { bgcolor: 'white',
        color: 'error.main' }
      },
    greenStyle: {
      marginBottom: 1,
      bgcolor: 'success.light',
      borderRadius: 5,
      color: 'white',
      ':hover':
      { bgcolor: 'white',
        color: 'success.light', }
      }
}

export const loginFormStyles: Record<string, SxProps<Theme> | undefined> = {
  box: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    m: 1,
    bgcolor: 'blue'
  },
  button: {
    mt: 4,
    mb: 2
  }
}

export const notFoundStyle: Record<string, SxProps<Theme> | undefined> = {
  box: {
    bgcolor: 'warning.main',
    position: 'absolute',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    border: 1,
    borderRadius: 5,
    borderColor: 'warning.main'
  }
}
