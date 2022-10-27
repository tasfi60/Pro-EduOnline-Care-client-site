import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';


const Blog = () => {
    return (
        <div className=' container my-5 py-5 blog-style'>
        <h2>Important Questions</h2>
        <Accordion defaultActiveKey="0" className='w-50 container'>
  <Accordion.Item eventKey="0" >
    <Accordion.Header  >what is cors?</Accordion.Header>
    <Accordion.Body>
    Cross-origin resource sharing (CORS) is a mechanism that allows a client application to request restricted resources hosted on server from a different origin. These resources may include; web fonts, videos, scripts, iframes, images and stylesheets. By default, client applications making AJAX requests are only allowed to request resources that live on the same origin as the location where the client application is running.CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. If an application running on different domain tries to make a XMLHttpRequest to a different domain, it will be blocked by same-origin policy.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
    <Accordion.Body>
    Firebase provides detailed documentation and cross-platform SDKs to help us build and ship apps on Android, iOS, the web, C++, and Unity.Benefits of using Firebase:
    <ol><b>Google Analytics For Firebase: </b> Google Analytics for Firebase allows you to track your users’ journey through realtime and custom reporting.</ol>
    <ol><b>Realtime Database & Firestore: </b>Firebase was originally developed to be a realtime database, and today that is still one of its key features.</ol>
    <ol><b>Authentication: </b>Firebase allows users to authenticate with their phone number, email, Google,Facebook accounts and so on. </ol>
    <ol><b>Crashlytics: </b>Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality.</ol>
    <ol><b>Free Use of Dynamic Links: </b>Firebase Dynamic Links are smart URLs that enable marketers to promote the app across various external channels, such as social media, email, web, and more found here. One of the best features of dynamic links is the fact that they are usable by both app users and those that don’t have the app installed. </ol>

    <div>
        Other options to implement Authentication are:
          <li>STYTCH</li>
          <li>Ory</li>
          <li>Supaba</li>
          <li>Okta</li>
          <li>PingIdentity</li>
          <li>Keycloak</li>
          <li>Frontegg</li>
          <li>Authress</li>
          <li>Auth0</li>
          <li>Amazon Cognito</li>
          <li>OneLogin</li>
    </div>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>How does the private route work?</Accordion.Header>
    <Accordion.Body>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). 
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
    <Accordion.Body>Node JS is a JavaScript runtime environment.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. 
    <br /> <br />
    Node accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.Node.js basically works on two concept: Asynchronous,Non-blocking I/O.
    </Accordion.Body>
  </Accordion.Item>



         </Accordion>

         

    </div>
    
    );
};

export default Blog;