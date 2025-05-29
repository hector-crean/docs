
```config.toml
[page]
title = "intro"
version = 0.1
```

![[r42.jpg]]

(publish on crates. We can reference that documentation from here... It would probably quite good to unify the visitor trait? Or create shard pipeline traits etc, so there was a streamlined workflow?)

toolkit for manipulating html, markdown, and jsx. 

Often we may have static content, which we'd like to pre-process into a particular format. 

Can generate a 'pipeline' of transforms, which can be chained together, and collect data from the operations.


**html** 

We can take advantage of browser infrastructure to manipulate html content, but ultimately this is quite convoluted, and it's preferably to use a bare-bones, production grade parser to generate the AST, and then walk it. 

html5ever

uses: 
- repositioning/rationalising assets referenced in the html


Visitor trait


**tsx**

In many way more complex. 

figma-make:
How may we do this ourselves?
See SER135-new

etch_nextjs to generate nextjs app directories. We can specify a json file detailing our desires file structure.

visitors: 
- inject shadcn
- framer motion
- inject uuid

Ultimately it's probably preferable to dynamically generate pages from data in a CMS, but occasionally our data is stored in an esoteric way, which is...

For instance: using figma as a CMS.
Making a content heavy application for a booth, where the screen size was fixed. Responsive design is totally irrelevant. Whole plethora of plugin to export figma designs to a web application (even now natively supoprted with figma-make). 


**markdown**

We want to transform markdown files into tsx? Perhaps we can use frontmatter?
Mdx is a standard way, but I'd rather generate directly tsx files. 
How do we then diff the change in markdown content?



