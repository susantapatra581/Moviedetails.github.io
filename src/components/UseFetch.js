import { useEffect, useState } from "react";

const useFetch = (request) => {
    let [datas, setData] = useState(null);
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(request)
                .then((response) => {
                  //  console.log(response); // to check the response type true or false
                    if (response.ok === false) {
                        throw Error("Sorry.....!Data nout found, please try for different resourse");
                    } else {
                        return (response.json())
                    }
                })
                .then((data) => { setData(data); setPending(false) })
                .catch((error) => { setError(error.message); setPending(false)})
        }, 2500)

    }, []);

    return { datas, pending, error }
}

export default useFetch;