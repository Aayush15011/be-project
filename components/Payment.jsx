import React from 'react'

function Payment() {
    return (
        <>
            <h1>Payment page</h1>

            <nav class="navbar navbar-expand-sm my-2">
                <a class="navbar-brand ml-5" href="#">Digital CArd</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="donatebox">
                        {/* <i class="fas fa-user" style="font-size: 380%; text-align: center;"></i> */}
                        <h2>"Aacha chalta hu duao mai yaad rakhna"</h2>
                        <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KNUpwleH6kqh0Q" async> </script> </form>
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Payment