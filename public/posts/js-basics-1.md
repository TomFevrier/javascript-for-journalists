## Variables

En programmation, **une variable est une "boîte" qui possède un nom et qui contient des données**. En JavaScript, une variable est déclarée en utilisant les mots-clés `const` ou `let`.

~~~
const name = 'Arthur';
console.log(name);	// Affiche Arthur
...
let answer = 42;
console.log(answer);	// Affiche 42
~~~

Comme tu le vois, en JavaScript une variable peut contenir :
- **un nombre**, entier ou à virgule
- **du texte** : en informatique on dit plutôt "chaîne de caractères", ou _string_ en anglais
- **un booléen**, c'est-à-dire vrai ou faux (`true`/`false`)
- et plein d'autres choses : des **fonctions**, des **tableaux**, des **objets**... On verra tout ça plus tard 😉

Contrairement à d'autres langages, pas besoin de préciser le type de la variable, JavaScript le devine tout seul. Attention, **une chaîne de caractères doit toujours être entre guillemets**, simples ou doubles (c'est comme ça que JavaScript différencie le texte et les noms de variables).

Il faut distinguer la **déclaration** d'une variable (c'est-à-dire le moment où la variable est créée) et l'**assignation** d'une variable, c'est-à-dire le moment où on lui donne une valeur. Une variable déclarée mais non assignée vaut `undefined`.

~~~
let name1;				// La variable est déclarée mais pas assignée
console.log(name1);		// Affiche undefined
name1 = 'Arthur';		// La variable est assignée
console.log(name1);		// Affiche Arthur
...
const name2 = 'Zaphod';	// La variable est déclarée et assignée en même temps
console.log(name2);		// Affiche Zaphod
~~~

Mais quelle est la différence entre `const` et `let` ? Contrairement à ce que l'on pourrait penser, `const` ne signifie _pas exactement_ que la variable est une constante mais plutôt qu'elle ne peut pas être réassignée. **Une variable `const` doit être déclarée et assignée sur la même ligne/instruction, et ensuite on ne peut pas lui donner une autre valeur.**

~~~
const name = 'Arthur';
name = 'Zaphod';		// Uncaught TypeError: invalid assignment to const 'name'
~~~

(i) Dans certains tutoriels en ligne, tu trouveras peut-être le mot-clé `var` pour déclarer une variable.
`var` est une ancienne syntaxe JavaScript quasiment équivalente à `let`, mais qui déclare une variable de manière globale (ce qui signifie que la variable peut être utilisée **avant** d'être déclarée !)
Pour éviter ce comportement étrange, il est préférable de toujours utiliser `const` si la variable n'a pas besoin d'être réassignée (9 fois sur 10), ou `let` dans le cas contraire.

**Comment nommer ses variables ?** Une variable doit être en un seul mot, et peut contenir des chiffres (mais pas au début). Je te conseille de nommer tes variables en anglais, pour plusieurs raisons : c'est en général plus court, tu n'as pas besoin de t'embêter avec les accents, et cela rend ton code plus facile à comprendre pour des anglophones si tu demandes de l'aide en ligne.

Un nom de variable doit être le plus clair possible. **Si tu souhaites que le nom de ta variable contienne plusieurs mots, tu peux l'écrire en _camelCase_** (c'est-à-dire avec une majuscule au début de chaque nouveau mot, à la manière des hashtags sur Twitter). Par exemple, une variable contenant une date de naissance pourra s'appeler `dateOfBirth`.

(i) La **_camelCase_** est une convention de nommage des variables, utilisée en JavaScript. D'autres langages utilisent la ***snake_case***, avec un tiret bas (_underscore_) entre chaque mot : c'est le cas de Python par exemple.
Ces noms viennent de la ressemblance avec les animaux en question : les majuscules de la _camelCase_ la font ressembler à un chameau, et les tirets bas de la *snake_case* lui donnent des airs de serpent qui rampe.

(S) Une variable est une "boîte" qui possède un nom et contient une valeur, qui peut être aussi bien un nombre, une chaîne de caractères, un booléen, etc.
Une variable doit toujours être déclarée avec le mot-clé `const` si elle n'a pas besoin d'être réassignée, ou avec `let` si sa valeur peut être amenée à changer.
Une variable doit être nommée de manière claire, en _camelCase_ si son nom ne tient pas en un seul mot.

***
