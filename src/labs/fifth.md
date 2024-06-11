# Lab 5 - CSS

Sice už máme náš skvělý recept, ale ještě by to chtělo vylepšit vzhled. K tomu na webu slouží jiný speciální jazyk CSS.

Do našeho HTML vložíme `style` tag

```html
<style>
  /* Sem půjdou naše styly*/
</style>
```

## Jak CSS funguje

Nejdříve CSS řekneme jaký element chceme nastylovat. Můžeme říct že chceme nastylovat všechny, podle atributu class, nebo podle atributu id.

```css
/* Všechny elementy p */
p {
  color: red;
}

/* Element s class 'trida' */
.trida {
  color: blue;
}

/* Element s id 'id' */
#id {
  color: green;
}
```

---

> ## Úkol 1: Vytvořte elementy s těmito atributy
>
> Ve vašem receptu nastavte barvu nadpisu (`h1`) na jinou barvu.

---

## Další vlastnosti

- `background-color` - barva pozadí
- `color` - barva textu
- `font-size` - velikost písma
- `font-family` - typ písma
- `font-weight` - tloušťka písma
- `text-align` - zarovnání textu

---

## CSS Box model

Každý element na stránce je obklopený boxem. Box má 4 části: `content`, `padding`, `border` a `margin`.
![Box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model-devtools.png)

Pojďme si to vyzkoušet. Vytvořte `div` element a nastavte na něm pozadí, border a padding.

```html
<style>
  .box {
  }
</style>

<div class="box">Box</div>
```
