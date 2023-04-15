const VALOR_BTC_ETH = 13.5400;
const VALOR_BTC_USD = 39685.40;

let btcIngresado = prompt ("Ingrese Bitcoin a Convertir");
let conversionRequerida = confirm ("Aceptar para ETH Y cancelar para USD");

if (conversionRequerida) {
    alert ("tu conversion es: " + (btcIngresado * VALOR_BTC_ETH));
} else {
    alert ("Tu conversion es:" + (btcIngresado * VALOR_BTC_USD));
}