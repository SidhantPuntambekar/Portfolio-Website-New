import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import pacific_war from "../../img/pacific_war.png";
import chess from "../../img/chess.png";

const Blog = ({ setCurrentPage }) => {
  const containerStyle = {
    textAlign: "center",
    padding: "5%",
  };

  const headingStyle = {
    marginBottom: "16px",
  };

  const cardStyle = {
    backgroundColor: "#4E342E",
    ":hover": { boxShadow: 20 },
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#EEA47FFF",
    fontWeight: "bold",
    color: "black",
    "&:hover": {
      backgroundColor: "#EEA47FFF",
    },
  };

  return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>Blogs</h2>
        <h3>Welcome to the blog section of my website</h3>
        <h3>Click a card to read one of my blogs on History or Chess</h3>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={cardStyle} elevation={12}>
              <CardMedia
                sx={{ height: 0, paddingTop: "56.25%" }}
                image={pacific_war}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white" }}
                >
                  History
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  A blog where I summarize interesting events from history
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="text"
                  onClick={() => {
                    setCurrentPage("history");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  sx={buttonStyle}
                >
                  View History Blog
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={cardStyle} elevation={12}>
              <CardMedia
                sx={{ height: 0, paddingTop: "56.25%" }}
                image={chess}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white" }}
                >
                  Chess
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  A blog where I summarize games of the past
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="text"
                  onClick={() => {
                    setCurrentPage("chess");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  sx={buttonStyle}
                >
                  View Chess Blog
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
  );
};

export default Blog;