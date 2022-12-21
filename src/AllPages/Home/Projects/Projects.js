/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import logo1 from '../../../images/py.webp';
import logo2 from '../../../images/algo.jpg';
import logo3 from '../../../images/php.jpg';
import logo4 from '../../../images/html.webp';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import './Projects.css';




const Projects = () => {
   
    return (
        <>
              <h3 className='my-5 fs-2 fw-bolder title container font-style animate-charcter'>Popular Courses</h3>
              <div className='project-container container font-style' id='projects'>
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.5s, border 0.8s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: ' scale(1.1)',
            
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })} className='hover my-2'
      >
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src={logo1}
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            
          <div className='container'>
            <h5  className='a2 fs-6 fw-bold mb-4'>Introduction To Python Programming</h5>   
           <small><p className='a1'>Price: 20$<br/><button className='btn mb-4 mt-3'>Purchase</button> </p>
          </small>    
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.5s, border 0.8s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: ' scale(1.1)',
            
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })} className='hover my-2'
      >
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
           
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src={logo2}
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            
            <div className='container margin'>
            <h5  className='a2 fs-6 fw-bold mb-3'>Data Structure and Algorithm</h5>   
           <small><p className='a1 mt-4'>Price: 50$<br/><button className='btn mb-4 mt-3'>Purchase</button></p></small>    
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.5s, border 0.8s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: ' scale(1.1)',
            
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })} className='hover my-2'
      >
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
           
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src={logo3}
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            
             
          <div className='container'>
            <h5  className='a2 fs-6 fw-bold mb-4'>Introduction to PHP & MYSQL</h5>   
           <small><p className='a1 mb-5 mt-4'>Price: 10$<br/><button className='btn mb-2 mt-3'>Purchase</button></p></small>    
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.5s, border 0.8s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: ' scale(1.1)',
            
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })} className='hover my-2'
      >
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
           
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src={logo4}
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            
            <div className='container margin1'>
            <h5  className='a2 fs-6 fw-bold mb-4'>Introduction to HTML & CSS</h5>   
            <small><p className='a1'>Price: 20$<br/><button className='btn mt-3'>Purchase</button>
            </p></small>      
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
 
  
  
       </div>
        
        </>
      
    );
};

export default Projects;