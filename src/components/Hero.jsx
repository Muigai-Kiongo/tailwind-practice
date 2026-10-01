export default function Hero(){
    return(
        <>
        <section className="flex flex-col gap-4 items-center justify-center h-screen bg-[url('hero.png')] ">
            <p>lorem ipsum dolor sit amet</p>
            <button className="bg-blue-500 hover:bg-green-700 text-white font-bold p-5 rounded">
                Click me
            </button>
        </section>
        </>
    )
}