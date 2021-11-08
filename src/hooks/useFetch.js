// import { useState, useEffect } from 'react'
// import axios from 'axios'

// function useFetch(url) {
//     console.log(url)
//     const [state, setState] = useState({data: null, error: false, loading: true})

//     if (!url) {
//         console.log('INVALID URL')
//         setState({data: null, error: true, loading: false})
//     } 

//     useEffect(() => {

//         const apiCall = (url) => {
//             if (state.loading === false) {
//                 console.log('clearing interval!!!')
//                 clearInterval(interval)
//             }

//             axios
//                 .get(url)
//                 .then(res => {
//                     console.log(res.data)
//                     setState({data: res.data, error: false, loading: false})
//                 })
//                 .catch(err => {
//                     console.log(err)
//                     setState({data: null, error: true, loading: false})
//                 })
//         }

//         let interval = setInterval(apiCall, 5000)



//         // let interval = setInterval((loaded) => {
//         //     // setState(state => ({ data: state.data, error: false, loading: true }))
//         //     axios
//         //         .get(url)
//         //         .then(res => {
//         //             console.log(res.data)
//         //             setState({data: res.data, error: false, loading: false})
//         //         })
//         //         .catch(err => {
//         //             console.log(err)
//         //             setState({data: null, error: true, loading: false})
//         //         })

//         //         function loaded() {
//         //             if (state.loading === false) {
//         //                 console.log('clearing interval!!!')
//         //                 clearInterval(interval)
//         //             }
//         //         }
//         // }, 5000)



//     // }, [url, state.loading])

//     console.log("Results from useFetch: ", state)
//     return state




// }

// export default useFetch
