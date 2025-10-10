const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')


setInterval(function(){         // It repeats a function again and again after a fixed amount of time (interval) until you stop it manually.
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)