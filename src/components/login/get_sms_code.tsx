
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

interface SmsCodeInputProps{
email:string
}
const SmsCodeInput: React.FC<SmsCodeInputProps> = ({email}) => {
  const [codeInputs, setCodeInputs] = useState<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    setCodeInputs(Array.from({ length: 6 }, () => null));
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value && index < codeInputs.length - 1) {
      codeInputs[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && index > 0 && !event.currentTarget.value) {
      codeInputs[index - 1]?.focus();
    }
  };

  return (
    <div>
      <div>
        <p className="text-center text-base ">Enter the one-time access code sent to the email you entered</p>
        <p className='text-center font-semibold '>{email} <a href="#" className=' font-normal'>Change</a></p>
        <p>SMS code</p>
      </div>
      <form action="" className='flex-col space-y-5 box-border py-1'>
        <div className="flex justify-between">
          {codeInputs.map((inputRef, index) => (
            <input
              key={index}
              ref={(ref) => (codeInputs[index] = ref)}
              type="text"
              maxLength={1}
              className=" w-8 h-8  outline-none border rounded border-gray-200 px-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <div>
          <button className=" cursor-pointer w-full border-0 bg-green-500  text-white font-bold py-3 px-4 rounded">LOGIN</button>
        </div>
      </form>

    </div>
  );
};

export default SmsCodeInput;