
// ***************** VARIABLES *************
let competency = document.getElementById('competency');
let responsive = document.getElementById('responsive');
let trustworthiness = document.getElementById('trustworthiness');
let customer = document.getElementById('customer')
let next = document.getElementById('next');
// *****************  EVENT LISTENERS *************
document.addEventListener('DOMContentLoaded', boxes)
responsive.addEventListener('mouseover', colors);
competency.addEventListener('mouseover', colors)
trustworthiness.addEventListener('mouseover', colors)
customer.addEventListener('mouseover', colors)


let ratings = {}



// ************************ FUNCTIONS **************
function colors(e) {
    let poor = e.target.parentElement.querySelector('#poor');
    let fair = e.target.parentElement.querySelector('#fair');
    let good = e.target.parentElement.querySelector('#good');
    let excellent = e.target.parentElement.querySelector('#excellent');
    let wow = e.target.parentElement.querySelector('#wow');
    let before = e.target.parentElement.querySelector('#before')
    let after = e.target.parentElement.querySelector('#after')
    
    checkValue(e)
    if (e.target.id === 'poor') {
        poor.style.background = `#c00`;
        before.style.borderRightColor=`#c00`;
        fair.style.background = `#999`;
        good.style.background = `#999`;
        excellent.style.background = `#999`;
        wow.style.background = `#999`;
        after.style.borderLeftColor="#999"

    }
    else if (e.target.id === 'before') {
        poor.style.background = `#c00`;
        before.style.borderRightColor=`#c00`;
        fair.style.background = `#999`;
        good.style.background = `#999`;
        excellent.style.background = `#999`;
        wow.style.background = `#999`;
        after.style.borderLeftColor="#999"

    }
    else if (e.target.id === 'fair') {
        poor.style.background = `#c00`;
        fair.style.background = `#c00`;
        before.style.borderRightColor=`#c00`;
        good.style.background = `#999`;
        excellent.style.background = `#999`;
        wow.style.background = `#999`;
        after.style.borderLeftColor="#999"
    }
    else if (e.target.id === 'good') {
        poor.style.background = `#e4f11f`;
        fair.style.background = `#e4f11f`;
        good.style.background = `#e4f11f`;
        before.style.borderRightColor=`#e4f11f`;
        excellent.style.background = `#999`;
        wow.style.background = `#999`;
        after.style.borderLeftColor="#999"

    }
    else if (e.target.id === 'excellent') {
        poor.style.background = `green`;
        fair.style.background = `green`;
        good.style.background = `green`;
        before.style.borderRightColor=`green`;
        excellent.style.background = `green`;
        wow.style.background = `#999`;
        after.style.borderLeftColor="#999"
    }
    else if (e.target.id === 'wow') {
        poor.style.background = `green`;
        fair.style.background = `green`;
        good.style.background = `green`;
        before.style.borderRightColor=`green`;
        excellent.style.background = `green`;
        wow.style.background = `green`;
        after.style.borderLeftColor="green"

    }
    else if (e.target.id === 'after') {
        poor.style.background = `green`;
        fair.style.background = `green`;
        good.style.background = `green`;
        before.style.borderRightColor=`green`;
        excellent.style.background = `green`;
        wow.style.background = `green`;
        after.style.borderLeftColor="green"

    }
}


function boxes() {
    let result = `
    <div class="before"  data-id="1" id="before"></div>
    <div class="common poor" data-id="1" id="poor">
    <h3>Extremely Bad</h3>
  </div>
  <div class="common" data-id="2" id="fair">
    <h3> Bad</h3>

  </div>
  <div class="common" data-id="3" id="good">
    <h3>Neutral</h3>
  </div>
  <div class="common" data-id="4" id="excellent">
    <h3>Good</h3>
  </div>
  <div class="common" data-id="5" id="wow">
    <h3>Extremely good</h3>
  </div>
  <div class="after" data-id="5" id="after"></div>
    `
    responsive.innerHTML = result;
    competency.innerHTML = result;
    trustworthiness.innerHTML = result;
    customer.innerHTML = result;
    next.disabled = true
}



function checkValue(e){
    if (e.target.parentElement.id === 'responsive') {
        ratings.responsive = e.target.dataset.id;
    } else if (e.target.parentElement.id === 'competency') {
        ratings.competency = e.target.dataset.id;

    } else if (e.target.parentElement.id === 'trustworthiness') {
        ratings.trustworthiness = e.target.dataset.id;

    } else if (e.target.parentElement.id === 'customer') {
        ratings.customer = e.target.dataset.id;
        console.log(ratings);

    }
    if(ratings.responsive !== undefined && ratings.competency !== undefined && ratings.trustworthiness !== undefined && ratings.customer !== undefined){
        next.disabled = false;
    }
}