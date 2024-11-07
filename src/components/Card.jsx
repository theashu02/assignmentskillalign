import Dot from "./Dot"

export default function Card() {
    const a = 'https://www.casemurk.com/cdn/shop/files/carbidepro.jpg?v=1729976031&width=350'
    const b = 'https://www.casemurk.com/cdn/shop/files/ntpro.jpg?v=1729976031&width=350'
    const c = 'https://www.casemurk.com/cdn/shop/files/red.jpg?v=1729974886&width=350'
    const d = 'https://www.casemurk.com/cdn/shop/files/clear.jpg?v=1729974886&width=350'
    return (
        <>
            <div className="flex flex-col md:flex-col bg-[#f4f4f4] h-full justify-center items-center space-y-7 w-[100%]">
                <div className="text-xl pt-8 md:w-[100%] w-[100%] pl-4 md:pl-[150px]"><span className="font-bold text-3xl">Trending </span>| Reliable Classics</div>
                <div className="flex flex-wrap justify-center md:flex-row md:w-[100%] items-center md:space-x-6 pb-3 md:items-center md:justify-center bg-[#f4f4f4] gap-2">
                    <div className="flex flex-col bg-[#fff] items-center justify-center space-y-5 my-4 rounded-lg pb-5 md:px-[10px] md:space-y-5 w-[45%] md:w-auto">
                        <img src={a} className="w-[95%] md:h-[350px] md:w-[265px] rounded-lg mt-1 object-cover md:mt-[10px]" />
                        <div className="text-base text-center font-semibold md:text-[17px]">iPhone 16 Pro Max Thin Case 2.0</div>
                        <Dot />
                    </div>
                    <div className="flex flex-col bg-[#fff] items-center justify-center space-y-5 my-4 rounded-lg pb-5 md:px-[10px] md:space-y-5 w-[45%] md:w-auto">
                        <img src={b} className="w-[95%] md:h-[350px] md:w-[265px] rounded-lg mt-1 object-cover md:mt-[10px]" />
                        <div className="text-base text-center font-semibold md:text-[17px]">iPhone 16 Pro Max Thin Case 2.0</div>
                        <Dot />
                    </div>
                    <div className="flex flex-col bg-[#fff] items-center justify-center space-y-5 my-4 rounded-lg pb-5 md:px-[10px] md:space-y-5 w-[45%] md:w-auto">
                        <img src={c} className="w-[95%] md:h-[350px] md:w-[265px] rounded-lg mt-1 object-cover md:mt-[10px]" />
                        <div className="text-base text-center font-semibold md:text-[17px]">iPhone 16 Pro Max Thin Case 2.0</div>
                        <Dot />
                    </div>
                    <div className="flex flex-col bg-[#fff] items-center justify-center space-y-5 my-4 rounded-lg pb-5 md:px-[10px] md:space-y-5 w-[45%] md:w-auto">
                        <img src={d} className="w-[95%] md:h-[350px] md:w-[265px] rounded-lg mt-1 object-cover md:mt-[10px]" />
                        <div className="text-base text-center font-semibold md:text-[17px]">iPhone 16 Pro Max Thin Case 2.0</div>
                        <Dot />
                    </div>

                </div>
            </div>
        </>
    )
}
