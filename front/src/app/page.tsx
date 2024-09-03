import Image from "next/image"

export default function Landing() {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <Image
        alt="Jobs&Wozniak"
        src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/12/apple-1-construido-jobs-wozniak-1976-2548551.jpg?tf=3840x"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div> 
      <div className="absolute text-center text-white bottom-10 font-myriadprolight w-full p-7 z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">“La innovación distingue a los líderes de los seguidores”</h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-2">- Steve Jobs</p>
      </div>
    </div>
  );
}; 