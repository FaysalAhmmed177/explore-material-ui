import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/Styles';
import { green, orange } from '@material-ui/core/colors';
import '@fontsource/roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '15px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36
    }
  },
  palette: {
    
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing checkbox"
    />

  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6} lg={3}>
                <Paper style={{ height: 75, width: '100% ' }} />
              </Grid>
              <Grid item lg={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item lg={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button
                startIcon={<SaveIcon></SaveIcon>}
                size="large"
                style={{ fontSize: "20px" }}
              >Save
              </Button>
              <Button
                startIcon={<DeleteIcon></DeleteIcon>}
                size="large"
                style={{ fontSize: "20px" }}
              >Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
