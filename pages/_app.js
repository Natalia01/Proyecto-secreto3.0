import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return(
    <div className = "container">
    <Component {...pageProps} />
    
  </div>
  )
 
  

}

