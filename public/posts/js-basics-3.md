## Fonctions

En programmation, un peu comme en maths, **une fonction est un bloc qui prend des variables en paramètres et retourne une valeur**.

~~~
function sum(a, b) {
	return a + b;
}
...
console.log(sum(2, 2));	// Affiche 4
~~~

Dans l'exemple précédent, la fonction `sum` prend deux paramètres `a` et `b` et renvoie la somme de ces deux nombres. Le corps de la fonction se situe entre les accolades, et peut contenir autant de lignes que nécessaires : comme à l'intérieur d'un bloc `if`/`else`, ces lignes sont indentées. Le `return` doit forcément être sur la dernière ligne, puisqu'il a pour effet de sortir de la fonction ; s'il est omis ou s'il n'est suivi d'aucune valeur, la fonction renvoie `undefined`.

Depuis 2015 et la version dite ES6, JavaScript possède également une autre syntaxe pour les fonctions, que j'aurai tendance à privilégier par la suite :

~~~
const sum = (a, b) => {
	return a + b;
}
~~~

Ici, la fonction est introduite par les caractères `=>` et est assignée à une variable `const`. Ces fonctions fléchées (_arrow functions_) ont l'avantage non seulement d'être plus courtes, mais aussi de pouvoir être écrites sur une seule ligne si elles ne consistent qu'en un `return` :

~~~
const sum = (a, b) => a + b;
~~~

Bien sûr, une fonction peut ne pas prendre de paramètre. Dans ce cas, les parenthèses sont tout de même nécessaires, même si elle sont vides :

~~~
function useless() {
	return 42;
}
...
const useless = () => 42;
...
console.log(useless());	// Affiche 42
~~~

(S) Une fonction est un bloc qui prend zéro, une ou plusieurs variable(s) en paramètre(s), et renvoie une unique valeur.
Le corps de la fonction est entre accolades et indenté. La dernière instruction d'une fonction doit être la valeur de retour précédée du mot-clé `return`.
Une fonction peut s'écrire de deux manières : avec le mot-clé `function` ou bien sous la forme d'une "fonction fléchée" assignée à une variable. Si une fonction fléchée ne consiste qu'en un `return`, celui-ci ainsi que les accolades peuvent être omis et la fonction tient alors en une seule ligne.

***
