import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { Grid } from "@mui/system";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SchoolIcon from '@mui/icons-material/School';
import { motion, useInView } from "framer-motion";

const TimelineItemWithAnimation = ({ item, icon, isLast }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TimelineItem
    sx={{
      "&::before": {
        content: '""',
        width: isSmallScreen ? "0px" : "unset",
        position: isSmallScreen ? "absolute" : "unset",
        left: isSmallScreen ? "calc(50% - 1px)" : "unset",
      },
    }}>
      <TimelineSeparator>
        <TimelineDot color="primary" sx={{ padding: "8px" }}>
          {icon}
        </TimelineDot>
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 90 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant='H24px' color='textPrimary'>{item.title}</Typography>
          <Typography variant="body1" color="#8d8d8d" sx={{ my: 0.5 }}>
            {item.company || item.institution} / {item.period}
          </Typography>
          <Typography variant="body1" color="textSecondary">{item.description}</Typography>
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};

const WorkExperience = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const experiences = [
    {
      category: 'WORK EXPERIENCE',
      items: [
        {
          title: 'Frontend Developer',
          company: 'PokaMind',
          period: '01.2024 - 10.2024',
          description: (
            <ul style={{listStyleType:"none", paddingLeft:"10px"}}>
              <li>• Developing and improving web application using React and Typescript.</li>
              <li>• Backend development with Python when needed.</li>
              <li>• Integrating new designs from Figma to application by collaborating with designers.</li>
              <li>• Integrating the design into the application using Material UI.</li>
              <li>• Working in collaboration with back end developers.</li>
            </ul>
          ),
        },        
        {
          title: 'Full Stack Intern',
          company: 'PokaMind',
          period: '10.2023 - 12.2023',
          description: (
            <ul style={{listStyleType:"none", paddingLeft:"10px"}}>
              <li>• Developing and improving web application using React, Next.js and Typescript.</li>
              <li>• Integrating the design into the application using Bootstrap.</li>
            </ul>
          ),
        },
      ],
    },
    {
      category: 'EDUCATION',
      items: [
        {
          title: 'Bachelors Degree, Computer Engineering',
          institution: 'Cukurova University',
          period: '2017 - 2023',
          description: (
            <ul style={{listStyleType:"none", paddingLeft:"10px"}}>
              <li>• After one year of preparatory class, I transitioned to the department, where the foundations of software development were laid.</li>
            </ul>
          ),
        },
        {
          title: 'Bachelors Degree, Computer and Informatics Engineering',
          institution: 'Aveiro University',
          period: '2021 - 2022',
          description: (
            <ul style={{listStyleType:"none", paddingLeft:"10px"}}>
              <li>• During my Erasmus program at Aveiro University in Portugal, I improved both my education and English skills, which greatly helped me socially.</li>
            </ul>
          ),
        },
      ],
    },
  ];

  return (
    <Box sx={{ padding: { xs: "35px", md: "50px", backgroundColor: "#00fff212" } }}>
      <Typography variant="H38px" align="center" color="textPrimary">
        Experience
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid mb={4}
        justifySelf={"center"}
        sx={{
          backgroundColor: "#61a05f",
          width: "120px",
          height: "2px",
          position: "relative",
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-120px",
            width: "120px",
            height: "2px",
            background: "linear-gradient(to right, transparent, #fff, transparent)",
            animation: "moveLight 2.5s infinite",
          },
        }}
      >
        <style>
          {`
          @keyframes moveLight {
            0% {
              left: -120px;
            }
            100% {
              left: 120px;
            }
          }
          `}
        </style>
      </Grid>
      {experiences.map((section, index) => (
        <Box key={index} mb={4}>
          <Typography fontWeight={900} fontSize={"20px"}
            color='textSecondary'
            bgcolor={"#61a05f"}
            borderRadius={"5px"}
            width={"fit-content"}
            justifySelf={"center"}
            padding={1}
          >
            {section.category}
          </Typography>
          <Timeline
            position={isSmallScreen ? "unset" : "alternate"}
            sx={{
              "&::before": {
                content: '""',
                width: isSmallScreen ? "0px" : "unset",
                position: isSmallScreen ? "absolute" : "unset",
                left: isSmallScreen ? "calc(50% - 1px)" : "unset",
              },
            }}
          >
            {section.items.map((item, i) => (
              <TimelineItemWithAnimation
                key={i}
                item={item}
                icon={section.category === 'WORK EXPERIENCE' ? <HomeRepairServiceIcon /> : <SchoolIcon />}
                isLast={i === section.items.length - 1}
              />
            ))}
          </Timeline>
        </Box>
      ))}
    </Box>
  );
};

export default WorkExperience;
