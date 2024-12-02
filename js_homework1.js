/* Домашня робота до заняття 4*/

console.log("Case 1: 'number' + 3 + 3")
console.log('number' + 3 + 3) //Відбувається конкатенація строк. Очікувана відповідь - 'number33'

console.log("\nCase 2: null + 3")
console.log(null + 3) // null при приведенні до числа стає 0, далі звичайне додавання 0 + 3. Очікувана відповідь 3

console.log("\nCase 3: 5 && \"qwerty\"")
console.log(5 && "qwerty") // 5 - true, тож за правилами обробки оператора && - продовжуємо пошук. оскільки qwerty  теж true - повертаємо останній true. Очікувана відповідь 'qwerty'

console.log("\nCase 4: +'40' + +'2' + \"hillel\"")
console.log(+'40' + +'2' + "hillel") // Числа 40 і 2 складаються і конкатенуються зі строкою hillel. Очікувана відповідь '42hillel'

console.log("\nCase 5: '10' - 5 === 6")
console.log('10' - 5 === 6) //10 приводиться до числа, далі віднімається число 5. 4 не дорівнює (суворо) 6, тож результат буде false. Очікуваний результат 'false'


console.log("\nCase 6: true + false")
console.log(true + false) //true -> 1, false-> 0. 1+0 = 1. Очікуваний результат 1

console.log("\nCase 7: '4px' - 3")
console.log('4px' - 3) //'4px' не може бути перетворено на число, тож дорівнює NaN. NaN - 3 = NaN Очікуваний результат NaN

console.log("\nCase 8: '4' - 3")
console.log('4' - 3) // Строка '4' перетворюється на число. Очікувана відповідь - 1

console.log("\nCase 9: '6' + 3 ** 0")
console.log('6' + 3 ** 0) // Зі строкою 6 конкатенується результат зведення 3 в ступінь 0, що дорівнює 1. Очікуваний результат 61

console.log("\nCase 10: 12 / '6'")
console.log(12 / '6') // 6 перетворюється на число. 12/ 6 = 2. Очікувана відповідь 2

console.log("\nCase 11: '10' + (5 === 6)")
console.log('10' + (5 === 6)) // Строка 10 конкатенується з false - результатом суворого порівняння 5 та 6. Очікувана відповідь 10false

console.log("\nCase 12: null == ''")
console.log(null == '') // Будь-яке порівняння null з будь-чим, окрім undefined - дає false. Очікувана відповідь false

console.log("\nCase 13: 3 ** (9 / 3)")
console.log(3 ** (9 / 3)) // 3 звести в ступінь 3 (результат 9/3). Очікувана відповідь 27

console.log("\nCase 14: !!'false' == !!'true'")
console.log(!!'false' == !!'true') // подвійне заперечення !!'false' дає true, подвійне заперечення !!'true' дає true. Очікувана відповідь - true

console.log("\nCase 15: 0 || '0' && 1")
console.log( 0 || '0' && 1) // Спочатку виконується логічне "І" - '0' && 1 - повертається останній - отже, 1. Далі порівнюється логічним "АБО": 0 || 1 -> повертається останній істинний, а значить 1. Очікуваний результат - 1

console.log("\nCase 16: (+null == false) < 1")
console.log((+null == false) < 1) //Унарний оператор + перетворює значення на число. null дорівнює 0. умова 0 == false - дає true. true приводиться до числа 0. Відбувається обчислення 1 < 1. Це не істина. Очікувана відповідь - false

console.log("\nCase 17: false && true || true")
console.log(false && true || true) //Спочатку логічне "І". Результат false && true - false (повертається перша неістина, або остання істина). Далі логічне "АБО" - повертається перша істина. false || true -> true. Очікуваний результат true

console.log("\nCase 18: false && (false || true)")
console.log(false && (false || true)) //Спочатку логічне "АБО", бо значення в дужках є більш пріоритетним. Вираз з логічним АБО повертає - true. Далі логічне "І" - false && true - повертаємо першу неістину. Очкваний результат - false

console.log("\nCase 19: (+null == false) < 1 ** 5")
console.log((+null == false) < 1 ** 5) // унарний оператор + перетворює null на число 0. Коли 0 порівнюється з false - false також перетворюється на число 0. 0 == 0 -> true. Виконуємо другий за пріоритетом вираз - 1**5 - це зведення 1 в ступінь 5. Дорівнює 1. Тепер порівнюємо чи true менше одиниці. приводимо true до числа 1. Вираз 1 < 1 повертає false. Очікувана відповідь - false