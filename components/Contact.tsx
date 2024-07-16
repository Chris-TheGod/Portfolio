import React from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 '>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:kristjan.laane7k@gmail.com'>
          kristjan.laane7k@gmail.com
        </a>{' '}
        or trough the form below.
      </p>

      <form className='mt-10 flex flex-col'>
        <input
          type='email'
          className='h-14 px-4 rounded-lg borderBlack  transition-all '
        />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4 transition-all ' />
        <button type='submit'>
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
