# crypto-dashboard

LIVE: https://cryptoboard-project.web.app/

Un tablero de criptomonedas construido utilizando React JS. Muestra información resumida tanto de monedas como de exchanges. Al clickear en cualquier moneda muestra información detallada junto con un gráfico de la evolución en el precio.

Liberías utilizadas:

- react-number-format
- axios
- react-chartjs-2
- bootstrap
- jquery (para las funcionalidades de Javascript en Bootstrap)
- font-awesome

API utilizada:

- CoinGecko API v3: https://www.coingecko.com/api/documentations/v3

Como funciona el gráfico de Chart.js:

1. A través de una constante "data" se definen los labels y los valores de cada eje .
2. Los valores se obtienen solicitando a la API los últimos precios disponibles y guardándolos en el estado ChartValues. Luego se agrega la informacíón necesaria para el gráfico a un array, que es el que se va a utilizar finalmente.
3. El label determina la cantidad de días que va a abarcar el eje x (es igual a la cantidad de valores disponibles en la API para cada moneda) y se encuentra la variable chartDays.
