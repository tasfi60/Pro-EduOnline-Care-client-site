import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className='faq-style container my-5 py-5'>
        <h2 className='mb-4'>TOP FAQs for online course websites</h2>
        <Accordion defaultActiveKey="0" className='w-75 container'>
  <Accordion.Item eventKey="0" >
    <Accordion.Header  >1. What is online learning like?</Accordion.Header>
    <Accordion.Body>
    For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they will have to decide which is best for them. Then, explain the types of courses you offer and how your online programs work to give them all the information they need. This not only gives them information, but it increases their trust because you are being transparent and giving them straightforward answers. 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>2. Does online learning really work?</Accordion.Header>
    <Accordion.Body>
    There’s always a skeptic, and when it comes to online learning, there are often several of them. Everyone wants to know if online courses “really work”—and that’s a hard question to answer because there are several factors to consider. On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. You should be able to explain these things to people so that they know what they’re getting into. Then, you can invite them to contact you to discuss whether it would be right for them. 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>3. What are the requirements to take the courses or sign up with your website?</Accordion.Header>
    <Accordion.Body>People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those. If payment or deposits are required, explain that, as well. Make sure that people know exactly what they need to do to take online courses from you, no matter what those courses might be. 
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header>4. How long does each course take?</Accordion.Header>
    <Accordion.Body>Some online courses are just a few hours long, while others last a few months. Depending on the type of online learning that you offer, your courses may have their own variable lengths. Explain to people the types of courses that you have available and what the time frame is for each one. If you offer self-paced learning, this is another place to reiterate that and reassure people that you can help them learn on their own time.It could also be helpful to link to your course catalog or course pages here so that people can see the exact specifications of the course(s) they are considering taking from your website. 
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="4">
    <Accordion.Header>5. How much do courses cost?</Accordion.Header>
    <Accordion.Body>Even when it comes to education and training, people want to be careful with their money. Some people are on a tight budget. Others just want to be mindful of what they spend. Either way, everyone is going to want to know how much online courses are going to cost. If you have a set list of prices, provide those here. You can also advise whether there are payment plans or financial assistance, or if you work with any type of student loan funding.This is also a great place to link to your pricing page or to course pages where you list the course requirements and costs, allowing people to further their research without having to find the information on their own. 
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="5">
    <Accordion.Header>6. Will I receive a certificate at the end of the course?</Accordion.Header>
    <Accordion.Body>Yes. Each student who completes a 12+ hour course will receive a certificate of completion..
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header>7. Which Programming language is the best to Learn first?</Accordion.Header>
    <Accordion.Body>Most of our courses are aimed at people new to programming. In general, we would recommend you consider our Python, C++ and C courses as the best courses to start if you have no previous programming exposure.
    </Accordion.Body>
  </Accordion.Item>

  



         </Accordion>

         

    </div>
    );
};

export default FAQ;