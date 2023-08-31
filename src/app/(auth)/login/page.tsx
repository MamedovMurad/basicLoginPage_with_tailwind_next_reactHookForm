'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import FirstStep from '@/components/login/first_step';
import SecondStep from '@/components/login/get_sms_code';
import { ArrowSvg } from '@/svg/arrowSVG';
import { MediaIco } from '@/utils/mediaIcon';
import { motion,AnimatePresence  } from "framer-motion";
interface LoginProps {

}

const Login: React.FC<LoginProps> = ({ }) => {
  const [smsCode, setSmsCode] = useState<null | string>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')


  function handleSmsCode(param: string | null, email: string) {
    setSmsCode(param)
    setEmail(email)
  }

  function handleBackButton() {

    setIsOpen(true)

    setTimeout(() => {
      setSmsCode(null)
      setIsOpen(false)
    }, 600);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0.2, x: '-100%' },

  }
  return (
    <AnimatePresence>
 <motion.div className='p-6 min-h-fit	' initial={{ opacity: 0, x: !isOpen ? '-100%' : '0' }}

animate={{ opacity: 1, x: isOpen ? '-100%' : 0 }}
exit={{ opacity: 1, x: "100%" }}
transition={{ duration: 1 }}
>
<header >
  <div className="relative flex  items-center justify-center">
    {
      smsCode && <div className=" absolute left-2 cursor-pointer" onClick={handleBackButton}>
        <span className="inline-block rotate-90"><ArrowSvg /></span> Back</div>
    }
    <Image
      src="/logo/fs-head-logo.png"
      width={122}
      height={70}
      alt="Picture of the author"
    />
  </div>
  <h2 className="text-green-500 font-medium text-2xl text-center">Welcome</h2>
</header>
<main>
  {
    !smsCode ? <FirstStep callBack={handleSmsCode} motion={setIsOpen} /> : <SecondStep email={email} />
  }
</main>

<div>
  <h5 className='text-center text-sm'>Need assistance? <a href="#" className='font-medium'>Call us</a></h5>
</div>

{
  !smsCode &&
  <>
    <hr />
    <footer>
      <h6 className="font-medium text-center text-sm	 my-3 text-gray-400">FOLLOW US IN SOCIAL MEDIA</h6>
      <div className='flex justify-center space-x-6'>
        {MediaIco().map(item => (
          <span className=" rounded bg-gray-400 w-6 h-6 flex items-center justify-center" key={item.key}>{item}</span>
        ))}
      </div>
    </footer>
  </>
}
</motion.div>
  </AnimatePresence>
   
  );
};

export default Login;