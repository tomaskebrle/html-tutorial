# Lab 4 - Správná HTML struktura

Ačkoliv všechno HTML co jsem zatím napsali fungovalo, nebylo 100% správné. Každá HTML stránka má strukturu kterou bychom měli dodržovat. Moderní prohlížeče si poradí i bez ní, ale jelikož se jedná o části, které nejsou stanoveny specifikací, na jiném prohlížeči to může vypadat jinak.

## Základní struktura

Specifikace typu souburu, HTML mělo už několik verzí a každá má jiné vlastnosti. Je proto dobré prohlížečí říct, kterou používáme, mu budeme používat nejnovější HTML5, kterou specikujeme pomocí `<!DOCTYPE html>`.

Po deklaraci následuje element `html`, který obaluje celý obsah stránky. V něm se mohou nacházet pouze dva další elementy `head` a `body`.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Hlavička stránky -->
  </head>
  <body>
    <!-- Tělo stránky -->
  </body>
</html>
```

## Hlavička stránky

V hlavičce stránky se nachází informace o stránce, které nejsou viditelné pro uživatele, ale jsou důležité třeba pro Goole, aby věděl o čem vaše stránka vlastně je. Mezi tyto elementy patří

- `title` - Název stránky, který se zobrazuje v záložce prohlížeče
- `meta` - nastavuje spousta vlastností, podle atributů

> 💡 PRO tip: nepište tyto tagu manuálně, stačí napsat `!` a dát <kbd>Tab</kbd> a po to se vytvoří automaticky.
