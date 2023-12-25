import React, { useState } from "react";
import { styled } from "@mui/system";
import sparshImage from "../images/sparsh.png";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";

const AboutContainer = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  marginTop: theme.spacing(5),
}));

const AboutCol1 = styled("div")(({ theme }) => ({
  paddingRight: theme.spacing(2),
}));

const ProfileImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius:"2em"
});

const AboutCol2 = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const TabContents = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  display:"flex",
  justifyContent:"center"
}));

const TabContentContainer = styled("div")(({ theme }) => ({
  maxWidth: "600px", // Adjust the max-width as needed
  width: "100%",
  overflow:"hidden"
}));

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderTabContent = (tabId) => {
    switch (tabId) {
      case "skills":
        return (
          <Stack direction="row" spacing={1} style={{
            border:"1px solid",
            padding:"1em 0",
            borderRadius:"5px"
          }}>
            <div style={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center",
            }}>
              <Typography gutterBottom>
                Languages
              </Typography>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <Typography  gutterBottom>
                Frameworks
              </Typography>
              <ul>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
              </ul>
            </div>

            <div>
              <Typography  gutterBottom>
                Databases
              </Typography>
              <ul>
                <li>MongoDB</li>
              </ul>
            </div>
          </Stack>
        );

      case "education":
        return (
          <ul style={{
            border:"1px solid",
            padding:"1em",
            borderRadius:"5px",
            fontSize:"89%"
          }}>
            <li style={{
              display:"flex",
              gap:"2em",
              alignItems:"baseline"
            }}>
              <Typography variant="h6" gutterBottom>
                BTech (CSE)
              </Typography>
              Babu Banarsi Das University, Lucknow (2020-2024)
            </li>
            <li style={{
              display:"flex",
              gap:"2em",
              alignItems:"baseline"
            }}>
              <Typography variant="h6" gutterBottom>
                Intermediate (XI + XII)
              </Typography>
              Lucknow Public School, Lucknow (2017-2019)
            </li>
            <li style={{
              display:"flex",
              gap:"3em",
              alignItems:"baseline"
            }}>
              <Typography variant="h6" gutterBottom>
                High School (IX + X)
              </Typography>
              Lucknow Public School, Lucknow (2015-2017)
            </li>
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <AboutContainer>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} component={AboutCol1}>
            <ProfileImage src={sparshImage} alt="" srcSet="" />
          </Grid>
          <Grid item xs={12} md={6} component={AboutCol2}>
            <Subtitle variant="h4" id="AboutSection">
            <Typography variant="h4" className="subtitle" id="about" style={{
              textAlign:"center"
            }}>
              <h4>About me</h4>
            </Typography>
            </Subtitle>
            <Paper square>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                indicatorColor="primary"
              >
                <Tab label="Skills" value="skills"/>
                <Tab label="Education" value="education" />
              </Tabs>
            </Paper>
            <TabContentContainer>
              {
                renderTabContent(activeTab)
              }
            </TabContentContainer>
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default About;
