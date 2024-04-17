import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '../Button';
import { plant } from '../../assets/images';
import emailjs from '@emailjs/browser';

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(${plant});
  background-size: cover;
  background-position: center;
  margin: 0px;
  padding: 0;

  h2 {
    margin-top: 30px;
    text-align: center;
    font-weight: 300;
  }
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
    padding: 0.5em;

    input,
    textarea,
    select {
      padding: 8px;
      margin-top: 0.5rem;
      border: 1px solid grey;
    }
  }
`

const StyledButton = styled.button`
background: #636c59;
border: none;
padding: 14px 24px;
cursor: pointer;
width: 100px;
color: #fff;
font-size: 14px;
border-radius: 50px;
margin: auto;

&:hover {
  transform: translateY(-2px);
}  
`

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'service') { // 检查是否是选择服务的select
      setForm({ ...form, service: value }); // 保存选择的服务值
    } else {
      setForm({ ...form, [name]: value }); // 其他情况正常保存值
    }
    console.log(name, value);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form)

    emailjs.send(
      'service_a9joydg', 
      'template_snguf1e',
      {
        from_name: form.name,
        to_name: 'Xinqi',
        from_email: form.email,
        to_email: 'xinqiy717595@gmail.com',
        message: form.service+ ": "+ form.message,
      },
      'EVto5k5rGf2YyPw20'
    ).then(() => {
      setLoading(false);
      console.log("send");
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: '',
        email: '',
        service: '',
        message: '',
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.')
      })
    })
  }

  
  return (
    <FormSection>
      <h2>Send A Message</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <FormBody>
          <label>
            <span>Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
            />
          </label>
          <label>
            <span>Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
            />
          </label>
          <label>
            <span>Select Service</span>
            <select required onChange={handleChange} name='service'>
              <option disabled selected>Select Service</option>
              <option value='makeup'>化妆</option>
              <option value='microblading'>纹绣</option>
              <option value='spa'>SPA</option>
            </select>
          </label>
          <label>
              <span>Your Message</span>
              <textarea 
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                required
              />
            </label>

            <StyledButton
              type="submit"
              primary
            >
              {loading ? 'Sending...' : 'Send'}
            </StyledButton>
          </FormBody>
      </form>
    </FormSection>
  )
}

export default ContactForm
