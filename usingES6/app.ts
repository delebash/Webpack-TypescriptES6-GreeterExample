import greeter from './greeter';
import $ from "jquery";  //Only if trageting ES6 in tsconfig

$(() => {
    var name = 'sdfasf';
    $(document.body).html(greeter(name));
});

