import React from 'react';

const Checkout = () => {
    return (
        <div className='col-md-4 container bg-default border border-5 my-5 bg-info bg-gradient'>  
        <h4 class = "my-4">  
                Please,Fill the Form   
        </h4>   
        <form>  
        <div className='form-row'>  
            <div className = 'col-md-6 form-group'>  
<label for = "firstname"> First Name </label>  
        <input type = "text" className = 'form-control' id = "firstname" placeholder = "First Name"/>  
            <div className = 'invalid-feedback'>  
                Valid first name is required.  
            </div>  
</div> 
<div className = 'col-md-6 form-group'>  
    <label for = "lastname"> Last Name </label>  
       <input type = "text" className = 'form-control' id = "lastname" placeholder = "Last Name"/>  
            <div className = 'invalid-feedback'>  
                Valid last name is required.  
                    </div>  
                </div>  
            </div>  
            <div className = 'form-group'>  
            <label for = "email"> Email </label>  
        <input type = "email" className = 'form-control' id = "email" placeholder = "you@example.com" required/>  
            </div> <div className='form-group'>  
        <label for = "adress">Address </label>  
                <input type = "text" className = 'form-control' id = "adress" placeholder = "1234 Main Street" required/>  
    <div className = 'invalid-feedback'>  
                    Please enter your shipping address.  
                </div>  
            </div>  
            <div className = 'row'>  
            <div className = 'col-md-4 form-group'>  
        <label for = "country"> Country </label>  
            <select type = "text" className='form-control' id = "country">  
            <option value> Choose... </option>  
        <option> United Kingdom </option>  
                    </select>  
            <div class = "invalid-feedback">  
Please select a valid country.  
                    </div>  
                </div>  
        <div class = "col-md-4 form-group">  
            <label for = "city"> City </label>  
        <select type = "text" class = "form-control" id = "city">  
            <option value> Choose... </option>  
                    <option> London </option>  
                    </select>  
            <div className = 'invalid-feedback'>  
                Please provide a valid city.  
                    </div>  
                </div>          
        <div className = 'col-md-4 form-group'>  
    <label for = "postcode"> Postcode </label>  
        <select type = "text" className = 'form-control' id = "postcode">  
        <option value> Choose... </option>  
            <option> NW6 2LS </option>  
                    </select>  
        <div className = 'invalid-feedback'>  
                        Postcode required.  
                    </div>  
                </div>  
            </div>  
            
          
            <h4 className = 'mb-4'> Payment </h4>  
            <div className = 'form-check'>  
                <input type = "radio" className = 'form-check-input' id = "credit" name = "payment-method" checked required/>  
                <label for = "credit" className = 'form-check-label'> Credit Card </label>  
            </div>  
            <div className = 'form-check'>  
                <input type = "radio" className = 'form-check-input' id = "debit" name = "payment-method" required/>  
                <label for = "debit" className = 'form-check-label'> Debit Card </label>  
            </div>  
            <div className = 'form-check'>  
                <input type = "radio" className = 'form-check-input' id = "paypal" name = "payment-method" required/>  
                <label for = "paypal" className = 'form-check-label'> PayPal </label>  
            </div>  
            <div className='row mt-4'>  
            <div className = 'col-md-6 form-group'>  
<label for = "card-name"> Name on card </label>  
        <input type = "text" className = 'form-control' id = "card-name" placeholder required/>  
    <div className = 'invalid-feedback'>  
                Name on card is required  
                        </div>  
                    </div>  
            <div className='col-md-6 form-group'>  
        <label for = "card-no"> Card Number </label>  
            <input type = "text" className='form-control' id = "card-no" placeholder required/>  
        <div className='invalid-feedback'>  
        Credit card number is required  
                        </div>  
                    </div>  
            </div>  
            <div className='form-row'>  
        <div className='col-md-5 form-group'>  
    <label for = "expiration"> Expire Date </label>  
<input type = "text" className='form-control' id = "card-name" placeholder required/>  
    <div className='invalid-feedback'>  
        Expiration date required  
                        </div>  
                    </div>      
        <div className='col-md-5 form-group'>  
<label for = "ccv-no"> Security Number </label>  
    <input type = "text" className = "form-control" id = "sec-no" placeholder required/>  
    <div className='invalid-feedback'>  
        Security code required  
                        </div>  
                </div>  
            </div>  
          
               
                <button className='btn btn-primary bt-lg btn-block' type = "submit"> Continue to Checkout </button>  
              
        </form>  
    </div>  
    );
};

export default Checkout;