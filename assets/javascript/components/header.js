class Header extends HTMLElement{
    connectedCallback(){
        this.show() 
    }

    // Custom element 
    show(){
        this.innerHTML = `<div class="container align-items-center justify-content-center mt-5 mt-md-2">
                            <div class="row align-items-center justify-content-center">
                                <div class="row align-items-center justify-content-center col-12 col-lg-8 text-m-center text-center text-lg-center">
                                    <h1 class="text-white header-text pt-5">BEWARE OF <span class="text-red">COVID-19</span></h1>
                                    <p class="header-subtext text-gray mt-3 mb-5 pt-2">
                                    Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans and birds, they cause respiratory tract infections that can range from mild to lethal.
                                    </p>
                                </div>
                            </div>
                        </div>` 
    }
}

customElements.define('header-content', Header) 