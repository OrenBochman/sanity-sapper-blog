/**
 *  md templates to test the markdown editor
 */
 import path from 'path';
 import fs from 'fs'
 
export let chunks : Array<{fname:String}>=[];


//  chunks.push({
//   name:'basic',
//   active:true,
//   md:

// })


const fence = '```';
export const citations = `
## citations
Some text in which I cite an author.[@krycho:revelation:2015, ¶6]

More text. Another citation.[Contra @krycho:revelation:2015, ¶15, who has
everything *quite* wrong.]

What is this? Yet _another_ citation?[@krycho:revelation:2015]
`;

export const bibliography=`@book{beale:revelation:2015,
  Date-Added = {2015-07-20 21:16:02 +0000},
  Date-Modified = {2015-07-20 21:21:05 +0000},
  Editor = {G. K. Beale and David H. Campbell},
  Publisher = {William B. Eerdmans Publishing Company},
  Title = {Revelation: A Shorter Commentary},
  Year = {2015}}`;

 export const csl=``;
export const basic  = `

## Headings

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading



## Horizontal Rules

___

---

***



## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with +, -, or *
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as 1.

Start numbering with offset:

57. foo
1. bar


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


`;

export const typography = `
## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

`;

export const code = `

# Code

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

${fence}
Sample text here...
${fence}

Syntax highlighting

${fence} js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
${fence}
`;

export const tables = `
## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. | 

| ext    | extension to be used for dest files. |`;

export const footnotes = `# Footnotes

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.`;

export const task_lists= `
### Solar System Exploration, 1950s – 1960s

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley`;

export const plugin_emojis = `

## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.
`;

export const plugins_sub = `
### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O
`;

export const plugins_ins = `
### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++
`;

export const plugins_mark = `
### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==
`;
export const plugins_footnote = `


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

`;

export const plugins_defintion_list = `

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


`;

export const plugins_abbr = `

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language


`;

export const plugins_warning = `

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::

`;