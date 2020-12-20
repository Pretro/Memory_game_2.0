
/*jshint esversion: 6 */

const data = new Array(3).fill('').map((data, index)=>index);
const boxes = [...data, ...data];

const html = boxes.map(id => `
  <div class="wrapper" data-tilt onclick="this.classList.toggle('turn')">
        <div class="flip_card">
            <div class="front"></div>
            <div class="back">
                <div class ="circle">
                    <img class="images" src="./images/${id}.jpg">
                </div>
            </div>
        </div>
    </div>`
    ).join('');

console.log(html)
document.getElementById('memory_game').innerHTML = html;