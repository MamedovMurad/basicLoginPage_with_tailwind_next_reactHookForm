
'use client'
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import InputUI from '../ui/form/input';
import { login } from '@/services/login';
import { useForm, SubmitHandler } from "react-hook-form";

interface FirstStepProps {
  callBack: (param: string, email: string) => void,
  motion: (param: boolean) => void
}

const FirstStep: React.FC<FirstStepProps> = ({ callBack, motion }) => {
  const [isLoading, setIsloading] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<{ email: string, password: string }>();
  const onSubmit: SubmitHandler<{ email: string, password: string }> = (params) => {
    setIsloading(true)

    motion(true)
    setTimeout(() => {

      setIsloading(false)
      callBack('1234', params.email)
      motion(false)
    }, 600);

  }




  return (
    <div>
      <form action="" className="flex-col space-y-5 box-border" onSubmit={handleSubmit(onSubmit)}>
        <div  >
          <InputUI type='text' placeholder='Email' register={register} name="email" error={errors.email ? true : false} />
        </div>
        <div>
          <InputUI type='password' placeholder='Password' register={register} name="password" error={errors.password ? true : false} />
        </div>
        <div>
          <button className=" cursor-pointer w-full border-0 bg-green-500  text-white font-bold py-3 px-4 rounded">{!isLoading ? "SEND CODE" : "LOADING ..."}</button>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;