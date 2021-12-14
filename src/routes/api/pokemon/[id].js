// you can call http://localhost:3000/api/pokemon/{id} and returns the given pokemon data with 200 OK status code
export async function get({params}) {
    const id = params.id
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokeman = await res.json()

    return {
        status: 200,
        body: pokeman
    }
}