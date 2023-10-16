# Typography CSS library
**Author:** *Štěpán Bumbálek*
## Demo site
Link to **[demo](http://127.0.0.1:5501/index.html)** site for preview.
## Content
1. [Implemantation](#implementation)
2. [Usage](#usage)
3. [Components](#components)
    1. [Line](#line)
    2. [Article card](#article-card)
    3. [About card](#about-card)
    4. [Buttons](#buttons)
    5. [Image with figcaption](#image-with-figcaption)
    6. [Gallery](#gallery)
    7. [Table](#table)
## Implementation
1. Download Plant library in **[Download](https://github.com/pslib-cz/2023-l4-web-typographic-library-SBumbalek/blob/master/Download.css)**
2. Add file inside your project folder
3. Link download.css in html
    ```html
     <link rel="stylesheet" href="Download.css">
## Usage
Typographic librari with CSS and HTML resources simplify web design, offering multiple components.
## Components
### Line
used for seperating headings from rest of the content.

syntax for Line:
```html
<div class="Line__heading">
    <h2>Your heading</h2>
    <div class="Line">
        &nbsp;
    </div>
</div>
```
### Article card
A card with text used for news or an img with text. Add an img and you have a redy to go card. Text automaticli ends after 3 lines. Includes a hover 

syntax for Line:
```html
<div class="Articles__item">
    <div class="Articles__item-background">
        <img src="Your img" alt="">
        <div class="Line">
            &nbsp;
        </div>
        <p class="Articles__text">Your text</p>
    </div>
</div>
```

### About card
A card used for information about something and a picture. Great fot about.
```html
<article class="About">
    <div> 
         <img class="About__img" src="Your img" alt="#">
     </div>
     <div>
         <div class="Line__heading-About">
             <h2>Your heading</h2>
             <div class="Line">
                 &nbsp;
             </div>
         </div>
         <p>Your text</p>
     </div>
</article>
```

### Buttons
There are 2 versions of buttons, both have a hover and href. You just need to put them into a container and enjoy.

Version 1 syntax:
```html
<div class="Buttons__item">
    <a href="#"><button class="Buttons__button-v1">Click me</button></a>
</div>
```
Version 2 syntax:
```html
<div class="Buttons__item">
    <a href="#"><button class="Buttons__button-v2">Click me</button></a>
</div>
```

### Image with figcaption
An imge that shows figcaption on hover. Great for an important image.

syntax:
```html
<figure class="Img">
    <div>
        <img src="Your image" alt="Image">
        <figcaption>Your Caption</figcaption>
    </div>
</figure>
```

### Gallery
A gallery of images, great for showing multiple images at once.

syntax:
```html
<div class="gallery">
    <div>
        <figure>
            <img src="Your image" alt="Image 1">
            <figcaption>Caption 1</figcaption>
        </figure>
    </div>
    <div>
        <figure>
            <img src="Your image" alt="Image 2">
            <figcaption>Caption 2</figcaption>
        </figure>
    </div>
    <div>
        <figure>
            <img src="Your image" alt="Image 2">
            <figcaption>Caption 2</figcaption>
        </figure>
    </div>
    <div>
        <figure>
            <img src="Your image" alt="Image 2">
            <figcaption>Caption 2</figcaption>
        </figure>
    </div>
</div>
```

### Table 
Pre styled table that you can use for better visualization of data

syntax:
```html
<table class="Table">
    <caption class="Table__caption">Nicely Styled Green Table</caption>
    <thead>
        <tr class="Table__tr">
            <th class="Table__th">Header 1</th>
            <th class="Table__th">Header 2</th>
            <th class="Table__th">Header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr class="Table__tr">
            <td class="Table__td">Row 1, Cell 1</td>
            <td class="Table__td">Row 1, Cell 2</td>
            <td class="Table__td">Row 1, Cell 3</td>
        </tr>
        <tr class="Table__tr">
            <td class="Table__td">Row 2, Cell 1</td>
            <td class="Table__td">Row 2, Cell 2</td>
            <td class="Table__td">Row 2, Cell 3</td>
        </tr>
        <tr class="Table__tr">
            <td class="Table__td">Row 3, Cell 1</td>
            <td class="Table__td">Row 3, Cell 2</td>
            <td class="Table__td">Row 3, Cell 3</td>
        </tr>
    </tbody>
</table>
```

