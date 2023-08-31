import React from 'react';
import styles from './index.module.css';
interface InputUIProps {
  type:string,
  placeholder:string,
  register:any,
  name:string,
  error:boolean,

}

const InputUI: React.FC<InputUIProps> = ({type,placeholder, register ,name, error }) => {
  return (
    <div> 
        <input type={type} placeholder={placeholder}
     {...register&& register(name,{required:true})} 
         className={error?"error-input ":"normal-input "} />
    

    </div>
  );
};

export default InputUI;