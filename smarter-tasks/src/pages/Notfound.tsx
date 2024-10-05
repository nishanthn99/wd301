import Header from "../components/Header"

export const Notfound = () => {
    return (<>
    <Header/>
        <div className='flex align-center justify-center m-auto'>Page Not Found<strong className='text-red-600'>404</strong> </div>
        <button id='backToHomeButton' className='flex bg-green-400 hover:bg-green-600 px-2 rounded-md text-white justify-center'>backToHomeButton</button>
    </>
    )
}
