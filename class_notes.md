# DOM

Document Object Model is a collection of objects representing objects

Events and the DOM


A webpage has finished loading


## Grabbing elements from the document

const object = document.querySelector('.object');  // this will select the object class from the document element


![Adding elements](/Class_Snips/Updating_Adding_List.jpeg)

## What if we want to add an event to specific child elements

we want to add an event to each element of the child

Too many eventHandlers is not a convention

It cant lead to memory leak

Bubbling lets us target all the elements instead of targeting each element


![Bubbling](/Class_Snips/Bubbling.png)

current Target will be the parent element which in this case it would be the `ul` or the parent element

the target will be the child of the parent element ie. `ul` and the target will be something like the `li` or `div` or `span` which is inside of the parent element ei the lists inside the parent element `u`


the event listener should be on the parent element not on each child element because we can make use of the bubbling mechanism.

## Example

`
