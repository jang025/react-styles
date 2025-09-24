# Concepts

## Overview of styling in React

Like many things in React, styling is done a little differently than what we’ve become accustomed to.

There are several popular methods for styling react components; what you choose to use in your applications is up to you. No true industry standard exists, so exposure to multiple styles and examples is ideal.

In an actual job setting, you’ll just adopt whatever libraries or conventions are used in the existing codebase.

## Some options for styling React components

In this module, we will look at a few of the more popular ways to style React components:

1. Imported CSS Stylesheets: This is the approach that Vite uses with its <App> component by default. Each component has a designated CSS file.
   <br>
2. Inline Styling: This approach uses the style prop.
   <br>
3. Styled Components: Requires a package: npm install styled-components.
   In their own words, Styled-Components “Utilizes tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components… Styled-components is compatible with both React (for web) and React Native – meaning it’s the perfect choice even for truly universal apps!”
   <br>
4. CSS Modules: Similar to importing regular stylesheets, but different in a significant way - scoping. CSS files are included the same way but with the following file extension format: filename.module.css. CSS written in this module will be scoped locally to the importing component. This can help avoid class name collisions in large applications.
   <br>
5. SASS: Requires a package: npm install sass.
   Sass: Sass is one of the most robust, stable, and powerful professional-grade CSS extension languages in the world.

# Implementing external stylesheets

## Benefits and pitfalls

Using external CSS files to style React components is straightforward and familiar. However, it’s important to remember that the styles defined in these files are <strong>global</strong>. This means they might conflict if you use the same class or id names in different files.

# Inline styling

Inline styling in React uses a style property; however, unlike the style attribute in HTML, we assign a JS object instead of a string. **style = {JS object}**

## Benefits and pitfalls

Inline styling in React is particularly useful for dynamic styling. Since styles are applied as JavaScript objects, you can easily modify styles based on the component’s state or props. This allows for more flexible and interactive styling that changes in response to user actions or other conditions within the application.

As the application grows, managing styles inline can become cumbersome and less maintainable. This approach can lead to code duplication and difficulty in tracking style-related bugs.

# Styled Components

styled-components combine JavaScript’s tagged template literals with CSS, allowing you to write actual CSS for styling your components directly within your JavaScript files.

This method simplifies the process by directly associating styles with components, eliminating the need for separate CSS files or class names.

We will need to install the package styled-components from npm before we can use it. We should probably also familiarize ourselves with thestyled-components docs.

**npm install styled-components**

The StyledButton variable is a React component with your specified styles applied when we use this approach. You can use this component in your JSX like any other React component.

Lastly, we will take that variable and render it as a component:

## Benefits and pitfalls

Using styled-components, styles are tightly coupled with components, leading to more modular and reusable code. This method promotes the creation of self-contained components where both logic and style are defined together, enhancing code clarity and ease of maintenance. As far as libraries go, this one is among the most popular.

For developers new to this approach, there can be a learning curve in understanding how to use JavaScript for styling. This method also increases the complexity of your code, as it blends CSS with JavaScript, which is not preferable for those who like to keep styling separate from scripting.

# CSS Modules

CSS Modules offer a way to make CSS class names and animation names unique and specific to each component in your application. This helps avoid class name conflicts across your project.

Here’s how CSS Modules differ from regular CSS:

1. **Filename convention**: CSS Module files are named with a .module.css extension. For example, instead of button.css, you would name it button.module.css.

In some tools or frameworks (including Vite), this is not a convention but a requirement (unless you manually configure the behavior).

2. **Import syntax**: Instead of the standard CSS import, CSS Modules are imported using the same syntax as a JavaScript module.

For example, to import a CSS Module named button.module.css into a component file, you’d use this syntax: import styles from './button.module.css'.

3. **Scoped class selectors**: Class selectors in a CSS Module are scoped to the component, meaning they won’t affect other elements outside the component.

However, other types of selectors (like element selectors such as h1 or ID selectors like #submit) in the CSS Module behave as global rules, similar to a regular stylesheet.

In short, using CSS Modules ensures that the styles you define for one component don’t unintentionally impact other parts of your application.

**The class names are keys on the styles object we imported.**

Recall that we can’t access keys that contain dashes using dot notation. Because of this, **camelCase is preferred to kebab-case for class names when using CSS Modules**.

Kebab-case class names will cause problems when using dot notation: **className = {styles.class-name}**

Instead, use camelCase class names that work with dot notation: **className = {styles.className}**

If you must use kebab-case class names, you can use bracket notation: **className = {styles["class-name"]}**

## Benefits and pitfalls

CSS Modules automatically ensure that all class names are local to the component, significantly reducing the risk of style conflicts. This scoping makes it easier to maintain styles across large projects, as you can be confident that changes in one component’s CSS won’t inadvertently impact other components.

CSS Modules are not a JavaScript feature but are implemented in many tools and frameworks, including Vite. This makes them common enough so that a large community of web developers will be familiar with them, regardless of the framework they work in.

While CSS Modules are excellent for component-level styles, managing global styles can be more complex. Developers new to CSS Modules might find it challenging to understand how to apply global styles effectively.

Additionally, CSS Modules treat non-class selectors (like element and ID selectors) as global styles, Careful planning is required to ensure these styles don’t unintentionally affect other parts of the application.

# SASS

CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass has features that don’t exist in CSS like nesting, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS.

We’ll let the Sass team introduce it in their own words:

CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass has features that don’t exist in CSS yet like nesting\*, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS.

**Once you start tinkering with Sass, it will take your preprocessed Sass file and save it as a normal CSS file that you can use in your website**

Notice the --save-dev flag. This indicates that this is a development dependency, but it’s not a dependency for our production app. Recall the quote above: “[…] it will take your preprocessed Sass file and save it as a normal CSS file that you can use in your website.”. The Sass package is only used during development to preprocess your Sass files into CSS files used in production.

## Benefits and pitfalls

Sass introduces powerful features like variables, mixins, nesting, inheritance, and more that aren’t available in standard CSS. These features allow for writing more maintainable and concise styles. Sass helps organize large style sheets efficiently and enables reusability, making managing styles in large-scale projects easier.

Sass files need to be preprocessed into standard CSS before they can be used on a website. This adds an extra step in the development process, requiring tools for compilation and potentially increasing the initial setup complexity. Newcomers to Sass may also face a learning curve in understanding its syntax and features, particularly if they’re only familiar with traditional CSS.
