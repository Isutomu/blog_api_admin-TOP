# blog_api_admin-TOP

> [!NOTE]
> The styling of this project takes [Anil Dash's blog](https://www.anildash.com/) as reference, since the styling of the [visitor frontend](https://github.com/Isutomu/blog_api_visitor-TOP) is basically a carbon copy of it. I don't know them and/or about them, but since I blatantly used the styling on the public page (visitor) I thought that it would be sensible to use it too on the creator dashboard.

> [!IMPORTANT]
> This is only the **frontend for admin** part of the project. Be sure to also visit [backend](https://github.com/Isutomu/blog_api_backend-TOP) and [frontend visitor](https://github.com/Isutomu/blog_api_visitor-TOP).

> [!CAUTION]
> This project is purely meant to be used as a tool for self-improvement, so I sincerely recommend you to not use this. But, in case you do decide to use it either way, please do credit me.

This is the frontend for admin of the blog of the project [Blog API](https://www.theodinproject.com/lessons/node-path-nodejs-blog-api) from TOP.
The notable abscence of commits is due to the fact that this project was originally hosted on this [GitHub Repository](https://github.com/Isutomu/blog_api-TOP).

## Pointlessly long preface

I ended up splitting the previously mentioned respository on three because deploying was considerably easier this way, and so it was maintaining it to be honest (try to be on the level of a junior programmer and deal with essentially three projects in one VSCODE window).\
I also decided to transpose this into a new repository by directly uploading the files, as at the time this seemed like the easiest way to do it.

This project is gonna be further expanded beyond the scope of the original TOP especification (also catch up with some aspects that I deliberately did not implement at the time).
The issues with the current code are going to be on the "issues" tab, so here I am going to limit myself to disclosure the future features.\
Both (README and issues) are going to be updated as the times goes on, so if you've arrived here in different points in times that is why they seem bigger than before.

There is no particular reason why I chose this project to maintain besides this being my 1st fullstack project.

## Future features

> [!IMPORTANT]
> Modifiers ("not priority" and the like) don't imply importance. Most of the time they simply mean that I thought they were too difficult to tackle for now.

- Add loading placeholder components (pages where feature was enabled are going to be listed below)
- Add error placeholder components (pages where feature was enabled are going to be listed below)
- Add "no data" placeholder components (pages where feature was enabled are going to be listed below)
- (Not priority) Add proper error handling for the application
- Adjust (specially) image containers so that their sizes don't wildly change between the states "not loaded", "loaded" and "error" (pages where feature was enabled are going to be listed below)
- Implement a "show preview" feature (similar to github's one, or better)
- (Really not a priority) Change visual style
- (Not priority) Implement the states components (loading, error, no data) as a transition between pages feature (maybe even leave the original implementation but do this as an extra?)
  ~~- Implement logout~~
  ~~- Implement proper "session" expiration~~
- Add in "login" a "reset password" feature
- Show comments of post
- (Not priority) Allow the admin to set configurations for comments
- Implement a minimum user dashboard available to logged users with functions such as password change. Maybe redirect from "admin" to "visitor" (where this other dashboard will be implemented) or just integrate the features on "admin"
  - (Not priority) Add on the dashboard a function that allows the user to see all comments that they posted
  - (Not priority) Allow users to favorite a posts
  - (Not priority) Add on the dashboard a function that allows the user to see all favorited posts
  - Refactor folder structure
  - Not just a simple rearranging, e.g. components are going to be in subfolder of pages (or containers), only being available in a "generic components" folder when they are actually reutilized and not just separated for better readability
- (Really not a priority) Convert to Typescript
- Validate form inputs (HTML5)
- Validate form inputs (React)
  - Also: change things like color indication to actual symbols
- (Not priority) Implement testing (unit testing? integration testing?)
