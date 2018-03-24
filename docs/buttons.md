# Buttons

Buttons can be applied to `<a>`, `<button>`, or appropriate `<input>` tags.

There are no colors added by default, this is grayscale after-all, but rather
you can use helper classes to decorate, for example

```
<button class="button">Default</button>
```
<button class="button">Default</button>

## Helpers

You can decorate a button to look like a link using `.is-link` helper class

```
<button class="button is-link">Link Button</button>
```
<button class="button is-link">Link Button</button>

or have them rounded via `.is-rounded`

```
<button class="button is-rounded">Rounded Button</button>
```

<button class="button is-rounded">Rounded Button</button>

## Extend

Want some color, try creating a class `.is-primary` like

    .is-primary {color: green}

now you can just add it to your class definition

    ...class="button is-primary"
