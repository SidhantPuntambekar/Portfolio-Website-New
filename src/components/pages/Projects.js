import * as React from 'react';
import data from "../../res/info.json";
import Project from "../Projects.js";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper }  from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


const projects = data.projects;

const style = 
{
    alignItems: "center",
    textAlign: "center",
    padding: "17%",
};

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});


export default function BasicCard() {
  return (
    <div style = {style}>
      <div>
        <h2>Projects</h2>  
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <ThemeProvider theme={outerTheme}>
            <Card style={{backgroundColor: "#4E342E"}} sx= {{':hover': { boxShadow: 20,},}} elevation={12}>
                <CardMedia
                  style={{height: 200, paddingTop: '56.25%'}}
                  image={require('../../img/clustifyR_alt.png').default}
                  alt="ClustifyR Web Application"
                />
                <CardContent >
                  <Typography style={{color:"white"}} gutterBottom variant="h4" component="div">
                    ClustifyR Web App
                  </Typography>
                  <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                    An RShiny  application to assist with single cell RNA-seq clustering analysis. Allows annotation of cell types on the fly and creation of gene expression visualizations.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="https://github.com/rnabioco/clustifyr-web-app" target="_blank">Code</Button>
                  <Button size="small" href="https://raysinensis.shinyapps.io/clustifyr-web-app/" target="_blank">Link</Button>
                </CardActions>
            </Card>
            </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={outerTheme}>
                <Card style={{backgroundColor: "#4E342E"}} sx= {{':hover': { boxShadow: 20,},}} elevation={12}>
                  <CardMedia
                    style={{height: 200, paddingTop: '56.25%'}}
                    image={require('../../img/hackcuhub.png').default}
                    alt="HackCU Hub"
                  />
                  <CardContent>
                    <Typography style={{color:"white"}} gutterBottom variant="h4" component="div">
                      HackCU Hub
                    </Typography>
                    <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                    This site serves as the main hub for all things HackCU - everything hackers need can be found here.
                    A one-stop shop with easy navigation - from the live site to the team page.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://hackcu.org/" target="_blank">Link</Button>
                  </CardActions>
                </Card>
              </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={outerTheme}>
                <Card style={{backgroundColor: "#4E342E"}} sx= {{':hover': { boxShadow: 20}}} elevation={12}>
                  <CardMedia
                    style={{height: 200, paddingTop: '56.25%'}}
                    image={require('../../img/cyberhood_alt.jpg').default}
                    alt="Cyberhood"
                  />
                  <CardContent>
                    <Typography style={{color:"white"}} gutterBottom variant="h4" component="div">
                      Cyberhood
                    </Typography>
                    <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                    Keeping networks safer for everyone using a wifi sniffer program called Kismet while storing device data in a MongoDB database with analysis in MongoDB Compass.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/SidhantPuntambekar/team-cyberhood-1" target="_blank">Code</Button>
                    <Button size="small" href="https://devpost.com/software/cyberhood-6xg3us" target="_blank">Link</Button>
                  </CardActions>
                </Card>
              </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={outerTheme}>
                <Card style={{backgroundColor: "#4E342E"}} elevation={12} sx= {{':hover': { boxShadow: 20}}}>
                  <CardMedia
                    style={{height: 200, paddingTop: '56.25%'}}
                    image={require('../../img/someta_graph.png').default}
                    alt="ClustifyR Web Application"
                  />
                  <CardContent>
                    <Typography style={{color:"white"}} gutterBottom variant="h4" component="div">
                      Someta
                    </Typography>
                    <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                    Cell-type annotations are frequently excluded from single cell datasets.
                    To better describe the issue, Someta monitors GEO entries monthly, and programmatically determines the fraction of entries with usable cell metadata.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/rnabioco/someta" target="_blank">Code</Button>
                    <Button size="small" href="https://rnabioco.github.io/someta/" target="_blank">Link</Button>
                  </CardActions>
                </Card>
              </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={outerTheme}>
                <Card style={{backgroundColor: "#4E342E"}} elevation={12} sx= {{':hover': { boxShadow: 20}}}>
                  <CardMedia
                    style={{height: 200, paddingTop: '56.25%'}}
                    image={require('../../img/sorry.png').default}
                    alt="ClustifyR Web Application"
                  />
                  <CardContent>
                    <Typography style={{color:"white"}} gutterBottom variant="h4" component="div">
                      Sorry! Board Game
                    </Typography>
                    <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                      A recreation of the Sorry! Board Game built with Java and the JavaFX framework. Leverages object oriented 
                      design patterns such as Factory, Model-View-Controller, Command, and Observer. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/SidhantPuntambekar/Sorry-Game" target="_blank">Code</Button>
                  </CardActions>
                </Card>
              </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={outerTheme}>
                <Card style={{backgroundColor: "#4E342E"}} elevation={12} sx= {{':hover': { boxShadow: 20}}}>
                  <CardMedia
                    style={{height: 200, paddingTop: '56.25%'}}
                    image={require('../../img/genMutation.png').default}
                    alt="Gen Mutation"
                  />
                  <CardContent>
                    <Typography style={{color:"white"}} gutterBottom variant="h4" component="div">
                      genMutation
                    </Typography>
                    <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                      A project to create a fine-scale mutational map of the human genome using data aggregated from the Broad Institute's Genome Aggregation (gnomAD) database. 
                      Harvard Medical School SIBMI Program 2021 Project.  
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://github.com/SidhantPuntambekar/genMutation" target="_blank">Code</Button>
                  </CardActions>
                </Card>
              </ThemeProvider>
          </Grid>
      </Grid>
    </div>
  );
}