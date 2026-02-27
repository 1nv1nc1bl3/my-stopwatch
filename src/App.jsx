function App() {
    return (
        <main className='app-container flex flex-col min-h-screen justify-center items-center'>
            <div className='stopwatch flex justify-center items-center relative w-[min(90vw,380px)] aspect-square'>
                <div className='case w-full h-full flex flex-col justify-center items-center bg-slate-200 rounded-full'>
                    <div className='dial w-[90%] h-[90%] bg-slate-100 flex flex-col justify-center items-center rounded-full'></div>
                </div>

                <div className='pusher start-stop w-[30px] h-[20px] bg-slate-600 absolute top-[-5%] left-[50%] translate-x-[-50%]'></div>
                <div className='pusher reset w-[30px] h-[20px] bg-slate-600 absolute top-[10%] right-[10%] rotate-[45deg]'></div>
            </div>
        </main>
    );
}

export default App;
