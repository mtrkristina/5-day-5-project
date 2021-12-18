"use strict"

{
   const board = document.querySelector('#board');
   const colors = ['#ed5d47', '#c84557', '#a95c8d', '#ad40ff', '#4040ff', '#85aae1',
'#33cc99', '#01cc92', '#ffff31', '#84773f', '#661a99', '#003399',
'#ff4f00', '#003366', '#daf89e']
   const SQUARES_NUMBER = 600;

      for(let i = 0; i< SQUARES_NUMBER; i++){
         const square = document.createElement('div')
         square.classList.add ('square')

         square.addEventListener('mouseover', () => 
         setColor(square))

         square.addEventListener('mouseleave', () => 
         removeColor(square))


         board.append(square)
      }

      function setColor(element){
         const color = getRandomColor();
         element.style.backgroundColor = color;
         element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
      }

      function removeColor(element){
         element.style.backgroundColor = '#1d1d1d';
         element.style.boxShadow = `0 0 2px #000`;
      }

      function getRandomColor(){
         const index = Math.floor(Math.random() * colors.length)
         return colors[index];
      }
}