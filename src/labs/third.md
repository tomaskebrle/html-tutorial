# Lab 3 - Multimédia a odkazy

Tak příspěvek o našem oblíbeném jídle už máme, ale chtělo by ho to nechat trochu oživit.

## Obrázky

Pro přidávání obrázku se v HTML používá tag `img`.

### Atributy

Předtím než přidáme obrázek do našeho textu, potřebujeme se naučit o tom co je to atribut. Atributy jsou speciální vlastnosti, které každý tag může mít. Například tag `img` má atributy `src` a `alt`.

Atribut se píše po názvu tagu a je oddělen mezerou. Nejdříve se píše jméno atributu, pak rovnítko a nakonec hodnota atributu v uvozovkách.

```html
<img src="https://priklad.cz/obrazek.jpg" />
```

Všimněte si že `img` je taky speciální tag, který nemá uzavírací tag. Je tzv. samo uzavírací, indikováno `/` na konci tagu.

Dalšim atributem na `img` je `alt`, kde specifikujeme co na obrázku je pro nevidomé uživatele.

```html
<img src="https://priklad.cz/obrazek.jpg" alt="Popis obrázku" />
```

Často také potřebujeme obrázek zmenšit, k tomuto používáme `width` a `height` pro šířku a výšku.

---

> ## Cvičení 1.
>
> Vyhledej si obrázek svého jídla, a přidej ho do svého článku. Pokud je obrázek až moc velkej tak ho nezapomeň zmenšit pomocí `width` a `height`

---

## Odkazy

Na webu je také dost časté že chceme odkazovat na jiné stránky, než ty na kterých se nacházíme. K tomu slouží tag `a`. Na tomto tagu můžume specifikovat atribut `href`, kam vložíme URL adresu, na kterou chceme uživatele odkázat.

```html
<a href="https://priklad.cz">Odkaz na stránku</a>
```

---

> ## Cvičení 2.
>
> Vyhledej někde recept na svoje oblíbené jídlo, a přidej odkaz s receptem na svojí stránku.
