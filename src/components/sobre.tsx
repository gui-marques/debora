import Eu from "../../assets/Eu.png";

export function Sobre() {
  return (
    <div className="w-full mx-auto py-[200px] md:py-[400px] xl:gap-0 lgl:flex-row items-center text-txt">
      <div>
        <div className="flex absolute">
          <img
            className="w-[600px] h-[300px] lg:w-[800px] lg:h-[600px] pb-0 hidden md:block"
            src={Eu}
            alt=""
          />
          <div className='m-0'>
            <h1 className='text-center text-[80px] pb-2'>Sobre mim</h1>
            <p>
              Sou uma profissional dedicada e entusiasmada que se orgulha de
              oferecer serviços de alta qualidade e resultados excepcionais no
              campo do marketing digital e das mídias sociais.
            </p><br/>
            <p>
              negócios a alcançarem seu potencial máximo nas redes sociais. Com
              uma formação sólida em marketing e experiência no campo da mídia
              social, desenvolvi uma abordagem centrada no branding para ajudar
              marcas a se destacarem em um mercado cada vez mais competitivo.
              sou apaixonada por ajudar pequenos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
