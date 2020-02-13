# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

    **_You can use jQuery('element') or $('element'). The biggest difference it makes the syntax more streamlined._** 

2. What does the jQuery function return? How is it similar or different from a DOM Element object?

     **_jQuery function returns a jQuery Object. jQuery object  is like a wrapped object around a DOM element. They are       similar. However jQ object gives you a lot more usefull methods._** 

3. How can you select multiple elements with jQuery?

      **_You can use coma in the selector to list other elements you want selected. EX: $(h1, p.title, span). This will select the first h1, paragraph with class of 'title' and a span._**

4. How can you select multiple elements with different IDs and classes in one selector expression?

      **_You need to seperate the selectors with a coma and sepecify if you are selecting a class (.className) or an id (#idName)._** 

5. What are the different ways of chaining selectors? 

      **_You can chain based on class alone or you can be more specific and select based on element and its class. EX: $(h1.heading, p#intro)_**

6. How do you select elements based on different attributes?

      **_You use ":" before the name of the attribute. EX $(":input")_**
  
  
7. How do you select a checkbox based on its state?


      **_$("checkbox:checked")_**


## Exercises:
Open up the `selectors.html` file in your browser.
In the `selectors.js` file, use jQuery to:
1. Select all the labels and give them a class of "green"
2. Select all of the `phone` inputs and give them a class of "yellow"
3. Select the label for the email input and give it a class of "blue"
4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)
5. Give all labels inside of a p tag a class of "purple"
6. Give the Clear button a class of red
7. Commit your changes!

Once you're done, head on to [part-2-content](../part-2-content/README.md)
