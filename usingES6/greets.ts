//importing momnent fails

import Greeting from './Greeting.ts';
import DateTime from './DateTime.ts';
import $ from 'jquery'

$(document).ready(function () {
    console.log("ready!");
    $('h2').text(new DateTime);
    $('h1').text(new Greeting());

});