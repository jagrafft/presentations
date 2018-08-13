# [Arrays, Types, Functional Programming].ap(Julia, Python)

- 01.01.1970. ∅

## Building
1. `git clone ...reveal.js...`
2. Download `american-medical-association.csl` from <https://github.com/citation-style-language/styles>
3. `make slides`
    - [Pandoc](https://pandoc.org/) -> Markdown -> [Reveal.js](https://github.com/hakimel/reveal.js/)

#### `reveal.js/css/theme/black.css` customizations
```css
.reveal h6 {
  margin: 0 0 20px 0;
  color: #fff;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: normal;
  /* text-transform: uppercase; */
  text-shadow: none;
  word-wrap: break-word;
}

.reveal h1 { font-size: 2.1em; text-shadow: none; }
.reveal h2 { font-size: 1.6em; }
.reveal h3 { font-size: 1.3em; }
.reveal h4 { font-size: 1em; }

div[id^="ref-"] > p {
  font-size: 0.4em;
  margin: 0;
  text-align: left;
}
```