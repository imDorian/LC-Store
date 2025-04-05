const Slider = () => {
    return (
        <div className="w-full h-screen relative snap-center">
            <video autoPlay loop muted className="object-cover object-center h-full w-full filter brightness-75 contrast-125 ">
                <source src="/truck.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
                <div className="backdrop-blur-xl bg-white/30 rounded-3xl flex flex-col justify-center items-start p-8 gap-y-1">
                    <h1 className="text-4xl">Soy <strong>Lucian</strong>,</h1>
                    <h1 className="text-5xl font-semibold text-orange-400">El camionero</h1>
                    <h1 className="text-2xl"> Y esta es mi <strong>Historia</strong> ...</h1>
                </div>
            </div>
        </div>
    )
}

export default Slider