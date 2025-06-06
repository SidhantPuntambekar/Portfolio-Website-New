import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { FaGithub, FaLink } from "react-icons/fa"

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const containerStyle = {
  alignItems: "center",
  textAlign: "center",
  padding: "5%"
};

const iconStyle = { color: "white", fontSize: "1.5em" }

export default function BasicCard() {
  return (
    <ThemeProvider theme={outerTheme}>
      <div style={containerStyle}>
        <div>
          <h2>Projects</h2>  
        </div>
        <Grid container spacing={4}>
          {[
            {
              title: "ClustifyR Web App",
              image: require('../../img/clustifyR_alt.png').default,
              description: "An RShiny application to assist with single cell RNA-seq clustering analysis. Allows annotation of cell types on the fly and creation of gene expression visualizations.",
              github: "https://github.com/rnabioco/clustifyr-web-app",
              link: "https://raysinensis.shinyapps.io/clustifyr-web-app/",
            },
            {
              title: "HackCU Hub",
              image: require('../../img/hackcuhub.png').default,
              description: "This site serves as the main hub for all things HackCU - everything hackers need can be found here. A one-stop shop with easy navigation - from the live site to the team page.",
              link: "https://hackcu.org/",
            },
            {
              title: "Cyberhood",
              image: require('../../img/cyberhood_alt.jpg').default,
              description: "Keeping networks safer using a wifi sniffer called Kismet while storing device data in MongoDB with analysis in MongoDB Compass.",
              github: "https://github.com/SidhantPuntambekar/team-cyberhood-1",
              link: "https://devpost.com/software/cyberhood-6xg3us",
            },
            {
              title: "Someta",
              image: require('../../img/someta_graph.png').default,
              description: "Monitors NCBI GEO entries monthly and determines the fraction with usable cell metadata.",
              github: "https://github.com/rnabioco/someta",
              link: "https://rnabioco.github.io/someta/",
            },
            {
              title: "Sorry! Game",
              image: require('../../img/sorry.png').default,
              description: "A recreation of the board game Sorry! built with Java and JavaFX. Leverages object-oriented patterns like Factory, MVC, Command, and Observer.",
              github: "https://github.com/SidhantPuntambekar/Sorry-Game",
            },
            {
              title: "genMutation",
              image: require('../../img/genMutation.png').default,
              description: "A fine-scale mutational map of the human genome using Broad Institute's gnomAD data. Harvard Medical School SIBMI Project 2021.",
              github: "https://github.com/SidhantPuntambekar/genMutation",
            },
          ].map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card sx={{ backgroundColor: "#4E342E", ':hover': { boxShadow: 20 }, display: "flex", flexDirection: "column", height: "100%" }} elevation={12}>
                <CardMedia
                  sx={{ height: 0, paddingTop: '56.25%' }}
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" style={{ color: "white" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: "white" }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {project.github && (
                    <Button size="small" href={project.github} target="_blank"><FaGithub style={iconStyle} /></Button>
                  )}
                  {project.link && (
                    <Button size="small" href={project.link} target="_blank"><FaLink style={iconStyle} /></Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}