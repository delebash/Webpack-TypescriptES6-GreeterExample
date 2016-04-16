import greeter from './greet';
import $ from "jquery";  //Only if trageting ES6 in tsconfig

$(() => {
    var name = 'dan';
    $(document.body).html(greeter(name));
 });

