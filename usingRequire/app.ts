import greeter from './greeter';
import $ = require('jquery');

$(() => {
    console.log('test');
    $(document.body).html(greeter("Fagner"));
});