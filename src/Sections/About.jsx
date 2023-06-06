import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { AboutTypo } from "../MuiComponents/Typography";
import { CustButton } from "../MuiComponents/Button";

export const About = () => {
  return (
    <Container maxWidth='xl'>
      <Box 
        sx={{ 
          flexGrow: 1, 
        }}>
        <Grid container columns={16} 
          sx={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center"  
          }}>
          <Grid item xs={8}>
            <img src="src/assets/About Image.png" alt="" />
          </Grid>
          <Grid item xs={8} 
            sx={{ 
              display: 'flex', 
              flexDirection: "column", 
              alignItems: "flex-start", 
              gap: '30px' 
            }}>
            <AboutTypo variant={'h2'} color={'secondary'}>About</AboutTypo>
            <AboutTypo variant={'body1'}>Lorem ipsum dolor sit amet consectetur. Tellus purus enim sagittis id sed. Scelerisque tellus amet malesuada ac ipsum. Mi varius orci nisl praesent vitae sed eu sed. Bibendum varius interdum nunc purus. Maecenas ipsum ipsum malesuada pretium ullamcorper ornare urna. Id sapien eleifend nunc quam. Vulputate purus aenean pellentesque massa velit viverra. Interdum feugiat ultricies amet faucibus cras justo tortor. Eget amet cursus at venenatis mattis.</AboutTypo>
            <CustButton variant={'contained'} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
