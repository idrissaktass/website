import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Grid } from "@mui/system";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSections, setVisibleSections] = useState({});
  
    const sectionRefs = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const sectionIndex = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [sectionIndex]: true }));
          } 
        },
        {
          threshold: 0.5,
        }
      );
  
      sectionRefs.current.forEach((section) => {
        observer.observe(section);
      });
  
      return () => {
        sectionRefs.current.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, []);
  
    const sectionStyle = (direction) => ({
        opacity: 0,
        transform: direction === 'left' ? 'translateX(-100px)' : 'translateX(100px)',
        transition: 'opacity 1.3s ease-out, transform 1.3s ease-out',
      });
      
      const visibleStyle = {
        opacity: 1,
        transform: 'translateX(0)',
      };
      
      const sectionDirections = ['left', 'right', 'left', 'right'];
      

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} sx={{scrollBehavior:"smooth",minHeight: '100vh', background: 'linear-gradient(to top right, rgb(0 0 0), rgb(35 35 35))'}}>
        <Box 
            sx={{ width:{xs:"95%", sm:"90%", md:"85%", lg:"80%"},
                display: 'flex',
                height:"100vh",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        <Container
          maxWidth="lg"
          ref={(el) => sectionRefs.current[0] = el} 
          sx={{
            ...sectionStyle(sectionDirections[0]),
            ...(visibleSections[0] ? visibleStyle : {}),
          }}
        >
            <Grid container spacing={4} alignItems="center" justifyContent={"space-between"}>
                <Grid container flexDirection={"column"} alignItems={"start"} gap={8}>
                    <Grid item xs={12} md={6} textAlign={"start"}>
                        <Typography 
                        fontSize={{xs:"56px", md:"48px", lg:"64px"}}
                        fontFamily={"Hagrid"}
                        sx={{ fontWeight: '500', color: 'white' }}
                        >
                        Hi, I'm{' '}
                        <span style={{ color: '#BFD49E' }}>İdris Aktaş</span>
                        </Typography>
                        <Typography fontSize={{xs:"32px", md:"24px", lg:"32px"}} fontFamily={"Hagrid"} color="white">
                            and I'm a Frontend Developer.
                        </Typography>
                    </Grid>
                <Grid display={'flex'} flexDirection={{xs:"column", sm:"unset"}} alignItems={{xs:"start", sm:"center"}} gap={2} item xs={12} md={6}>
                    <Button onClick={() => window.location.href = 'mailto:idrissaktass98@gmail.com'}
                    sx={{ backgroundColor:"transparent", border:"2px solid white", borderRadius:"15px", padding:"10px 20px 10px 20px",
                        transition: "border-color 0.5s ease",  "&:hover":{borderColor: "#BFD49E"}
                    }}
                    >
                    <Typography fontSize={{xs:"24px", md:"20px", lg:"24px"}}  color="white">Contact me</Typography>
                    </Button>
                    <Typography  fontSize={{xs:"20px", md:"20px", lg:"24px"}} color='white'>via idrissaktass98@gmail.com</Typography>
                </Grid>
                </Grid>
                <Grid width={{xs:"100%", md:"fit-content"}} fontFamily={"Hagrid"} display={{xs:"flex", md:"unset"}} justifyContent={{xs:"end", md:"unset"}}>
                    <Box 
                        component={"img"} 
                        src='/renovation.png' 
                        sx={{
                        width: {xs:"300px", sm:"350px", md:"300px", lg:"400px"}, 
                        height: "auto",
                        filter: "grayscale(50%) brightness(70%)",
                        }} 
                    />
                </Grid>
            </Grid>
        </Container>
        </Box>
        <Grid container gap={3} textAlign={"start"}
         ref={(el) => sectionRefs.current[1] = el}    
         sx={{ width:{xs:"95%", sm:"90%", md:"85%", lg:"80%"},
             ...sectionStyle(sectionDirections[1]),
             ...(visibleSections[1] ? visibleStyle : {}),
         }}>
                <Grid size={{xs:12}}>
                <Typography fontSize={{xs:"24px", md:"28px", lg:"32px"}} fontFamily={"Hagrid"} color="#BFD49E">
                About İdris Aktaş
            </Typography>
            <Typography fontSize={"20px"} fontFamily={"Hagrid"} color='white'>
                Hi there! 👋 I'm a passionate Web Developer with a degree in Computer Engineering from Cukurova University. I specialize in React, TypeScript, and the MERN Stack, and I’m constantly improving my skills to stay ahead in the ever-evolving world of web development.
                I enjoy creating user-friendly and visually appealing web applications, using tools like Material UI and Bootstrap to bring designs to life. From building movie suggestion apps to platforms for helping people connect with lost belongings, I love turning ideas into functional, meaningful projects       
                and believe in continuous growth. Each project is an opportunity to learn something new, refine my skills, and push boundaries. I'm committed to becoming the best version of myself as a developer, one step at a time.<br/>
                Thank you for visiting my website! Feel free to explore my projects and connect with me for collaboration.   
                </Typography>
                </Grid>
            <Grid mt={3} size={{xs:12}}
                height={{xs:"400px", sm:"500px", md:"60%"}} 
                overflow="hidden" 
                sx={{ objectFit:"cover",
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                }}
                >
                <Box 
                    component="img" 
                    src="/coffee.jpg" 
                    sx={{
                    width: '100%', 
                    height: 'auto',
                    }} 
                />
                </Grid>
        </Grid>
        <Grid container justifyContent={"center"} alignItems={"center"} textAlign={"start"} gap={3}
            ref={(el) => sectionRefs.current[2] = el}    
            sx={{ width:{xs:"95%", sm:"90%", md:"85%", lg:"80%"},
                height: "100vh",
                ...sectionStyle(sectionDirections[2]),
                ...(visibleSections[2] ? visibleStyle : {}),
            }} 
        >
            <Grid height={"fit-content"}>
                <Typography fontSize={{xs:"36px", md:"42px", lg:"48px"}}  fontFamily={"Hagrid"} color="white">
                    Credentials
                </Typography>
            </Grid>
            <Grid container mb={6} justifyContent={'space-between'} alignItems={'start'} >
                <Grid size={{xs:12, md:4}} mt={3}
                    height="60%" 
                    overflow="hidden" 
                    sx={{
                        display: {xs:"none", md:'flex'}, 
                        alignItems: 'center', 
                        justifyContent: 'center',
                    }}
                    >
                    <Box
                        component="img" 
                        src="/eagle.png" 
                        sx={{
                        width: '100%', 
                        height: 'auto',
                        filter: "brightness(1.2) contrast(0.7) saturate(1.5)"
                    }} 
                    />
                </Grid>
                <Grid size={{xs:12, md:6}} display={'flex'} flexDirection={"column"} gap={8}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography fontSize={{xs:"24px", md:"28px", lg:"32px"}} fontFamily={"Hagrid"} color="#BFD49E" textAlign={"start"}>
                            Education
                        </Typography>
                        <Typography fontSize={{xs:"20px", md:"20px", lg:"24px"}} fontFamily={"Hagrid"} color="white" textAlign={"end"} width={"100%"}>
                            BS Computer Engineering <br/>
                            Cukurova University
                        </Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography fontSize={{xs:"24px", md:"28px", lg:"32px"}} fontFamily={"Hagrid"} color="#BFD49E">
                            Experience
                        </Typography>
                        <Typography fontSize={{xs:"20px", md:"20px", lg:"24px"}} fontFamily={"Hagrid"} color="white" textAlign={"end"} width={"100%"}>
                            Frontend Developer <br/>
                            PokaMind
                        </Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography fontSize={{xs:"24px", md:"28px", lg:"32px"}} fontFamily={"Hagrid"} color="#BFD49E">
                            Skills
                        </Typography>
                        <Typography fontSize={{xs:"20px", md:"20px", lg:"24px"}} fontFamily={"Hagrid"} color="white" textAlign={"end"} width={"100%"}>
                            Javascript, HTML, CSS <br/>
                            React <br/>
                            MERN Stack <br/> 
                            Material UI
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{xs:12, md:4}} mt={3}
                    overflow="hidden" 
                    sx={{
                        display: {xs:"flex", md:'none'}, 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        position:"relative",
                        top:"-350px",
                    }}
                    >
                    <Box 
                        component="img" 
                        src="/eagle.png" 
                        sx={{
                        width: '100%', 
                        height: 'auto',
                        filter: "brightness(1.2) contrast(0.6) saturate(1.5)",
                        opacity:"0.7"
                    }} 
                    />
                </Grid>
            </Grid>

        </Grid>
        <Grid container gap={3} textAlign={"start"}
            ref={(el) => sectionRefs.current[3] = el}    
            sx={{ width:{xs:"95%", sm:"90%", md:"85%", lg:"80%"},
                minHeight: "120vh",
                ...sectionStyle(sectionDirections[3]),
                ...(visibleSections[3] ? visibleStyle : {}),
            }} 
            >
            <Grid size={{xs:12}}>
                <Typography fontSize={{xs:"24px", md:"28px", lg:"32px"}} fontFamily={"Hagrid"} color="#BFD49E">
                    My Practices
                </Typography>
            </Grid>
            <Grid container justifyContent={"space-between"} mb={6}>
            <Grid 
                item 
                size={{xs:12, md:5.5}}
                mt={{ xs: "20px", md: "0px" }} 
                onClick={() => window.location.href = 'https://www.lostandfoundtr.online/'}
                sx={{
                    cursor: "pointer", // Indicates clickable area
                    "&:hover": {
                    transform: "scale(1.01)", // Optional: Add hover effect for better UI
                    transition: "transform 0.2s ease",
                    },
                }}
                >
                    <Typography fontSize={{xs:"20px", md:"20px", lg:"24px"}} fontFamily={"Hagrid"} color="white">
                        Lost and Found App
                    </Typography>
                    <Grid 
                        mt={3}
                        overflow="hidden"
                        sx={{ objectFit:"cover",
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center',
                            position: 'relative',
                            height:"450px"
                        }}
                        >
                        <Box 
                            component="img" 
                            src="/lost.png" 
                            sx={{ objectFit:"cover",
                            width: '100%', 
                            height: '450px',
                            }} 
                        />
                        <Typography paddingBottom={{xs:"5px", sm:"15px", md:"5px", lg:"15px"}} fontFamily={"Hagrid"}  fontSize={{xs:"20px", md:"20px", lg:"24px"}}
                            textAlign={"center"}
                            sx={{
                            width:"100%",
                            background: 'linear-gradient(to top, rgb(191, 212, 158), rgb(35 35 35 / 0%))',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            }}
                        >
                            Developed a full-stack lost and found web application to help users post, search, and find lost items or pets. 
                        </Typography>
                        </Grid>

                </Grid>
                <Grid 
                    item 
                    size={{xs:12, md:5.5}}
                    mt={{ xs: "20px", md: "0px" }} 
                    onClick={() => window.location.href = 'https://www.cinescope.online'}
                    sx={{
                        cursor: "pointer", // Indicates clickable area
                        "&:hover": {
                        transform: "scale(1.01)", // Optional: Add hover effect for better UI
                        transition: "transform 0.2s ease",
                        },
                    }}
                    >
                    <Typography fontSize={{xs:"20px", md:"20px", lg:"24px"}} fontFamily={"Hagrid"} color="white">
                        Movie App
                    </Typography>
                    <Grid 
                        mt={3}
                        overflow="hidden"
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center',
                            position: 'relative',
                            height:"450px"
                        }}
                        >
                        <Box 
                            component="img" 
                            src="/movie.png" 
                            sx={{ objectFit:"cover",
                            width: '100%', 
                            height: '450px',
                            }} 
                        />
                        <Typography paddingBottom={{xs:"5px", sm:"15px", md:"5px", lg:"15px"}} fontFamily={"Hagrid"} fontSize={{xs:"20px", md:"20px", lg:"24px"}}
                            textAlign={"center"}
                            sx={{
                            width:"100%",
                            background: 'linear-gradient(to top, rgb(191, 212, 158), rgb(35 35 35 / 0%))',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            paddingInline:"7"
                            }}
                        >
                            A movie application that allows users to find movies, enhancing their experience with personalized suggestions.
                        </Typography>
                        </Grid>
                </Grid>
            </Grid>
            <Grid container size={{xs:12}} justifyContent={'center'} mb={2}>
                <Typography  textAlign={'center'} color='white' fontFamily={"Hagrid"} fontSize={{xs:"20px", md:"20px", lg:"24px"}} fontStyle={"italic"}>
                    Growth is the journey itself; I am not perfect, but I am always striving for better.
                </Typography>
            </Grid>
        </Grid>
    </Box>
  );
};

export default Home;
