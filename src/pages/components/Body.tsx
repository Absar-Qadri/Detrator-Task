import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FullHeightGrid() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        marginTop: 1,
      }}
    >
      {/* Left Grid */}
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          marginLeft: { sm: 8, lg: 42 },
          marginRight: { sm: 2, lg: 4 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            maxHeight: {
              xs: showMore ? "70vh" : "50vh", // Smooth height transition
              sm: "100vh",
            },
            transition: "max-height 0.4s ease", // Smooth height effect
            backgroundColor: "#002855",
            color: "#fff",
            borderRadius: 2,
            padding: 4,
            boxShadow: 3,
            overflow: "hidden", // Prevent content overflow
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            Welcome to Top Notch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 4,
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            We provide top-notch services and solutions for your business needs.
            Let us help you achieve your goals with our cutting-edge technology
            and expertise.
          </Typography>

          <div
            style={{
              maxHeight: showMore ? "150px" : "0", // Adjust maxHeight dynamically
              transition: "max-height 0.4s ease, opacity 0.4s ease", // Smooth transition
              opacity: showMore ? 1 : 0, // Fade effect
              overflow: "hidden", // Prevent content overflow
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                lineHeight: 1.5,
                fontStyle: "italic",
                color: "#ddd",
                marginBottom: 4,
              }}
            >
              Our mission is to empower businesses to succeed with scalable and
              innovative solutions tailored to their unique needs. From
              personalized digital experiences to robust cloud integrations, we
              deliver excellence every step of the way. We ensure that our
              services align with your business goals and help you reach new
              heights in efficiency and productivity.
            </Typography>
          </div>

          <Button
            variant="contained"
            color="secondary"
            onClick={toggleShowMore}
            sx={{
              backgroundColor: "#f50057",
              "&:hover": { backgroundColor: "#c51162" },
              marginTop: 2,
            }}
          >
            {showMore ? "Show Less" : "Learn More"}
          </Button>
        </Paper>
      </Grid>

      {/* Right Grid */}
      <Grid
        item
        xs={12}
        sm={3}
        sx={{
          marginLeft: { sm: 2, lg: 4 },
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: {
              xs: "50vh",
              sm: "96vh",
            },
            backgroundColor: "#f5f5f5",
            marginTop: { xs: 0, sm: 2 },
            marginBottom: { xs: 0, sm: 2 },
            borderRadius: 2,
            padding: 4,
            boxShadow: 3,
            overflowY: "auto", // Enable scrolling for extra content
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: 2,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Featured Services
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            <Typography
              variant="body1"
              component="li"
              sx={{ marginBottom: 1, fontSize: "1rem" }}
            >
              Custom Web Development
            </Typography>
            <Typography
              variant="body1"
              component="li"
              sx={{ marginBottom: 1, fontSize: "1rem" }}
            >
              Digital Marketing Strategies
            </Typography>
            <Typography
              variant="body1"
              component="li"
              sx={{ marginBottom: 1, fontSize: "1rem" }}
            >
              Cloud Solutions
            </Typography>
            <Typography
              variant="body1"
              component="li"
              sx={{ marginBottom: 1, fontSize: "1rem" }}
            >
              Personalized Business Insights
            </Typography>
          </ul>
        </Paper>
      </Grid>
    </Grid>
  );
}
