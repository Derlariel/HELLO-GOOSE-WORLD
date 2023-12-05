import React from 'react'
import './css/Footer.css'

import goose_help from '../assets/nav/help.png'

const Nav = () => {
  return (
    <>
      <div id='footer' className='flex flex-row justify-center items-stretch pl-8 pr-8 pt-8 pb-8 gap-11 mt-11'>
        <div className='flex flex-row basis-1/2 rounded-2xl p-2'>
          <div className='flex flex-row-reverse basis-1/2'>
            <img src={goose_help} width='75%'/>
          </div>
          <div className='flex flex-col justify-center items-start basis-1/2'>
            <p className='text-2xl font-bold mb-2'>Help Center</p>
            <ul className='list-disc ml-7' style={{color: '#DD9973'}}>
              <li>How to use</li>
              <li>Report System Problem</li>
              <li>Report Payment Problem</li>
              <li>What is nature coins</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='basis-1/2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d969.2757463506708!2d100.49585941606674!3d13.651498908399848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing%20Mongkut%E2%80%99s%20University%20of%20Technology%20Thonburi%20(KMUTT)!5e0!3m2!1sen!2sth!4v1701788211252!5m2!1sen!2sth" width='100%' height='100%' className='rounded-2xl'></iframe>
        </div>
      </div>
    </>
  )
}

export default Nav