# HTML tutoriál
## Co je HTML?
### Tag
Každý tag má svůj význam. Tagy se píšou do ostrých závorek. Například `<p>` je tag pro odstavec. Tagy se vždy uzavírají. Například `</p>` uzavírá tag pro odstavec.


Napiš svůj první tag

```html
<p>Ahoj světe!</p>
```

Máme různé tagy pro různé věci. Například tag `<h1>` je pro nadpis první úrovně. Tag `<h2>` je pro nadpis druhé úrovně. Tag `<h3>` je pro nadpis třetí úrovně a tak dále.

```html
<h1>První nadpis</h1>
<h2>Druhý nadpis</h2>
<h3>Třetí nadpis</h3>
```

### Atributy
Tagy mohou mít i atributy. Atributy se píšou do tagu jako vlastnosti. Například tag `<a>` má atribut `href`, který určuje odkaz.

```html
<a href="https://www.google.com">Odkaz na Google</a>
```

### Vnořování
Tagy můžeme vnořovat. To znamená, že můžeme jeden tag vložit do druhého tagu. Například můžeme vložit odkaz do odstavce.

```html
<p>Text s <a href="https://www.google.com">odkazem</a>.</p>
```


---
## Seznam bežných tagů
Není nutné si je pamatovat, uvádím spíš pro přehled toho, co je možné.

### Text
- `<p>` - odstavec
- `<h1>`, `<h2>`, `<h3>`, ... - nadpisy
- `<a>` - odkaz

### Obrázky a multimédia
- `<img>` - obrázek
- `<video>` - video

### Jiné
- `<div>` - blokový element
- `<span>` - řádkový element

### Seznamy
- `<ul>` - nečíslovaný seznam
- `<ol>` - číslovaný seznam
- `<li>` - položka seznamu


---
## Naše první využití HTML
V rámci tohoto cvičení si postupně vytvoříme osobní webovou stránku. Na této stránce se představíme a něco o sobě napíšeme. Kdyby vás to zaujalo a měli by jste moc volného času, tak lze vytvořit i něco [takového](https://tomaskebrle.cz/) nebo [takového](https://vaclavparma.cz/).

> Do kódu umístím komentáře, které vysvětlují, co který kód dělá. Komentáře se v HTML píší mezi `<!--` a `-->`. Například:
> ```html
> <!-- Tohle je komentář -->
> ```
> Komentáře můžete vymazat a funkčnost se nezmění.

Na začátek si vytvoříme základní strukturu HTML dokumentu. Tato struktura je pro každý HTML dokument stejná.

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
</head>
<body>
    
</body>
</html>
```

