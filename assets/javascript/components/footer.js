class footer extends HTMLElement{
    connectedCallback(){
        this.show() 
    }

    // Custom Elements
    show(){
        this.innerHTML = `<div class="container text-center mt-5">
                            <p class="footer">&copy  2021. Made by Listyo Adi Pamungkas in Bandung.</p>
                        </div>` 
    }
}

customElements.define('header-footer', footer) 