import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import mailingServices from '../services/mailingServices';

// Define Zod schema for validation
const formSchema = z.object({
  first_name: z.string().min(1, 'Le prénom est requis'),
  last_name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Adresse e-mail invalide'),
  phone_number: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro de téléphone invalide'),
});

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  });
  const [errors, setErrors] = useState({});

  // Load form data from local storage on component mount
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  // Save form data to local storage on form data change
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data with Zod
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      // Extract validation errors
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    try {
      await mailingServices.sendFormData(formData);
      alert('Form submitted successfully!');

      // Reset form data and errors
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
      });
      setErrors({});
      localStorage.removeItem('formData'); // Clear saved form data
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div id="form-section" className='max-w-5xl mx-auto p-4 py-10 sm:py-28'>
      <div className='bg-logo py-20 '>
        <div className='flex justify-between gap-16 '>
          <div className='bg-secondary-80 flex-col gap-6 justify-between shadow-lg p-10 rounded-[36px] text-start hidden lg:flex text-primary-100'>
            <h2 className='text-7xl font-dm-display font-semibold '>Participez&nbsp;à <br></br>l'aventure</h2>
            <p>© 2024 All Rights Reserved, Bookish Inc.</p>
          </div>
          <div className='bg-secondary-80 flex flex-col gap-6 justify-between shadow-lg p-10 rounded-[36px] text-start w-full text-primary-100'>
            <h2 className='text-6xl font-dm-display font-semibold block lg:hidden'>Participez à l'aventure</h2>

            {/* <div className='bg-secondary-80 flex-col gap-6 justify-between shadow-lg p-10 rounded-[36px] text-start hidden lg:flex c'>
            <h2 className='text-7xl font-dm-display font-semibold '>Participez&nbsp;à <br></br>l'aventure</h2>
            <p>© 2024 All Rights Reserved, Bookish Inc.</p>
          </div>

          <div className='bg-secondary-80 flex flex-col gap-6 justify-between shadow-lg p-10 rounded-[36px] text-start w-full text-primary-100'>

            <h2 className='text-6xl font-dm-display font-semibold  block lg:hidden'>Participez à l'aventure</h2> */}

            <p>Envie de contribuer à l'évolution de Bookish ? Partagez vos retours en testant l'application.</p>
            <form className='flex flex-col sm:flex-row gap-8 items-end' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-2 w-full'>
                <div className='flex gap-8 w-full'>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="last_name" className='label-form'>Nom</label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      className='input-form'
                      onChange={handleChange}
                      value={formData.last_name}
                    />
                    {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="first_name" className='label-form'>Prénom</label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      className="input-form"
                      onChange={handleChange}
                      value={formData.first_name}
                    />
                    {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}
                  </div>
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="email" className='label-form'>Adresse e-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className='input-form'
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="phone_number" className='label-form'>Téléphone</label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    required
                    className='input-form'
                    onChange={handleChange}
                    value={formData.phone_number}
                  />
                  {errors.phone_number && <p className="text-red-500">{errors.phone_number}</p>}
                </div>
              </div>
              <button type="submit" className='py-2 px-4 bg-primary-100 text-white-variant rounded-full h-fit hover:bg-primary-80 transition-colors'>Envoyer</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
