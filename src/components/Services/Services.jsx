import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaUsers,
  FaPenNib,
  FaYoutube,
  FaImage,
  FaRocket,
  FaSearch,
  FaGlobe
} from "react-icons/fa";

import {
  SiFigma,
  SiCanva,
  SiGoogleanalytics
} from "react-icons/si";

import "./Services.css";


export default function Services() {


const servicesData = [

{
id:1,
icon:<FaGlobe color="#2563eb"/>,
title:"Website Development",
description:
"Creating modern, responsive, and SEO-friendly websites with optimized performance and professional designs."
},


{
id:2,
icon:<FaLaptopCode color="#7c3aed"/>,
title:"Web Application Development",
description:
"Building scalable web applications with secure backend systems, APIs, databases, and interactive user experiences."
},


{
id:3,
icon:<SiFigma color="#f24e1e"/>,
title:"UI/UX Design",
description:
"Designing user-friendly interfaces, wireframes, prototypes, and digital experiences focused on usability."
},


{
id:4,
icon:<FaPaintBrush color="#ec4899"/>,
title:"Banner & Graphic Design",
description:
"Creating attractive banners, promotional graphics, social media posts, and visual designs."
},


{
id:5,
icon:<FaBullhorn color="#f59e0b"/>,
title:"Influencer Marketing",
description:
"Connecting brands with influencers and managing promotional campaigns to increase reach and engagement."
},


{
id:6,
icon:<FaUsers color="#1877f2"/>,
title:"Social Media Management",
description:
"Managing social platforms, content planning, audience engagement, and growth strategies."
},


{
id:7,
icon:<FaPenNib color="#8b5cf6"/>,
title:"Content Creation",
description:
"Creating engaging content including blogs, posts, scripts, and marketing materials."
},


{
id:8,
icon:<FaYoutube color="#ff0000"/>,
title:"YouTube Management",
description:
"Managing YouTube channels, optimization, growth strategy, and audience engagement."
},


{
id:9,
icon:<FaImage color="#14b8a6"/>,
title:"Thumbnail Design",
description:
"Designing high-click-rate thumbnails for YouTube and social media platforms."
},


{
  id: 10,
  icon: <FaRocket color="#16a34a" />,
  title: "Performance Optimization",
  description:
    "Optimizing website speed, responsiveness, accessibility, and overall performance to deliver a fast, seamless, and engaging user experience."
},


{
id:11,
icon:<SiCanva color="#00c4cc"/>,
title:"Brand Identity",
description:
"Building professional brand identity, logos, and digital presence for businesses."
},


{
id:12,
icon:<FaSearch color="#4285f4"/>,
title:"SEO Optimization",
description:
"Improving search rankings through technical SEO, keyword research, and website optimization."
},


{
id:13,
icon:<SiGoogleanalytics color="#e37400"/>,
title:"Analytics & Growth",
description:
"Tracking performance using analytics tools and improving digital growth strategies."
},


{
id:14,
icon:<FaCode color="#32c06f"/>,
title:"Custom Software Solutions",
description:
"Developing customized software solutions according to business requirements."
}

];



return (

<section id="services" className="services-section">


<div className="services-container">


<motion.div

className="services-header"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>


<h2 className="services-title">

Digital Solutions That Help Businesses Grow

</h2>



<p className="services-subtitle">

I create scalable digital solutions by combining modern web development,
UI/UX design, branding, and digital marketing strategies.
From websites and web applications to creative designs and growth-focused
marketing, I help businesses build strong online identities and achieve
measurable success.

</p>


</motion.div>




<div className="services-grid">


{
servicesData.map((service,index)=>(


<motion.div

className="service-card"

key={service.id}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:0.5,
delay:index*0.05
}}



whileHover={{
scale:1.05,
y:-8
}}


>


<div className="service-icon-container">

{service.icon}

</div>



<h3 className="service-card-title">

{service.title}

</h3>



<p className="service-card-description">

{service.description}

</p>


</motion.div>


))

}


</div>



</div>


</section>


);

}