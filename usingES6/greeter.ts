import greeter from './greet';
import $ from "jquery";  //Only if trageting ES6 in tsconfig

//Using extract-text-plugin will extract css and you just add it to index.html
import '../styles/styles.css'
$(() => {
    var name = 'dans';
    $(document.body).html(greeter(name));
 });

