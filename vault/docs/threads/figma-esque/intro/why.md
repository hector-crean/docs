


**He who has a why to live for can bear almost any how**

We'll be writing several strands in sync / lockstep. Cross reference one another. Decoupling / Encapsulating / 

'Living document'


It's interesting when something becomes the paradigm. 
'Cursor' for __
'Figma' for building design. 
Figma presumably branded itself as the google docs for UI/UX design.

Represents a particular configuration of infrastructure / substrate, upon which a service is built



What the web can / can't do

Building large applications is hard

systems challenge

Build in to understand it. Will touch on many things. 



Google docs, Figma, Rayon, Zed, 

Fundamentally 2D. 

Break the third wall. 

Collaboration / Multiplayer


3D collaborative applications: protein design, chemistry visualisation, circuit design, planning medical procedures, medical image data, thermal modelling, structural analysis, urban planning, environmental mapping, 
Give examples of real companies:
- Mapping of tree cover?
- Sensat type application?
- Nanome (https://nanome.ai/)
- Mara beta (https://nanome.ai/mara)
- https://www.medivis.com/
- https://hadean.com/
- https://www.schrodinger.com/platform/products/livedesign/
- Rerun
- https://www.motif.io/
- https://graphite.rs/



Zed built their own UI system (https://www.gpui.rs/). Lapce similarly built floem (https://lap.dev/floem/), which itself was inspired xilem (https://github.com/linebender/xilem). GPU based rendering


UI in Rust is hard. 
Vello: rendering using compute shaders
Parley: Rich text layout
Kurbo: curves
Winit :  cross-platform window creation and event loop management library_


The Figma model of having bipartite state: a 'shell' for the predominant UI, and a 'surface' where the 3D content was rendered to seems to be a good compromise. 

Button / Modals / Sidebars / Drawers / Comboxes / etc. have all been generated ad nauseam in every conceivable iteration in React. It seems unnecessary to reinvent the wheel for something so ultimately anodyne. Border radius in rust/webgpu? 

We may need some text in worldpace, but this is a constrained situation. We likely do not need them to be editable. 

- Collaborative presentation app for 3D content: focus on realtime, collaborative element. 
- Protein Visualiser. Some more complex rendering techniques required. How to add markup / higlights etc to a range of 3D content. (see molstar). File formats, parsers, asset loading, 
- BuildX: focus on UX for a 3D application. Example of tinyglade. 



Copy and paste. The shadcn school of thought. You copy and paste plugins etc. into your application. They are designed in a way which is configurable

Perhaps worth making a cli for this. 



zeugma





