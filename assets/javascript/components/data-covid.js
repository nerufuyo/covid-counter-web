import css from 'bootstrap/dist/css/bootstrap.min.css' 
import customCss from '../../style/style.css' 

class reportItem extends HTMLElement{

    // Setter 
    set coronaItem(item){
        this._coronaItem = item 
        this.show() 
    }

    show(){
        // Variable
        const dateUpdate = new Date(this._coronaItem.lastUpdate) 
        const month = ['Januari','Februari','Maret','Aprl','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'] 
        
        // Custom Element 
        this.innerHTML = '' 
        this.innerHTML = `
                                    <style>
                                        ${css}
                                        ${customCss}
                                    </style>
                                    <div class="container mt-3">
                                        <div class="row flex-column flex-lg-coloumn justify-content-center align-items-center">
                                            <div class="col-lg-8">
                                                <div class="row text-white align-items-center">
                                                    <div class="col-12 col-lg-4">
                                                        <div class="card text-center bg-dead">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._coronaItem.deaths.value}</h4>
                                                            <p class="card-text">Death</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-lg-4 my-3 my-lg-0">
                                                        <div class="card text-center bg-confirmed">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._coronaItem.confirmed.value}</h4>
                                                            <p class="card-text">Confirmed</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-lg-4">
                                                        <div class="card text-center bg-recovered">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._coronaItem.recovered.value}</h4>
                                                            <p class="card-text">Recovered</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row col-lg-4 text-white justify-content-center align-items-center text-lg-left mt-4 my-lg-0 mb-3 pt-2 w-100 p-2">
                                                <p class="text-white report text-left w-100">Live! Latest data update on ${dateUpdate.getDate()} ${month[dateUpdate.getMonth()]} ${dateUpdate.getFullYear()}.</p>
                                            </div>
                                        </div>
                                    </div>` 
    }
}

customElements.define('corona-report', reportItem) 