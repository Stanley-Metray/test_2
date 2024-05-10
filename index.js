function calculateSum()
{
    let sum=0;
    for(let i=1; i<1e9; i++)
        sum = sum+i;
    return sum;
}

process.on('message', (message)=>{
    if(message === 'start')
        {
            let sum = calculateSum();
            process.send(sum);
        }
})