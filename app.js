const container = document.querySelector('.container');
const colors = ['red', 'blue', 'green', 'yellow'];
const sizes = ['sm', 'md', 'lg', 'xl'];
const type = ['circle', 'square'];

function randomShape(){
  const colorIdx = Math.floor(Math.random()*colors.length);
  const sizeIdx = Math.floor(Math.random()*sizes.length);
  const typeIx = Math.floor(Math.random()*type.length);
  const shape = {
    color: colors[colorIdx],
    size: sizes[sizeIdx],
    type: type[typeIx]

  };
  return shape;
}

const shapes = [
  randomShape(),
  randomShape()
];

function render(){
  const html = shapes.map(function(shape, idx){
    return `<div class='${shape.color} ${shape.size} ${shape.type}'>${idx+1}</div>`;
  });
  container.innerHTML = html.join('');
}

render();
const i = setInterval(function(){
  const newShape = randomShape();
  shapes.push(newShape);
  render();
  if (shapes.length === 20){
    clearInterval(i)
  }
}, 500);