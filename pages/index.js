import React from 'react'
import Link from 'next/link';
import {
    WhatsAppOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    GatewayOutlined,
    GoogleOutlined,
    GithubOutlined
    

}from '@ant-design/icons'



function index() {
  return (
    <div className='main'>
    <div className='nav'>
        <p className='name'>TASMIYAH HUSSAIN</p>
        <ul className='navbar'>
          <Link href={"#sec-1"}><li>About</li></Link>
         < Link href={"#sec-2"}><li>Services</li></Link>
          <Link href={"#sec-3"}><li>Porfolio</li></Link>
          <Link href={"#footer"}><li>Contact</li></Link>
          
        </ul>
      </div>

      <div  id="sec-1">

        <p className='intro'>

          <b className='title'>Hello</b> <br />

          I'm Tasmiyah hussain

          MERN STACK DEVELOPER

          I am a Junior MERN Stack Developer

          having strong knowledge in MongoDB,

          Express,Node.js, React and Nextjs
        </p>

        <p className='image'>
          <img className="img" src="/about.jpg" alt="" />
        </p>

      </div>


      <div id="sec-1">
        <p className='image'>
          <img className='img2' src="/about2.jpg" alt="" />
        </p>
        <p className='intro'>
          <b className='title'> About Me</b> <br />

          Enthusiastic MERN Stack Developer and perpetual learner,
          passionate about crafting seamless web experiences.
          Proficient in HTML, CSS, JavaScript, ReactJS, Next.js,
          Bootstrap, Node.js, Express, MongoDB, and Firebase.
          Committed to turning ideas into interactive,
          user-friendly applications
        </p>
      </div>


      <h2 className='title2'>Services</h2>
      <div id="sec-2">
        

        <div className='service' >
          <img className='service-img' src="/service1.png" alt="" />
          <h4>
          Custom Website Development
          </h4>
          <p>
          Description: Create tailor-made websites from scratch or enhance existing ones to meet specific client requirements. Leverage your expertise in HTML, CSS, JavaScript, React.js, and Next.js to build responsive and user-friendly interfaces
          </p>
        </div>


        <div className='service'>
        <img className='service-img' src="/service2.png" alt="" />
          <h4>Front-End Development</h4>
          <p>Description: Transform design concepts into interactive and visually appealing web interfaces. Utilize your proficiency in HTML, CSS, and JavaScript along with frameworks like React.js to deliver seamless user experiences.</p>
        </div>

        <div className='service'>
        <img className='service-img' src="/service3.jpg" alt="" />
          <h4>
          Full-Stack Development
          </h4>
          <p>Description: Provide end-to-end web solutions encompassing both front-end and back-end development. Leverage your knowledge of MERN (MongoDB, Express.js, React.js, Node.js) stack to build dynamic and scalable applications.</p>
        </div>


        <div className="service">
        <img className='service-img' src="/services4.png" alt="" />
          <h4>
          Database Design and Management
          </h4>
          <p>Description: Design and implement efficient database structures using MongoDB and Firebase. Ensure data integrity, performance, and security while optimizing queries for smooth application functionality.</p>
        </div>


        <div className="service">
        <img className='service-img' src="/service5.png" alt="" />
          <h4>RESTful API Development:</h4>
          <p>Description: Create robust APIs using Node.js and Express.js for seamless communication between the front-end and back-end of applications. Implement RESTful principles for efficient data exchange.</p>
        </div>


        <div className="service">
        <img className='service-img' src="/service.png" alt="" />
          <h4>Customized Form with functionality</h4>
          <p>Description: Design and develop custom forms tailored to your specific needs, including contact forms, login forms, and signup forms</p>
        </div>
      </div>

      <h2 className='title2'>Portfolio</h2>
      <div id="sec-3">
        
        <div className='portfolio'>
          <img src="/kidswish.jpeg" alt="" />
         <p className='link'> <a href="https://tasmiyahh.github.io/kids_wish./">Github URL</a></p>
          <p className='link'><a href="https://github.com/tasmiyahh/kids_wish.">Github Repo</a></p>
        </div>

        <div className='portfolio'>
          <img src="/cal.jpeg" alt="" />
          <p className='link'> <a href="https://super-cool-site-by-tasmiyahh.netlify.app/">Github URL</a></p>
          <p className='link'><a href="https://github.com/tasmiyahh/calculator-with-react">Github Repo</a></p>
        </div>

        <div className='portfolio'>
          <img src="/intaclone.jpeg" alt="" />
          <p className='link'> <a href="https://instaproapp.netlify.app/">Github URL</a></p>
          <p className='link'><a href="https://github.com/tasmiyahh/insta-clone-with-react">Github Repo</a></p>
        </div>

        <div className='portfolio'>
          <img src="/notesapp.jpeg" alt="" />
          <p className='link'> <a href="https://notes-pro-app-react.netlify.app/">Github URL</a></p>
          <p className='link'><a href="https://github.com/tasmiyahh/notes-app--with-react">Github Repo</a></p>
        </div>
        <div className='portfolio'>
          <img src="/recipeapp.jpeg" alt="" />
          <p className='link'> <a href="">Github URL</a></p>
          <p className='link'><a href="https://github.com/tasmiyahh/recipe-app">Github Repo</a></p>
        </div>
        <div className='portfolio'>
          <img src="/one.jpeg" alt="" />
          <p className='link'> <a href="">Github URL</a></p>
          <p className='link'><a href="https://github.com/tasmiyahh/nextjs-shop-project">Github Repo</a></p>
        </div>
        
      </div>

      <div id='footer'>
<p>
    Tasmiyah hussain
</p>
<p>Home | About | Services | Portfolio | Contact</p>
<p >
<WhatsAppOutlined  className='icon'/>
<LinkedinOutlined className='icon'/>
<GoogleOutlined  className='icon'/>
<GithubOutlined className='icon'/>
<FacebookOutlined className='icon'/>
</p>

<p className='hr'></p>
<p>
Copyright@2023 tasmiyahhussain | All rights reserved
</p>

    </div>

    </div>

  )
}

export default index;