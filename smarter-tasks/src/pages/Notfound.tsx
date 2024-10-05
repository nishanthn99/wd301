
export const Notfound = () => {
    return (<>
        <div className='flex align-center justify-center m-auto'>Page Not Found<strong className='text-red-600'>404</strong> </div>
        <button id='backToHomeButton'><a className='flex bg-green-400 hover:bg-green-600 px-2 rounded-md text-white justify-center' href="/home">backToHomeButton</a></button>
    </>
    )
}
