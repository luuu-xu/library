# library
Library project from The Odin Project.

Live: https://luuu-xu.github.io/library/

The project is finished.
Figuring out the JS part is not too hard, had some problems when I am trying to index each book added, in order to target its read and delete button to change its object's properties' values.
After some experiments, I have decided to target each book by setting the card container in html showing this book's id to be the title of the book. Therefore its buttons can work out well.

Another feature is the opener and dimmer css properties, I found how to do it online and it works well. Its process is to set the lightbox's visibility to hidden at the beginning, and by adding eventlistner to the button, everytime the lightbox is opened, its visibility is set to visible, and then creates a dimmer div whose height and width is exactly the size of the screen and sets its opacity to .5.

I find the entire page layout design is not too easy to do, it takes much of my time and the result is not as great as I imagined. The return of the time spent on them are not quite worthy after all.
