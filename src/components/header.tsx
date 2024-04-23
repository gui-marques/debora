 import Logo from "../../assets/logo-dc.svg";
 import Top from "../../assets/top.png";


 export function Header() {
  return (
    <div className="w-1/2 mx-10 justify-between items-center  border-b-[1px] border-txt border-lightTextgrid justify-items-center text-txt">
      <div className="">
        <img
          className="w-[320px] md:w-[320px] pt-10"
          src={Logo}
          alt=""
        />
        <div className='flex justify-between'>
          <p className='text-1xl pt-10 pb-4'>Minha missão</p>
          
          {/* <div className='flex-row-reverse'>Redes sociais</div> */}
        </div>
      </div>
      <nav className=" text-2xl flex items-center font-bold absolute">
        <div className="flex">
          <p className="pr-40">
            Ajudar pequenos negócios através das redes a se tornarem            
            <span className="p-2 text-detail text-4xl font-bold">grandes</span>
          </p>
        <img
          className="w-[720px] relative -top-44 -left-10 hidden md:block" // Esconde em dispositivos menores que 'md'
          src={Top}
          alt=""
        />
        </div>
      </nav>
    </div>
  );
}
