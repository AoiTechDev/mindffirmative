const getAffirmation = async() => {
    const res = await fetch('https://dummyjson.com/quotes/random')

    if(!res.ok){
        throw new Error(res)
    }

    return res.json()
}


export default async function handler(req,res){
    const data = await getAffirmation()
    res.status(200).json({data})
}