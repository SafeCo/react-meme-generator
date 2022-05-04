# react-meme-generator
## Description
A meme generator made in React.

## How to use

Enter text into top and button input fields and the text will automatically appear on the meme image.
To generate a new image simply click on the get new image button.

## What I've learnt

I utilised the useEffect hook for the API. Without the useEffect hook the App would re-render each time the API is called which would consequently cause the API to be called again thereby causing an infinte loop. With the useEffect hook you can make the call conditional on a specific condition being met, however, I made it so the API is called only once, thereby bypassing the infinte loop.


