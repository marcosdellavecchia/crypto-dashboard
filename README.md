# crypto-dashboard

![Cryptoboard Project Logo](https://i.imgur.com/I7sBa8s.png)

### 🔴 LIVE: https://cryptoboard-project.web.app/

Cryptoboard es un tablero de criptomonedas con información actualizada construído con React JS. 

### Funcionalidades
- Header de información global:
  - Cantidad de monedas activas
  - ICOs (Initial Coin Offerings) en curso
  - Cantidad de exchanges
  - Variación porcentual del mercado en las últimas 24 horas.
  
#### Tablero de criptomonedas:
- Logo
- Nombre
- Cotización
- Variación (últ. 24h)
- Capitalización de mercado
  
#### Página de una criptomoneda específica:
- Precio actual
- Precios máx. y min. (últ. 24h)
- Capitalización total y ranking
- Sitio web
- Gráfico con evolución en los últ. 30 días.
  
#### Tablero de exchanges:
- Ranking
- Logo
- Ubicación geográfica
- Año de creación
- Volúmen operado en BTC (últ. 24h)

#### Página de un exchange específico:
- Detalle de últimas transacciones realizadas:
  - Moneda
  - Paridad
  - Volumen (BTC)
  - Ratio Bid/Ask

### Liberías utilizadas:
- react-number-format
- axios
- react-chartjs-2
- react-router-dom
- bootstrap
- reactstrap (para modales)
- jquery (para las funcionalidades de Javascript en Bootstrap)
- font-awesome

#### API utilizada:

- CoinGecko API v3: https://www.coingecko.com/api/documentations/v3
