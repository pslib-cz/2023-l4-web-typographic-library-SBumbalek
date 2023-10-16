# Typography CSS library
**Author:** *Štěpán Bumbálek*
## Demo site
Link to **[demo](http://127.0.0.1:5500/index.html)** site for preview.
## Content
1. [Implemantation](#implementation)
2. [Usage](#usage)
3. [Components](#components)
    1. [Line](#line)
    2. [Article card](#article-card)
    3. [About card](#about-card)
    4. [Line](#)
    5. [Line](#)
    6. [Line](#)
## Implementation
1. Download Plant library in **[Download](...)**
2. Add file inside your project folder
3. Link download.css in html
    ```html
     <link rel="stylesheet" href="Download.css">
## Usage
Typographic libraries with CSS and HTML resources simplify web design, offering multiple components.
## Components
### Line
used for seperating headings from rest of the content.

syntax for Line:
```html
<div class="Heading__Heading">
    <h1>Plant</h1>
    <p class="Heading__text">The Library</p>
    <div class="Line">
        &nbsp;
    </div>
</div>
```
### Article card
A card with text used for news or an img with text.

Includes a hover 

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
A card used for information about something and a picture.
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
There are 2 versions of buttons, both have hover and href.

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

syntax:
```html
<figure class="Img">
    <div>
        <img src="./img/irina-iriser--FnGodn23_c-unsplash.jpg" alt="Image">
        <figcaption>Your Caption</figcaption>
    </div>
</figure>
```

### Gallery
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

