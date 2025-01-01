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
          title: 'Senior Developer',
          company: 'Company Name',
          period: '2018 - Current',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'Junior Developer',
          company: 'Company Name',
          period: '2013 - 2015',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'UI/UX Designer',
          company: 'Company Name',
          period: '2010 - 2012',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    },
    {
      category: 'EDUCATION',
      items: [
        {
          title: 'Masters Degree',
          institution: 'University Name',
          period: '2007 - 2009',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'Bachelors Degree',
          institution: 'University Name',
          period: '2002 - 2008',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'Diploma Course',
          institution: 'College Name',
          period: '1999 - 2001',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'Graduation',
          institution: 'College Name',
          period: '1994 - 1998',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    },
  ];

  return (
    <Box sx={{ padding: { xs: "35px", md: "50px", backgroundColor: "#fffbfa" } }}>
      <Typography variant="H38px" align="center" color="textPrimary">
        Experience
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid mb={4}
        justifySelf={"center"}
        sx={{
          backgroundColor: "#f06262",
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
            bgcolor={"#f06262"}
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
