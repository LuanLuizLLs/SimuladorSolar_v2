/**
 * FORMATAR REAL
 * @param float
 * @returns {string}
 * @constructor
 */
export function Real(float) {
    const format = parseFloat(float);
    return format.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

/**
 * FORMATAR DECIMAL
 * @param float
 * @param digits
 * @returns {string}
 * @constructor
 */
export function Decimal(float, digits = 2) {
    const format = parseFloat(float);
    return format.toFixed(digits);
}

/**
 * REMOVER VIRGULA
 * @param string
 * @returns {*}
 */
export function removerVirgula(string) {
    let replace = string.replace(/\D/g, '');
    replace = replace.replace(/(\d)(\d{2})$/, '$1.$2');
    return replace
}