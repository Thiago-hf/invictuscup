import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="h-screen text-center content-center">
      <h1 className="font-bebas text-6xl lg:text-9xl">COPA INVICTUS</h1>
      <h3 className="font-mont text-md lg:text-xl">A porta aberta para seu sonho</h3>

      <Button className="text-mont font-bold rounded-full text-white text-sm h-10 mt-32 lg:w-48 lg:h-14 lg:text-md bg-red-500"
        onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdF8yTe2TSQzVGgZ7Sgmzvh3xevTZTo_YRoWfl-8gzASL4ghQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaY-m0OoqOnZEmGREaOTdmSbQTSn-E2VZ6F7zmjaOtfrSt2FkSSPqYYpclo_aem_BvsUS9EhDKWZYnW1hOY-KA&fbzx=-1831105906887763392"}>
        INSCREVA-SE JÁ
      </Button>

    </div>
    
    <div className="text-center content-center lg:text-start bg-red-500 lg:-mt-32">
        <h1 className="font-bebas mt-12 text-3xl lg:text-4xl lg:m-36 text-white">Modalidades</h1>

        <div className="flex flex-col mb-12 mt-16 space-y-28 items-center lg:space-y-0 lg:space-x-28 lg:justify-center lg:flex-row lg:mb-32">
          
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md drop-shadow-2xl">
                <div className="relative bg-[url('https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4IZecJyhvcIUxxu0Rd1vjX/b9fb7577b74b56704d3d2b34be639397/R6S_Y7_KEYART_STANDARD.jpg')] mx-4 -mt-6 h-40 w-full overflow-hidden rounded-xl bg-cover bg-center bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Rainbow Six Siege
                </h5>
              </div>
            </div>

            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md drop-shadow-2xl">
              <div className="relative bg-[url('https://img-cdn.hltv.org/gallerypicture/eNFRc95--El3YT3fdEaXib.png?ixlib=java-2.1.0&w=1200&s=b368b07d32f397c599025770fe16bdc3')] mx-4 -mt-6 h-40 w-full overflow-hidden rounded-xl bg-cover bg-center bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Counter Strike 2
                </h5>
              </div>
            </div>
            
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md drop-shadow-2xl">
              <div className="relative bg-[url('https://assetsio.gnwcdn.com/league-of-legends-requisitos-minimos-lol-1626456007951.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp')] mx-4 -mt-6 h-40 w-full overflow-hidden rounded-xl bg-cover bg-center bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                League of Legends
                </h5>
              </div>
            </div>

            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md drop-shadow-2xl">
              <div className="relative bg-[url('https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg')] mx-4 -mt-6 h-40 w-full overflow-hidden rounded-xl bg-cover bg-center bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Valorant
                </h5>
              </div>
            </div>
        </div>

    </div>

    <div className="flex flex-col mb-16 mt-16 items-center lg:space-y-0 lg:justify-center lg:mb-64">
        <h1 className="font-mont font-bold text-5xl mt-24 lg:text-8xl lg:mb-32 lg:mt-48">PREMIAÇÕES</h1>
        <h1 className="font-mont font-xl text-3xl mt-16 lg:mt-28 lg:text-4xl">🏅 OURO - R$250,00 🏅</h1>
        <h1 className="font-mont font-xl text-3xl lg:text-4xl">🥈 PRATA - R$100,00 🥈</h1>
        <h1 className="font-mont font-xl text-3xl lg:text-4xl">🥉 BRONZE - R$50,00 🥉</h1>
    </div>

    <div className="flex flex-col items-center md:flex-row lg:space-y-0 lg:justify-center bg-red-500">
      <div className="m-24 w-1/2">
        <h1 className="font-bebas mt-12 text-3xl lg:text-4xl lg:mt-36 lg:ml-36 text-white">ORGANIZAÇÃO</h1>
        <h3 className="font-mont text-md mt-12 lg:text-xl justify-center lg:ml-36 lg:mb-36 text-white">32 times dividos igualmente em 8 grupos de 4, os 2 melhores de cada grupo 
          se classifica para o mata-mata (todos os jogos são únicos com mapas aleatórios, apenas a final são 3 jogos em 3 mapas diferentes)
        </h3>
      </div>

      <div className="m-24 w-1/2">
      <div className="relative bg-[url('https://img.freepik.com/fotos-premium/trofeu-glory-winner-de-esports-na-arena-do-campeonato-de-jogos-de-computador_720722-10509.jpg')] mx-4 h-96 w-full overflow-hidden rounded-xl bg-cover bg-center bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 drop-shadow-2xl">
      </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-slate-800">
      <div className="mt-16">
        <h1 className="font-mont text-xl lg:text-xl lg:mt-16 lg:mb-16 text-slate-500">Copyright Copa Invictus E-sports, 2024</h1>
      </div>
    </div>
      </>
  );
}
