import { useState } from "react"

const useGetApiHook = () => {
    const[data, setData] = useState(null)

    const url = 'https://reactnative.dev/movies.json'
    const getData = async() => {

        try {
            const response = await fetch(url);
            const json = await response.json();

            setData(json.movies);
            console.log(data)

          } catch (error) {
            console.error(error);
          }
    }
    return {data, getData};

}

export default useGetApiHook