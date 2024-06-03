import Form from "./form";
import Image from 'next/image'
import background from '../../../public/back_2.jpg'

export default function Login() {
  return (
    <main className="w-full">
      <div className="fixed -z-10 -mt-14 w-full h-full">
        <Image 
          src={background}
          fill={true}
          alt="Cosmonaut"/>
      </div>
      <Form/>
    </main>
  );
}
