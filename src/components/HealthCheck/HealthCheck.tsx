
function HealthCheck({ check }: any) {
    return (
        check === true
            ? (<div className='rounded-full bg-green-600 w-4 h-4'></div>)
            : (<div className='rounded-full bg-red-600 w-4 h-4'></div>)
    )
}

export default HealthCheck