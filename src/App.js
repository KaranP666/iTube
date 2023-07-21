import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Box is nothing but a DIV elemenet
import { Box } from '@mui/material'; 
import { Navbar , Feed , VideoDetail , ChannelDetail , SearchDetail} from './components';


const App = () =>(
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element= {<Feed />}/>
            <Route path="/video/:id" element= {<VideoDetail />}/>
            <Route path="/channel/:id" element= {<ChannelDetail />}/>
            <Route path="/search/:searchTerm" element= {<SearchDetail />}/>
        </Routes>

    </Box>
    </BrowserRouter>
  )


export default App