import './components/header.js' 
import './components/footer.js' 
import './components/data-covid.js' 

// Connection check
const main = () => {
    const siteUrl = 'https://covid19.mathdro.id/api/countries/Indonesia/' 

    const data = () => {
        fetch(siteUrl)
            .then(response => response.json())
            .then(results => {
                const reportElement = document.querySelector('corona-report') 
                reportElement.coronaItem = results 
            })
            .catch(() => message()) 
    } 

    const message = (message = 'Silahkan periksa koneksi internet Anda!') =>{
        alert(message) 
    } 

    data() 
} 

export default main 