

export default function BigCards() {
  const a = 'https://www.casemurk.com/cdn/shop/files/home.png?v=1715988661&width=535'
  const b = 'https://www.casemurk.com/cdn/shop/files/straphome.png?v=1715989767&width=535'
  const c = 'https://www.casemurk.com/cdn/shop/files/cable.webp?v=1715990084&width=535'
  // const d = 'https://www.casemurk.com/cdn/shop/files/AIRPOD_1.jpg?v=1715990578&width=535'
  // const e = 'https://www.casemurk.com/cdn/shop/files/magsafe_3492cc75-77d1-4797-b7fd-db4c6b957cbf.png?v=1715992684&width=535'
  // const f = 'https://www.casemurk.com/cdn/shop/files/ssd.png?v=1715992635&width=535'
  return (
    <>
      <div className="flex flex-col md:flex-row md:px-[10%] md:space-x-4 w-[100%] bg-[#f4f4f4] justify-center items-center md:py-20">
        <div className="flex flex-col md:flex-col-reverse w-[90%] my-4 rounded-lg bg-[#ffffff]">
          <img src={a} className="object-cover mb-[78px] md:mb-0 rounded-xl h-[410px] md:w-[410px]" />
          <div className="ml-7 mb-[75px] md:mt-[20%]">
            <div className="text-lg mb-1 text-[#909090]">Pick the perfect case to potect</div>
            <div className="text-2xl mb-7 font-bold md:text-4xl">iPhone Cases</div>
            <button className="px-9 py-3 md:px-11 md:py-3 border-[1px] border-black rounded-md text-lg font-semibold">Get Yours</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-col-reverse w-[90%] my-4 rounded-lg bg-[#ffffff]">
          <img src={b} className="object-cover mb-[78px] md:mb-0 rounded-xl h-[410px] md:w-[410px]" />
          <div className="ml-7 mb-[75px] md:mt-[20%]">
            <div className="text-lg mb-1 text-[#909090]">Pick the perfect case to potect</div>
            <div className="text-2xl mb-7 font-bold md:text-4xl">iPhone Cases</div>
            <button className="px-9 py-3 md:px-11 md:py-3 border-[1px] border-black rounded-md text-lg font-semibold">Get Yours</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-col-reverse w-[90%] my-4 rounded-lg bg-[#ffffff]">
          <img src={c} className="object-cover mb-[78px] md:mb-0 rounded-xl h-[410px] md:w-[410px]" />
          <div className="ml-7 mb-[75px] md:mt-[20%]">
            <div className="text-lg mb-1 text-[#909090]">Pick the perfect case to potect</div>
            <div className="text-2xl mb-7 font-bold md:text-4xl">iPhone Cases</div>
            <button className="px-9 py-3 md:px-11 md:py-3 border-[1px] border-black rounded-md text-lg font-semibold">Get Yours</button>
          </div>
        </div>
      </div>
    </>
  )
}
