import React from 'react'


const AppWrap = (Component, idName) => 
function HOC() {
    return (
        <div id={idName} className="w-full min-h-screen flex flex-row">
            <div className='flex-1 w-full flex-col justify-center items-center'> 
                <Component />
            </div>
        </div>
    )
}

export default AppWrap