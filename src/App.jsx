import React from "react";
import Header from "./Pages/Header";
import FindJobs from "./Pages/FindJobs";
import Companies from "./Pages/Companies";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import { Routes,Route } from "react-router-dom";


const data=[
  {id:1,
   photo:"https://i.pinimg.com/1200x/b8/c9/df/b8c9dff3d198c53eb3420e1e442fd757.jpg",
   name:"Senior Frontend Developer",
   pragra:"TechVision Inc.",
   location:"USA",
   time:"Full-time",
   money:"$120,000 - $150,000",
   Ago:"2 days ago"
  },

  {id:2,
   photo:"https://i.pinimg.com/736x/ea/25/b9/ea25b95af7a45615c15e1d2f37a50a15.jpg",
   name:"UX/UI Designer",
   pragra:"DesignHub.",
   location:"Somalia",
   time:"Part-time",
   money:"$90,000 - $120,000",
   Ago:"1 week ago"
  },

    {id:3,
   photo:"https://i.pinimg.com/1200x/e4/21/fb/e421fb110c9c6ebd8c0764323004d623.jpg",
   name:"Product Manager",
   pragra:"InnovateCorp",
   location:"UK",
   time:"Full-time",
   money:"$110,000 - $140,000",
   Ago:"2 days ago"
  },

  {id:4,
   photo:"https://i.pinimg.com/736x/27/16/67/271667c89c2d89510b4ee93becb0eeed.jpg",
   name:"Backend Engineer",
   pragra:"CloudTech Solutions",
   location:"EAU",
   time:"Full-time",
   money:"$110,000 - $140,000",
   Ago:"3 days ago"
  },
  
  {id:5,
   photo:"https://i.pinimg.com/1200x/0c/c7/93/0cc7938a8466cfffab0426acfde762c5.jpg",
   name:"Data Scientist",
   pragra:"DataWorks AI",
   location:"Turkey",
   time:"Full-time",
   money:"$90,000 - $100,000",
   Ago:"5 days ago"
  },

  {id:6,
   photo:"https://i.pinimg.com/736x/8d/59/28/8d59287fb52e85e9fc6845a35c81a7df.jpg",
   name: "DevOps Engineer",
   pragra:"InfraCore",
   location:"Remote",
   time:"Part-time",
   money:"$125,000 - $155,000",
   Ago:"4 days ago"
  },
 
]

function App() {
  return (
    <>
    <Header />
        <Routes>
          <Route path="/" element={<FindJobs data={data} />} />
          <Route path="/Companies" element={ <Companies />} />
          <Route path="/AboutUs" element={<AboutUs />} />
           <Route path="/Contact" element={<Contact/>} />
        </Routes>
     
    
    </>
  );
}

export default App;
